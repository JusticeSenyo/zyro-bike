"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Bike, Eye, EyeOff } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// Add these imports at the top with the other imports
import { Camera, Upload, X } from "lucide-react"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    studentId: "",
    ghanaCard: "",
    password: "",
    confirmPassword: "",
  })

  const [activeTab, setActiveTab] = useState("login")
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [termsDialogOpen, setTermsDialogOpen] = useState(false)
  const [privacyDialogOpen, setPrivacyDialogOpen] = useState(false)
  // Add these state variables inside the LoginPage component, with the other state variables
  const [studentIdImage, setStudentIdImage] = useState<string | null>(null)
  const [ghanaCardImage, setGhanaCardImage] = useState<string | null>(null)
  const [isCapturingStudentId, setIsCapturingStudentId] = useState(false)
  const [isCapturingGhanaCard, setIsCapturingGhanaCard] = useState(false)

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setSignupData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      toast({
        title: "Login Successful",
        description: "Welcome back to Zyro Bike!",
      })
      setIsLoading(false)
    }, 1500)
  }

  // Add these functions inside the LoginPage component, before the return statement
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
  ) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const captureImage = (
    setImage: React.Dispatch<React.SetStateAction<string | null>>,
    setIsCapturing: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setIsCapturing(true)
  }

  const handleCaptureStudentId = () => {
    const video = document.getElementById("student-id-video") as HTMLVideoElement
    const canvas = document.createElement("canvas")
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height)
    const imageDataUrl = canvas.toDataURL("image/png")
    setStudentIdImage(imageDataUrl)
    setIsCapturingStudentId(false)

    // Stop all video streams
    video.srcObject?.getTracks().forEach((track) => track.stop())
  }

  const handleCaptureGhanaCard = () => {
    const video = document.getElementById("ghana-card-video") as HTMLVideoElement
    const canvas = document.createElement("canvas")
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height)
    const imageDataUrl = canvas.toDataURL("image/png")
    setGhanaCardImage(imageDataUrl)
    setIsCapturingGhanaCard(false)

    // Stop all video streams
    video.srcObject?.getTracks().forEach((track) => track.stop())
  }

  // Add this effect to handle camera access
  useEffect(() => {
    if (isCapturingStudentId) {
      const startVideo = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true })
          const video = document.getElementById("student-id-video") as HTMLVideoElement
          if (video) {
            video.srcObject = stream
          }
        } catch (err) {
          console.error("Error accessing camera:", err)
          setIsCapturingStudentId(false)
          toast({
            title: "Camera Error",
            description: "Could not access your camera. Please check permissions.",
            variant: "destructive",
          })
        }
      }
      startVideo()
    }

    if (isCapturingGhanaCard) {
      const startVideo = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true })
          const video = document.getElementById("ghana-card-video") as HTMLVideoElement
          if (video) {
            video.srcObject = stream
          }
        } catch (err) {
          console.error("Error accessing camera:", err)
          setIsCapturingGhanaCard(false)
          toast({
            title: "Camera Error",
            description: "Could not access your camera. Please check permissions.",
            variant: "destructive",
          })
        }
      }
      startVideo()
    }

    // Cleanup function to stop all video streams when component unmounts
    return () => {
      const studentIdVideo = document.getElementById("student-id-video") as HTMLVideoElement
      const ghanaCardVideo = document.getElementById("ghana-card-video") as HTMLVideoElement

      if (studentIdVideo && studentIdVideo.srcObject) {
        studentIdVideo.srcObject.getTracks().forEach((track) => track.stop())
      }

      if (ghanaCardVideo && ghanaCardVideo.srcObject) {
        ghanaCardVideo.srcObject.getTracks().forEach((track) => track.stop())
      }
    }
  }, [isCapturingStudentId, isCapturingGhanaCard])

  // Update the handleSignupSubmit function to check for ID images
  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      })
      return
    }

    if (!studentIdImage || !ghanaCardImage) {
      toast({
        title: "ID Images Required",
        description: "Please upload or capture images of both your Student ID and Ghana Card.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Simulate signup
    setTimeout(() => {
      toast({
        title: "Account Created",
        description: "Welcome to Zyro Bike! You can now log in.",
      })
      setIsLoading(false)
    }, 1500)
  }
      const logostyle = {
    "height":"60px",
    "width":"60px",
    "padding": "none",
    "margin": "0",
    "borderRadius": "100%",
    "backgroundSize": "cover",
  }

  return (
    <div className="container flex items-center justify-center min-h-[80vh] py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="flex items-center justify-center p-2 bg-muted rounded-full mb-2">
            {/* <Bike className="h-6 w-6 text-primary" /> */}
            <img style={logostyle} src="LOGO.png" alt="" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">Welcome to Zyro Bike</CardTitle>
          <CardDescription className="text-center">Sign in to your account or create a new one</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login" onClick={() => setActiveTab("login")}>
                Login
              </TabsTrigger>
              <TabsTrigger value="signup" onClick={() => setActiveTab("signup")}>
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="login-password">Password</Label>
                    <Link href="#" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="login-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={handleLoginChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center gap-1">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Logging in...
                    </span>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="signup">
              <form onSubmit={handleSignupSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-name">Full Name</Label>
                  <Input
                    id="signup-name"
                    name="name"
                    placeholder="John Doe"
                    value={signupData.name}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-student-id">Student ID</Label>
                    <Input
                      id="signup-student-id"
                      name="studentId"
                      placeholder="10XXXXXX"
                      value={signupData.studentId}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Student ID Image</Label>
                    <div className="border rounded-md p-4">
                      {studentIdImage ? (
                        <div className="relative">
                          <img
                            src={studentIdImage || "/placeholder.svg"}
                            alt="Student ID"
                            className="w-full h-auto max-h-40 object-contain mx-auto rounded-md"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8"
                            onClick={() => setStudentIdImage(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-3">
                          {isCapturingStudentId ? (
                            <div className="space-y-3">
                              <div className="relative w-full h-48 bg-muted rounded-md overflow-hidden">
                                <video
                                  id="student-id-video"
                                  autoPlay
                                  playsInline
                                  className="w-full h-full object-cover"
                                ></video>
                              </div>
                              <div className="flex justify-between">
                                <Button type="button" variant="outline" onClick={() => setIsCapturingStudentId(false)}>
                                  Cancel
                                </Button>
                                <Button type="button" onClick={handleCaptureStudentId}>
                                  Capture
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col sm:flex-row gap-2">
                              <div className="flex-1">
                                <label htmlFor="student-id-upload" className="w-full">
                                  <div className="flex items-center justify-center w-full h-24 border-2 border-dashed rounded-md cursor-pointer hover:bg-muted/50">
                                    <div className="flex flex-col items-center">
                                      <Upload className="h-6 w-6 text-muted-foreground mb-1" />
                                      <span className="text-sm text-muted-foreground">Upload Image</span>
                                    </div>
                                  </div>
                                  <input
                                    id="student-id-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, setStudentIdImage)}
                                  />
                                </label>
                              </div>
                              <div className="flex-1">
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="w-full h-24 flex flex-col items-center justify-center"
                                  onClick={() => captureImage(setStudentIdImage, setIsCapturingStudentId)}
                                >
                                  <Camera className="h-6 w-6 text-muted-foreground mb-1" />
                                  <span className="text-sm text-muted-foreground">Take Photo</span>
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-ghana-card">Ghana Card ID</Label>
                    <Input
                      id="signup-ghana-card"
                      name="ghanaCard"
                      placeholder="GHA-XXXXXXXXX"
                      value={signupData.ghanaCard}
                      onChange={handleSignupChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Ghana Card Image</Label>
                    <div className="border rounded-md p-4">
                      {ghanaCardImage ? (
                        <div className="relative">
                          <img
                            src={ghanaCardImage || "/placeholder.svg"}
                            alt="Ghana Card"
                            className="w-full h-auto max-h-40 object-contain mx-auto rounded-md"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8"
                            onClick={() => setGhanaCardImage(null)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-3">
                          {isCapturingGhanaCard ? (
                            <div className="space-y-3">
                              <div className="relative w-full h-48 bg-muted rounded-md overflow-hidden">
                                <video
                                  id="ghana-card-video"
                                  autoPlay
                                  playsInline
                                  className="w-full h-full object-cover"
                                ></video>
                              </div>
                              <div className="flex justify-between">
                                <Button type="button" variant="outline" onClick={() => setIsCapturingGhanaCard(false)}>
                                  Cancel
                                </Button>
                                <Button type="button" onClick={handleCaptureGhanaCard}>
                                  Capture
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col sm:flex-row gap-2">
                              <div className="flex-1">
                                <label htmlFor="ghana-card-upload" className="w-full">
                                  <div className="flex items-center justify-center w-full h-24 border-2 border-dashed rounded-md cursor-pointer hover:bg-muted/50">
                                    <div className="flex flex-col items-center">
                                      <Upload className="h-6 w-6 text-muted-foreground mb-1" />
                                      <span className="text-sm text-muted-foreground">Upload Image</span>
                                    </div>
                                  </div>
                                  <input
                                    id="ghana-card-upload"
                                    type="file"
                                    accept="image/*"
                                    className="hidden"
                                    onChange={(e) => handleFileChange(e, setGhanaCardImage)}
                                  />
                                </label>
                              </div>
                              <div className="flex-1">
                                <Button
                                  type="button"
                                  variant="outline"
                                  className="w-full h-24 flex flex-col items-center justify-center"
                                  onClick={() => captureImage(setGhanaCardImage, setIsCapturingGhanaCard)}
                                >
                                  <Camera className="h-6 w-6 text-muted-foreground mb-1" />
                                  <span className="text-sm text-muted-foreground">Take Photo</span>
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="signup-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-confirm-password">Confirm Password</Label>
                  <Input
                    id="signup-confirm-password"
                    name="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={signupData.confirmPassword}
                    onChange={handleSignupChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading || !acceptedTerms}>
                  {isLoading ? (
                    <span className="flex items-center gap-1">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Creating account...
                    </span>
                  ) : (
                    "Create Account"
                  )}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4 px-6 pb-6 pt-0">
          {activeTab === "signup" && (
            <div className="flex items-start space-x-2 text-sm">
              <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={setAcceptedTerms} className="mt-1" />
              <div>
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  By continuing, you agree to our{" "}
                  <Button
                    variant="link"
                    className="h-auto p-0 text-primary hover:underline"
                    onClick={() => setTermsDialogOpen(true)}
                  >
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button
                    variant="link"
                    className="h-auto p-0 text-primary hover:underline"
                    onClick={() => setPrivacyDialogOpen(true)}
                  >
                    Privacy Policy
                  </Button>
                  .
                </label>
              </div>
            </div>
          )}
          {activeTab === "login" && (
            <div className="text-xs text-center text-muted-foreground">
              By continuing, you agree to our{" "}
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-primary hover:underline"
                onClick={() => setTermsDialogOpen(true)}
              >
                Terms of Service
              </Button>{" "}
              and{" "}
              <Button
                variant="link"
                className="h-auto p-0 text-xs text-primary hover:underline"
                onClick={() => setPrivacyDialogOpen(true)}
              >
                Privacy Policy
              </Button>
              .
            </div>
          )}
        </CardFooter>
      </Card>

      {/* Terms and Conditions Dialog */}
      <Dialog open={termsDialogOpen} onOpenChange={setTermsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Terms & Conditions for Campus Bike-Sharing Service</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4 text-sm">
            <p className="font-medium">Effective Date: April 1, 2025</p>

            <p>
              Welcome to Zyro Bike, a campus bike-sharing service. By using our bikes, you agree to the following Terms
              & Conditions. Please read them carefully.
            </p>

            <div>
              <h3 className="text-lg font-bold mb-2">1. General Terms</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  You must be at least 18 years old (or the age requirement set by your institution) to use our service.
                </li>
                <li>You agree to comply with campus traffic laws and safety regulations.</li>
                <li>
                  The company reserves the right to update these terms at any time, and continued use of our service
                  means acceptance of the updated terms.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">2. User Accounts & Subscriptions</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>To access our bikes, you must create an account and provide accurate information.</li>
                <li>
                  Subscription fees must be paid in advance and are non-refundable, except as specified in our refund
                  policy.
                </li>
                <li>Your account is personal and may not be shared with others.</li>
                <li>
                  We reserve the right to suspend or terminate accounts for rule violations or suspicious activities.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">3. Bike Usage Rules</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bikes are for on-campus movement only.</li>
                <li>Users must properly park bikes in designated areas after use.</li>
                <li>
                  It is prohibited to:
                  <ul className="list-disc pl-5 mt-1">
                    <li>Modify or tamper with bikes.</li>
                    <li>Ride recklessly or engage in dangerous behavior.</li>
                    <li>Allow another person to use the bike under your account.</li>
                  </ul>
                </li>
                <li>If a bike is not returned properly, additional fees may apply.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">4. Payments & Penalties</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>All applicable fees must be paid before use.</li>
                <li>A late return fee may be charged if a bike is not returned within the allowed time.</li>
                <li>If a bike is damaged due to negligence, the user may be responsible for repair costs.</li>
                <li>
                  If a bike is lost or stolen while in your possession, you may be responsible for replacement costs.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">5. Liability & Risk</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  You acknowledge that riding a bike carries inherent risks, and you accept full responsibility for your
                  safety.
                </li>
                <li>The company is not responsible for injuries sustained while using our bikes.</li>
                <li>We are not liable for personal belongings lost while riding.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">6. Data Privacy & Security</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  We collect and store user data (e.g., ride history, payments, GPS location) to improve service
                  quality.
                </li>
                <li>
                  Your personal data will not be shared with third parties without your consent, except for legal
                  reasons.
                </li>
                <li>You are responsible for keeping your login credentials secure.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">7. Account Termination & Violations</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>We reserve the right to suspend or ban users who violate these terms.</li>
                <li>Users may request account deletion at any time.</li>
                <li>Any outstanding fees must be paid before account closure.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-2">8. Agreement to Terms</h3>
              <p>By creating an account and using our service, you agree to these Terms & Conditions.</p>
            </div>

            <div className="pt-4 border-t">
              <p>For any questions, contact us at info@zyrobike.com</p>
              <p className="font-medium mt-2">Zyro Bike • www.zyrobike.com • +233 123 456 789</p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setTermsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyDialogOpen} onOpenChange={setPrivacyDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4 text-sm">
            <p>
              This is the privacy policy for Zyro Bike. It explains how we collect, use, and protect your personal
              information.
            </p>
            {/* Add privacy policy content here */}
            <p>For demonstration purposes, this is a placeholder for the privacy policy content.</p>
          </div>
          <DialogFooter>
            <Button onClick={() => setPrivacyDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

