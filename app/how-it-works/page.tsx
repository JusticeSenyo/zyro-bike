import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { QrCode, MapPin, Bike, RotateCcw, Clock, Shield } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Zyro Bike Works</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Simple, convenient, and eco-friendly campus mobility in just a few steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {/* Step 1: Find a Bike */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">1. Find a Bike</h2>
                <p className="text-muted-foreground md:text-lg">
                  Locate the nearest Zyro Bike station using our app. Our bikes are strategically placed across campus
                  for your convenience.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Multiple stations across campus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Real-time availability updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>GPS navigation to the nearest station</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="bike.jpg"
                  alt="Zyro Bike Station"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Step 2: Scan QR Code */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="scan qr.jpg"
                  alt="Scanning QR Code on Bike"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                  <QrCode className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">2. Scan the QR Code</h2>
                <p className="text-muted-foreground md:text-lg">
                  Use the Zyro Bike app to scan the QR code on the bike. This will unlock the bike and start your ride.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Quick and secure unlocking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Automatic ride tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Works even with low connectivity</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Step 3: Enjoy Your Ride */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                  <Bike className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">3. Enjoy Your Ride</h2>
                <p className="text-muted-foreground md:text-lg">
                  Ride to your destination on campus. Our bikes are comfortable, easy to use, and environmentally
                  friendly.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Comfortable and adjustable seats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Pause your ride anytime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Track your ride stats in real-time</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="profile.jpg"
                  alt="Student Riding Zyro Bike"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Step 4: Return the Bike */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 relative aspect-video overflow-hidden rounded-xl">
                <Image
                  src="lastimage.png"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                  <RotateCcw className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">4. Return the Bike</h2>
                <p className="text-muted-foreground md:text-lg">
                  Return the bike to any Zyro Bike station when you're done. Lock it securely to end your ride.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Return to any station on campus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Automatic ride completion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="rounded-full bg-primary/10 p-1 text-primary mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10 3L4.5 8.5L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>Instant ride summary and receipt</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Additional Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Zyro Bike offers more than just a ride. Discover all the features that make campus mobility better.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Ride Pausing</h3>
                <p className="text-muted-foreground">
                  Need to make a quick stop? Pause your ride and the bike will remain locked and reserved for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Secure Locking</h3>
                <p className="text-muted-foreground">
                  Our bikes feature secure electronic locks that can only be unlocked by authorized users.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Station Finder</h3>
                <p className="text-muted-foreground">
                  Easily locate the nearest bike station with our interactive map and real-time availability updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Get Started?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Join thousands of students already enjoying the benefits of Zyro Bike on campus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button size="lg">Sign Up & Ride</Button>
              </Link>
              <Link href="/our-fleet">
                <Button variant="outline" size="lg">
                  View Our Bikes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

