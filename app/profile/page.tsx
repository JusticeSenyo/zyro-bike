"use client"

import { useState } from "react"
import Image from "next/image"
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
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/hooks/use-toast"
import {
  AlertCircle,
  Bike,
  CreditCard,
  Download,
  Edit,
  Info,
  LogOut,
  QrCode,
  Settings,
  Trash,
  User,
} from "lucide-react"

export default function ProfilePage() {
  // Mock user data - in a real app, this would come from an API or context
  const [userData, setUserData] = useState({
    name: "Kofi Mensah",
    email: "kofi.mensah@example.com",
    studentId: "10123456",
    ghanaCard: "GHA-123456789",
    joinedDate: "March 15, 2023",
    plan: "weekly",
    nextBilling: "April 5, 2023",
    daysLeft: 7,
    ridesThisMonth: 24,
    totalRides: 142,
    notifications: true,
    emailUpdates: false,
  })

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState("")
  const [isChangingPlan, setIsChangingPlan] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(userData.plan)

  const plans = [
    {
      id: "daily",
      name: "Daily Pass",
      price: "GH₵5",
      period: "per day",
      description: "Unlimited 30-minute rides",
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      price: "GH₵30",
      period: "per week",
      description: "Unlimited 45-minute rides",
    },
    {
      id: "monthly",
      name: "Monthly Pass",
      price: "GH₵100",
      period: "per month",
      description: "Unlimited 60-minute rides",
    },
  ]

  const handleDeleteAccount = () => {
    if (deleteConfirmation !== userData.email) {
      toast({
        title: "Error",
        description: "Email doesn't match. Please try again.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would call an API to delete the account
    toast({
      title: "Account Deleted",
      description: "Your account has been successfully deleted.",
    })

    // Redirect to home page after account deletion
    setTimeout(() => {
      window.location.href = "/"
    }, 2000)
  }

  const handleChangePlan = () => {
    // In a real app, this would call an API to update the plan
    setUserData((prev) => ({
      ...prev,
      plan: selectedPlan,
    }))

    setIsChangingPlan(false)

    toast({
      title: "Plan Updated",
      description: "Your subscription plan has been updated successfully.",
    })
  }

  const handleToggleNotification = (value: boolean) => {
    setUserData((prev) => ({
      ...prev,
      notifications: value,
    }))

    toast({
      title: "Settings Updated",
      description: "Your notification preferences have been updated.",
    })
  }

  const handleToggleEmailUpdates = (value: boolean) => {
    setUserData((prev) => ({
      ...prev,
      emailUpdates: value,
    }))

    toast({
      title: "Settings Updated",
      description: "Your email preferences have been updated.",
    })
  }

  const getCurrentPlan = () => {
    return plans.find((plan) => plan.id === userData.plan) || plans[0]
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and subscription</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
          {/* Sidebar */}
          <div className="flex flex-col space-y-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div className="space-y-1 text-center">
                    <h2 className="text-xl font-semibold">{userData.name}</h2>
                    <p className="text-sm text-muted-foreground">{userData.email}</p>
                  </div>
                  <div className="w-full pt-4 border-t">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Member since</span>
                      <span className="font-medium">{userData.joinedDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Current Plan</h3>
                    <Badge variant="outline" className="capitalize">
                      {userData.plan}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Next billing</span>
                    <span>{userData.nextBilling}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Days left</span>
                    <span>{userData.daysLeft} days</span>
                  </div>
                  <Button variant="outline" className="w-full" onClick={() => setIsChangingPlan(true)}>
                    Change Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="space-y-4 flex flex-col items-center">
                  <QrCode className="h-8 w-8" />
                  <h3 className="font-medium text-center">Your Bike Access QR Code</h3>
                  <p className="text-sm text-center opacity-90">
                    Scan this code at any Zyro Bike station to unlock your ride
                  </p>
                  <div className="bg-white p-4 rounded-lg w-full max-w-[200px] mx-auto">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="QR Code"
                      width={200}
                      height={200}
                      className="w-full h-auto"
                    />
                  </div>
                  <Button variant="secondary" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download QR Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <Tabs defaultValue="overview">
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bike className="h-5 w-5 text-primary" />
                      Ride Statistics
                    </CardTitle>
                    <CardDescription>Your bike usage statistics and history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Rides this month</div>
                        <div className="text-3xl font-bold">{userData.ridesThisMonth}</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-sm font-medium text-muted-foreground">Total rides</div>
                        <div className="text-3xl font-bold">{userData.totalRides}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Subscription Details
                    </CardTitle>
                    <CardDescription>Information about your current subscription plan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Current Plan</div>
                          <div className="font-medium capitalize">{getCurrentPlan().name}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Price</div>
                          <div className="font-medium">
                            {getCurrentPlan().price} {getCurrentPlan().period}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Next Billing Date</div>
                          <div className="font-medium">{userData.nextBilling}</div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-sm font-medium text-muted-foreground">Days Left</div>
                          <div className="font-medium">{userData.daysLeft} days</div>
                        </div>
                      </div>
                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertTitle>Plan Benefits</AlertTitle>
                        <AlertDescription>
                          {getCurrentPlan().description}. Access to all bike stations across campus.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
                    <Button variant="outline" onClick={() => setIsChangingPlan(true)}>
                      Change Plan
                    </Button>
                    <Link href="/payment-methods">
                      <Button variant="secondary">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Manage Payment Methods
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <QrCode className="h-5 w-5 text-primary" />
                      How to Use Your QR Code
                    </CardTitle>
                    <CardDescription>Quick guide to accessing Zyro Bikes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="text-lg font-bold">1</span>
                          </div>
                          <h4 className="font-medium">Find a Bike</h4>
                          <p className="text-sm text-muted-foreground">Locate any Zyro Bike station on campus</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="text-lg font-bold">2</span>
                          </div>
                          <h4 className="font-medium">Scan QR Code</h4>
                          <p className="text-sm text-muted-foreground">Hold your QR code to the scanner on the bike</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <span className="text-lg font-bold">3</span>
                          </div>
                          <h4 className="font-medium">Ride Away</h4>
                          <p className="text-sm text-muted-foreground">
                            The bike will unlock automatically. Enjoy your ride!
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Account Tab */}
              <TabsContent value="account" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Personal Information
                    </CardTitle>
                    <CardDescription>Update your personal details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label>Full Name</Label>
                          <div className="flex items-center gap-2">
                            <Input value={userData.name} readOnly />
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit name</span>
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Email</Label>
                          <div className="flex items-center gap-2">
                            <Input value={userData.email} readOnly />
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit email</span>
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Student ID</Label>
                          <div className="flex items-center gap-2">
                            <Input value={userData.studentId} readOnly />
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit student ID</span>
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Ghana Card ID</Label>
                          <div className="flex items-center gap-2">
                            <Input value={userData.ghanaCard} readOnly />
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit Ghana Card ID</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                      <AlertCircle className="h-5 w-5" />
                      Danger Zone
                    </CardTitle>
                    <CardDescription>Irreversible actions for your account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border border-destructive/20 p-4">
                        <div className="flex flex-col space-y-2">
                          <h4 className="font-medium text-destructive">Delete Account</h4>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all associated data. This action cannot be undone.
                          </p>
                          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                            <DialogTrigger asChild>
                              <Button variant="destructive" className="mt-2 w-full sm:w-auto">
                                <Trash className="h-4 w-4 mr-2" />
                                Delete Account
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle className="text-destructive">Delete Account</DialogTitle>
                                <DialogDescription>
                                  This action cannot be undone. This will permanently delete your account and remove all
                                  associated data.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4 py-4">
                                <p className="text-sm text-muted-foreground">
                                  To confirm, please type your email address:{" "}
                                  <span className="font-medium">{userData.email}</span>
                                </p>
                                <Input
                                  value={deleteConfirmation}
                                  onChange={(e) => setDeleteConfirmation(e.target.value)}
                                  placeholder="Enter your email"
                                />
                              </div>
                              <DialogFooter>
                                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                                  Cancel
                                </Button>
                                <Button variant="destructive" onClick={handleDeleteAccount}>
                                  Delete Account
                                </Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col space-y-2">
                          <h4 className="font-medium">Log Out</h4>
                          <p className="text-sm text-muted-foreground">Log out from your account on this device.</p>
                          <Button variant="outline" className="mt-2 w-full sm:w-auto">
                            <LogOut className="h-4 w-4 mr-2" />
                            Log Out
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings" className="space-y-6 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Preferences
                    </CardTitle>
                    <CardDescription>Manage your notification and communication preferences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="notifications">Push Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive notifications about your rides and account
                          </p>
                        </div>
                        <Switch
                          id="notifications"
                          checked={userData.notifications}
                          onCheckedChange={handleToggleNotification}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <Label htmlFor="email-updates">Email Updates</Label>
                          <p className="text-sm text-muted-foreground">Receive promotional emails and newsletters</p>
                        </div>
                        <Switch
                          id="email-updates"
                          checked={userData.emailUpdates}
                          onCheckedChange={handleToggleEmailUpdates}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Change Plan Dialog */}
      <Dialog open={isChangingPlan} onOpenChange={setIsChangingPlan}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Change Subscription Plan</DialogTitle>
            <DialogDescription>Select a new plan for your Zyro Bike subscription</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`flex items-center space-x-2 rounded-lg border p-4 ${
                    selectedPlan === plan.id ? "border-primary" : ""
                  }`}
                >
                  <RadioGroupItem value={plan.id} id={`plan-${plan.id}`} />
                  <Label htmlFor={`plan-${plan.id}`} className="flex flex-1 cursor-pointer justify-between">
                    <div>
                      <div className="font-medium">{plan.name}</div>
                      <div className="text-sm text-muted-foreground">{plan.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{plan.price}</div>
                      <div className="text-sm text-muted-foreground">{plan.period}</div>
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsChangingPlan(false)}>
              Cancel
            </Button>
            <Button onClick={handleChangePlan}>Confirm Change</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

