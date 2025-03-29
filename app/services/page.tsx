"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, Check, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const plans = [
    {
      id: "daily",
      name: "Daily Pass",
      price: "GH₵5",
      period: "per day",
      description: "Perfect for occasional riders",
      features: ["Unlimited 30-minute rides", "QR code unlocking", "Ride pausing", "24/7 support"],
      popular: false,
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      price: "GH₵30",
      period: "per week",
      description: "Great for regular campus commuters",
      features: [
        "Unlimited 45-minute rides",
        "QR code unlocking",
        "Ride pausing",
        "24/7 support",
        "Reduced overtime fees",
      ],
      popular: true,
    },
    {
      id: "monthly",
      name: "Monthly Pass",
      price: "GH₵100",
      period: "per month",
      description: "Best value for daily riders",
      features: [
        "Unlimited 60-minute rides",
        "QR code unlocking",
        "Ride pausing",
        "24/7 support",
        "No overtime fees",
        "Priority bike access",
      ],
      popular: false,
    },
  ]

  const faqs = [
    {
      question: "How do I unlock a bike?",
      answer:
        "Simply scan the QR code on the bike using the Zyro Bike app. The bike will automatically unlock for your use.",
    },
    {
      question: "Where can I find Zyro Bikes on campus?",
      answer:
        "Zyro Bikes are available at designated stations across campus. Check the app for the nearest available bike.",
    },
    {
      question: "What if I need to make a quick stop?",
      answer:
        "You can pause your ride through the app. The bike will remain locked and reserved for you until you're ready to continue.",
    },
    {
      question: "How do I end my ride?",
      answer:
        "Park the bike at any Zyro Bike station and lock it. The app will automatically detect that your ride has ended.",
    },
    {
      question: "What happens if I exceed the time limit?",
      answer:
        "Additional fees will apply for time exceeding your plan's limit. Check your specific plan for overtime rates.",
    },
    {
      question: "Can I use Zyro Bike if I'm not a student?",
      answer: "Zyro Bike is primarily for students, but faculty and staff can also register with their campus ID.",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose the plan that fits your campus mobility needs.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search plans, features, or FAQs..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="subscription" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="subscription">Subscription Plans</TabsTrigger>
              <TabsTrigger value="pay-per-ride">Pay-Per-Ride</TabsTrigger>
            </TabsList>
            <TabsContent value="subscription" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {plans.map((plan) => (
                  <Card key={plan.id} className={plan.popular ? "border-primary" : ""}>
                    {plan.popular && (
                      <div className="absolute top-0 right-0 -mt-2 -mr-2">
                        <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                      <div className="mt-2">
                        <span className="text-3xl font-bold">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <Check className="h-4 w-4 text-primary mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/payment-methods" className="w-full">
                        <Button className="w-full">Choose Plan</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="pay-per-ride" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pay As You Go</CardTitle>
                  <CardDescription>Perfect for occasional riders with no commitment</CardDescription>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">₵2</span>
                    <span className="text-muted-foreground ml-1">to unlock + ₵0.50 per minute</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">No subscription required</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">QR code unlocking</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">Ride pausing (billing continues)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm">24/7 support</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Find answers to common questions about Zyro Bike.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-8">
            {filteredFaqs.length > 0 ? (
              <div className="grid gap-4 md:gap-6">
                {filteredFaqs.map((faq, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
                <Button variant="link" onClick={() => setSearchQuery("")} className="mt-2">
                  Clear search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join the Zyro Bike community today and transform your campus commute.
              </p>
            </div>
            <Link href="/signup">
              <Button size="lg" className="gap-1">
                Sign Up & Ride <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

