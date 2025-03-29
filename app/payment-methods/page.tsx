"use client"

import { Badge } from "@/components/ui/badge"
import { Grid } from 'ldrs/react'
import 'ldrs/react/Grid.css'



import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"
import {
  CreditCard,
  Smartphone,
  Plus,
  Check,
  Trash,
  AlertCircle,
  ArrowLeft,
  Clock,
  Building2,
  CheckCircle2,
  Loader2,
} from "lucide-react"

export default function PaymentMethodsPage() {
  // Mock payment methods data - in a real app, this would come from an API
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "momo1",
      type: "momo",
      provider: "MTN MoMo",
      number: "055*****789",
      isDefault: true,
      icon: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "card1",
      type: "card",
      provider: "Visa",
      number: "**** **** **** 4242",
      expiry: "09/25",
      isDefault: false,
      icon: "/placeholder.svg?height=40&width=40",
    },
  ])

  const [paymentHistory, setPaymentHistory] = useState([
    {
      id: "pay1",
      date: "2023-03-28",
      amount: "₵30.00",
      description: "Weekly Subscription",
      status: "completed",
      method: "MTN MoMo (055*****789)",
    },
    {
      id: "pay2",
      date: "2023-03-21",
      amount: "₵30.00",
      description: "Weekly Subscription",
      status: "completed",
      method: "MTN MoMo (055*****789)",
    },
    {
      id: "pay3",
      date: "2023-03-14",
      amount: "₵30.00",
      description: "Weekly Subscription",
      status: "completed",
      method: "Visa (**** 4242)",
    },
  ])

  // State for dialogs
  const [isAddMobileMoneyOpen, setIsAddMobileMoneyOpen] = useState(false)
  const [isAddCardOpen, setIsAddCardOpen] = useState(false)
  const [isAddBankOpen, setIsAddBankOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [methodToDelete, setMethodToDelete] = useState(null)
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState("idle") // idle, processing, success
  const [paymentAmount, setPaymentAmount] = useState("30.00")

  // Form states
  const [mobileMoneyForm, setMobileMoneyForm] = useState({
    provider: "mtn",
    number: "",
    name: "",
  })

  const [cardForm, setCardForm] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  })

  const [bankForm, setBankForm] = useState({
    bank: "",
    accountNumber: "",
    accountName: "",
    branch: "",
  })

  const handleMobileMoneyChange = (field, value) => {
    setMobileMoneyForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleCardChange = (field, value) => {
    setCardForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleBankChange = (field, value) => {
    setBankForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleAddMobileMoney = () => {
    // Validate form
    if (!mobileMoneyForm.number || !mobileMoneyForm.name) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Get provider name based on selection
    const providerNames: { [key: string]: string } = {
      mtn: "MTN MoMo",
      telecel: "Telecel Cash",
      airteltigo: "AirtelTigo Cash",
    }

    // Create new payment method
    const newMethod = {
      id: `momo${Date.now()}`,
      type: "momo",
      provider: providerNames[mobileMoneyForm.provider],
      number: mobileMoneyForm.number.replace(/(\d{3})\d{5}(\d{3})/, "$1*****$2"),
      isDefault: paymentMethods.length === 0,
      icon: "/placeholder.svg?height=40&width=40",
    }

    setPaymentMethods((prev) => [...prev, newMethod])
    setIsAddMobileMoneyOpen(false)

    // Reset form
    setMobileMoneyForm({
      provider: "mtn",
      number: "",
      name: "",
    })

    toast({
      title: "Success",
      description: "Mobile money payment method added successfully.",
    })
  }

  const handleAddCard = () => {
    // Validate form
    if (!cardForm.number || !cardForm.name || !cardForm.expiry || !cardForm.cvc) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Create new payment method
    const newMethod = {
      id: `card${Date.now()}`,
      type: "card",
      provider: cardForm.number.startsWith("4") ? "Visa" : "Mastercard",
      number: cardForm.number.replace(/(\d{4})\s*(\d{4})\s*(\d{4})\s*(\d{4})/, "**** **** **** $4"),
      expiry: cardForm.expiry,
      isDefault: paymentMethods.length === 0,
      icon: "/placeholder.svg?height=40&width=40",
    }

    setPaymentMethods((prev) => [...prev, newMethod])
    setIsAddCardOpen(false)

    // Reset form
    setCardForm({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
    })

    toast({
      title: "Success",
      description: "Card payment method added successfully.",
    })
  }

  const handleAddBank = () => {
    // Validate form
    if (!bankForm.bank || !bankForm.accountNumber || !bankForm.accountName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      })
      return
    }

    // Create new payment method
    const newMethod = {
      id: `bank${Date.now()}`,
      type: "bank",
      provider: bankForm.bank,
      number: bankForm.accountNumber.replace(/(\d{2})\d{5}(\d{3})/, "$1*****$2"),
      isDefault: paymentMethods.length === 0,
      icon: "/placeholder.svg?height=40&width=40",
    }

    setPaymentMethods((prev) => [...prev, newMethod])
    setIsAddBankOpen(false)

    // Reset form
    setBankForm({
      bank: "",
      accountNumber: "",
      accountName: "",
      branch: "",
    })

    toast({
      title: "Success",
      description: "Bank account added successfully.",
    })
  }

  const handleSetDefault = (id) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    )

    toast({
      title: "Default Updated",
      description: "Your default payment method has been updated.",
    })
  }

  const handleDeleteMethod = () => {
    if (!methodToDelete) return

    setPaymentMethods((prev) => {
      const filtered = prev.filter((method) => method.id !== methodToDelete)

      // If we deleted the default method and there are other methods, set a new default
      if (prev.find((m) => m.id === methodToDelete)?.isDefault && filtered.length > 0) {
        filtered[0].isDefault = true
      }

      return filtered
    })

    setIsDeleteDialogOpen(false)
    setMethodToDelete(null)

    toast({
      title: "Payment Method Removed",
      description: "The payment method has been removed successfully.",
    })
  }

  const openDeleteDialog = (id) => {
    setMethodToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const handleProceedToPayment = () => {
    if (paymentMethods.length === 0) {
      toast({
        title: "No Payment Method",
        description: "Please add a payment method before proceeding.",
        variant: "destructive",
      })
      return
    }

    setPaymentStatus("idle")
    setIsPaymentDialogOpen(true)
  }

  const simulatePayment = () => {
    setPaymentStatus("processing")

    // Simulate payment processing
    setTimeout(() => {
      setPaymentStatus("success")

      // Add to payment history
      const newPayment = {
        id: `pay${Date.now()}`,
        date: new Date().toISOString().split("T")[0],
        amount: paymentAmount,
        description: "Weekly Subscription",
        status: "completed",
        method:
          paymentMethods.find((m) => m.isDefault)?.provider +
          " (" +
          paymentMethods.find((m) => m.isDefault)?.number +
          ")",
      }

      setPaymentHistory((prev) => [newPayment, ...prev])
    }, 3000)
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-4">
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to Profile</span>
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Payment Methods</h1>
            <p className="text-muted-foreground">Manage your payment methods and view transaction history</p>
          </div>
        </div>

        <Tabs defaultValue="methods">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="methods">Payment Methods</TabsTrigger>
            <TabsTrigger value="history">Payment History</TabsTrigger>
          </TabsList>

          {/* Payment Methods Tab */}
          <TabsContent value="methods" className="space-y-6 pt-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {paymentMethods.map((method) => (
                <Card key={method.id} className={method.isDefault ? "border-primary" : ""}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                          {method.type === "momo" ? (
                            <Smartphone className="h-5 w-5 text-primary" />
                          ) : (
                            <CreditCard className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-base">{method.provider}</CardTitle>
                          <CardDescription>{method.number}</CardDescription>
                        </div>
                      </div>
                      {method.isDefault && <Badge className="bg-primary text-primary-foreground">Default</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="pb-2">
                    {method.expiry && <p className="text-sm text-muted-foreground">Expires: {method.expiry}</p>}
                  </CardContent>
                  <CardFooter className="flex justify-between pt-2">
                    {!method.isDefault && (
                      <Button variant="outline" size="sm" onClick={() => handleSetDefault(method.id)}>
                        <Check className="h-4 w-4 mr-1" />
                        Set Default
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => openDeleteDialog(method.id)}
                    >
                      <Trash className="h-4 w-4 mr-1" />
                      Remove
                    </Button>
                  </CardFooter>
                </Card>
              ))}

              {/* Add Payment Method Cards */}
              <Card className="border-dashed">
                <CardHeader>
                  <CardTitle className="text-base">Add Payment Method</CardTitle>
                  <CardDescription>Select a payment method type to add</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid gap-2">
                    <Button variant="outline" className="justify-start" onClick={() => setIsAddMobileMoneyOpen(true)}>
                      <Smartphone className="h-4 w-4 mr-2" />
                      Mobile Money
                    </Button>
                    <Button variant="outline" className="justify-start" onClick={() => setIsAddCardOpen(true)}>
                      <CreditCard className="h-4 w-4 mr-2" />
                      Credit/Debit Card
                    </Button>
                    <Button variant="outline" className="justify-start" onClick={() => setIsAddBankOpen(true)}>
                      <Building2 className="h-4 w-4 mr-2" />
                      Bank Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {paymentMethods.length === 0 && (
              <div className="text-center py-10">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted mb-4">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium mb-2">No payment methods</h3>
                <p className="text-muted-foreground mb-4">You haven't added any payment methods yet.</p>
                <Button onClick={() => setIsAddMobileMoneyOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Payment Method
                </Button>
              </div>
            )}
          </TabsContent>

          {/* Payment History Tab */}
          <TabsContent value="history" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Recent Transactions
                </CardTitle>
                <CardDescription>Your payment history for Zyro Bike subscriptions</CardDescription>
              </CardHeader>
              <CardContent>
                {paymentHistory.length > 0 ? (
                  <div className="space-y-4">
                    {paymentHistory.map((payment) => (
                      <div
                        key={payment.id}
                        className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="space-y-1">
                          <p className="font-medium">{payment.description}</p>
                          <p className="text-sm text-muted-foreground">{payment.method}</p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(payment.date).toLocaleDateString("en-GB", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{payment.amount}</p>
                          <Badge
                            variant="outline"
                            className={
                              payment.status === "completed"
                                ? "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400"
                                : "bg-amber-50 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400"
                            }
                          >
                            {payment.status === "completed" ? "Completed" : "Pending"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted mb-4">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium mb-2">No transaction history</h3>
                    <p className="text-muted-foreground">You haven't made any payments yet.</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline">View All Transactions</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-8 flex justify-center">
        <Button size="lg" onClick={handleProceedToPayment} className="px-8">
          Proceed to Payment
        </Button>
      </div>

      {/* Add Mobile Money Dialog */}
      <Dialog open={isAddMobileMoneyOpen} onOpenChange={setIsAddMobileMoneyOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Mobile Money</DialogTitle>
            <DialogDescription>Add a mobile money account as a payment method.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="provider">Provider</Label>
              <Select
                value={mobileMoneyForm.provider}
                onValueChange={(value) => handleMobileMoneyChange("provider", value)}
              >
                <SelectTrigger id="provider">
                  <SelectValue placeholder="Select provider" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mtn">MTN MoMo</SelectItem>
                  <SelectItem value="telecel">Telecel Cash</SelectItem>
                  <SelectItem value="airteltigo">AirtelTigo Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="momo-number">Mobile Number</Label>
              <Input
                id="momo-number"
                placeholder="e.g., 0551234567"
                value={mobileMoneyForm.number}
                onChange={(e) => handleMobileMoneyChange("number", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="momo-name">Account Name</Label>
              <Input
                id="momo-name"
                placeholder="Name registered with mobile money"
                value={mobileMoneyForm.name}
                onChange={(e) => handleMobileMoneyChange("name", e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddMobileMoneyOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddMobileMoney}>Add Payment Method</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Card Dialog */}
      <Dialog open={isAddCardOpen} onOpenChange={setIsAddCardOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Credit/Debit Card</DialogTitle>
            <DialogDescription>Add a card as a payment method.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                placeholder="1234 5678 9012 3456"
                value={cardForm.number}
                onChange={(e) => handleCardChange("number", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="card-name">Cardholder Name</Label>
              <Input
                id="card-name"
                placeholder="Name as it appears on card"
                value={cardForm.name}
                onChange={(e) => handleCardChange("name", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={cardForm.expiry}
                  onChange={(e) => handleCardChange("expiry", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="123"
                  value={cardForm.cvc}
                  onChange={(e) => handleCardChange("cvc", e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddCardOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddCard}>Add Card</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Bank Account Dialog */}
      <Dialog open={isAddBankOpen} onOpenChange={setIsAddBankOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Bank Account</DialogTitle>
            <DialogDescription>Add a bank account as a payment method.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="bank">Bank Name</Label>
              <Select value={bankForm.bank} onValueChange={(value) => handleBankChange("bank", value)}>
                <SelectTrigger id="bank">
                  <SelectValue placeholder="Select bank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="GCB Bank">GCB Bank</SelectItem>
                  <SelectItem value="Ecobank">Ecobank</SelectItem>
                  <SelectItem value="Fidelity Bank">Fidelity Bank</SelectItem>
                  <SelectItem value="Zenith Bank">Zenith Bank</SelectItem>
                  <SelectItem value="Access Bank">Access Bank</SelectItem>
                  <SelectItem value="Stanbic Bank">Stanbic Bank</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="account-number">Account Number</Label>
              <Input
                id="account-number"
                placeholder="e.g., 1234567890"
                value={bankForm.accountNumber}
                onChange={(e) => handleBankChange("accountNumber", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="account-name">Account Name</Label>
              <Input
                id="account-name"
                placeholder="Name on account"
                value={bankForm.accountName}
                onChange={(e) => handleBankChange("accountName", e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="branch">Branch (Optional)</Label>
              <Input
                id="branch"
                placeholder="e.g., Accra Main Branch"
                value={bankForm.branch}
                onChange={(e) => handleBankChange("branch", e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddBankOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleAddBank}>Add Bank Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-destructive" />
              Remove Payment Method
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to remove this payment method? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteMethod}>
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Payment Processing Dialog */}
      <Dialog open={isPaymentDialogOpen} onOpenChange={setIsPaymentDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{paymentStatus === "success" ? "Payment Successful" : "Complete Payment"}</DialogTitle>
            <DialogDescription>
              {paymentStatus === "success"
                ? "Your payment has been processed successfully."
                : "Confirm your payment details below."}
            </DialogDescription>
          </DialogHeader>

          {paymentStatus === "idle" && (
            <>
              <div className="py-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Amount:</span>
                  <span className="text-xl font-bold">{paymentAmount}</span>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-medium mb-2">Payment Method</h4>
                  {paymentMethods.find((m) => m.isDefault) && (
                    <div className="flex items-center space-x-3 p-3 border rounded-md">
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-muted flex items-center justify-center">
                        {paymentMethods.find((m) => m.isDefault)?.type === "momo" ? (
                          <Smartphone className="h-4 w-4 text-primary" />
                        ) : (
                          <CreditCard className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{paymentMethods.find((m) => m.isDefault)?.provider}</p>
                        <p className="text-sm text-muted-foreground">
                          {paymentMethods.find((m) => m.isDefault)?.number}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <DialogFooter>
                <Button variant="outline" onClick={() => setIsPaymentDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={simulatePayment}>Confirm Payment</Button>
              </DialogFooter>
            </>
          )}

          {paymentStatus === "processing" && (
            <div className="py-12 flex flex-col items-center justify-center space-y-4">
              {/* <Loader2 className="h-12 w-12 text-primary animate-spin" /> */}


                <Grid
                  size="60"
                  speed="1.5"
                  color="#fe7200" 
                />
              <p className="text-center text-muted-foreground">
                Processing your payment. Please do not close this window...
              </p>
            </div>
          )}

          {paymentStatus === "success" && (
            <>
              <div className="py-8 flex flex-col items-center justify-center space-y-4">
                <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
                  <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold">Payment Successful!</h3>
                  <p className="text-muted-foreground">
                    Your payment of {paymentAmount} has been processed successfully.
                  </p>
                  <p className="text-muted-foreground">A receipt has been sent to your email.</p>
                </div>
              </div>
            <Link href="/profile" className="w-full">

              <DialogFooter>
                <Button onClick={() => setIsPaymentDialogOpen(false)}>Close</Button>
              </DialogFooter>
                      </Link>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

