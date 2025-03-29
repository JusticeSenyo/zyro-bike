"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "@/hooks/use-toast"
import { Star, Send, Quote } from "lucide-react"

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: "5",
    review: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRatingChange = (value: string) => {
    setFormData((prev) => ({ ...prev, rating: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Feedback Submitted",
        description: "Thank you for sharing your experience with Zyro Bike!",
      })
      setFormData({
        name: "",
        email: "",
        rating: "5",
        review: "",
      })
      setIsSubmitting(false)
    }, 1500)
  }

  const testimonials = [
    {
      id: 1,
      name: "Kofi Mensah",
      role: "Computer Science Student",
      rating: 5,
      comment: "Zyro Bike has completely transformed how I get around campus. No more being late to lectures!",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Ama Owusu",
      role: "Engineering Student",
      rating: 5,
      comment:
        "The QR unlocking feature is so convenient. I love how I can pause my ride when I need to make a quick stop.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "David Asante",
      role: "Business Administration Student",
      rating: 4,
      comment: "The monthly subscription is great value for money. I use Zyro Bike every day to get to classes.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Share Your Experience</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                We value your feedback to continuously improve our service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <Card className="border-0 shadow-none">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Submit Your Review</h2>
                    <p className="text-muted-foreground">Let us know about your experience with Zyro Bike.</p>
                  </div>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Rating</Label>
                    <RadioGroup value={formData.rating} onValueChange={handleRatingChange} className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((value) => (
                        <div key={value} className="flex items-center space-x-1">
                          <RadioGroupItem value={value.toString()} id={`rating-${value}`} className="sr-only" />
                          <Label
                            htmlFor={`rating-${value}`}
                            className={`cursor-pointer p-1 ${
                              Number.parseInt(formData.rating) >= value ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            <Star className="h-6 w-6 fill-current" />
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="review">Your Review</Label>
                    <Textarea
                      id="review"
                      name="review"
                      placeholder="Share your experience with Zyro Bike..."
                      value={formData.review}
                      onChange={handleChange}
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
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
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        Submit Review <Send className="h-4 w-4 ml-1" />
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">What Our Users Say</h2>
                <p className="text-muted-foreground">Read testimonials from students who use Zyro Bike.</p>
              </div>
              <div className="grid gap-4">
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-primary fill-primary" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 h-6 w-6 text-muted-foreground opacity-20" />
                        <p className="pl-4 text-muted-foreground">{testimonial.comment}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

