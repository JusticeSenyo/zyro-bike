import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bike, Zap, Leaf, MapPin, Sun } from "lucide-react"

export default function OurFleetPage() {
  // Bike specifications
  const bikeSpecs = {
    dimensions: {
      length: "68 inches",
      height: "45 inches",
      wheelSize: "26 inches",
    },
    features: [
      "Solar-powered smart lock with GPS",
      "Front basket for books and personal items",
      "3-speed gear shift system",
      "Adjustable seat for riders of all heights",
      "Solar-powered back light for safety",
      "Dynamo-powered front light",
      "Step-through frame for easy mounting",
      "Full fenders to keep you clean in all weather",
      "Chain guard to protect clothing",
      "Durable orange frame for high visibility",
    ],
    technical: {
      weight: "14 kg",
      frameType: "Step-through aluminum frame",
      brakes: "Front and rear V-brakes",
      lighting: "Solar and dynamo powered",
      security: "GPS-enabled smart lock",
    },
  }

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-flex items-center justify-center p-2 bg-background rounded-full">
              <Bike className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Bicycle Fleet</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Meet the Zyro Bike - designed for comfort, convenience, and sustainability on campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Showcase */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:gap-16">
            {/* Main Bike Feature */}
            <div className="relative mx-auto max-w-3xl">
              <div className="bg-primary/10 p-1 md:p-2 rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike%201%5B1%5D.jpg-bZRJB2DSNsAcZYkXboeNRMP09z2FCS.jpeg"
                  alt="Zyro Bike with Features"
                  width={1200}
                  height={800}
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Bike Description */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-2 text-primary">
                  <Bike className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter">The Zyro Bike</h2>
                <p className="text-muted-foreground md:text-lg">
                  Our signature orange bike is designed specifically for campus mobility. With its distinctive
                  step-through frame, integrated smart technology, and eco-friendly features, the Zyro Bike offers the
                  perfect blend of convenience, comfort, and sustainability.
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
                    <span>Easy to ride for users of all experience levels</span>
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
                    <span>Solar and dynamo-powered lights for day and night visibility</span>
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
                    <span>Smart lock with GPS tracking for security and fleet management</span>
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
                    <span>Practical front basket for carrying books and personal items</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/img%202%5B1%5D.jpg-Do4B9VSUt23D0TfQYdjJM84ZAjCDzu.jpeg"
                  alt="Zyro Bike on Campus"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Features */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Key Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our bikes are equipped with features that enhance your campus commuting experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Sun className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Solar-Powered Technology</h3>
                <p className="text-muted-foreground">
                  Solar panels power the smart lock and lights, reducing the need for battery replacements and charging.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Smart Lock System</h3>
                <p className="text-muted-foreground">
                  GPS-enabled smart lock allows for easy unlocking via QR code and helps track bikes across campus.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Eco-Friendly Design</h3>
                <p className="text-muted-foreground">
                  Sustainable materials and solar technology make our bikes an environmentally responsible choice.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter">Technical Specifications</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              The Zyro Bike is built with quality components for reliability and performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Dimensions</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Length:</span>
                  <span>{bikeSpecs.dimensions.length}</span>
                </li>
                <li className="flex justify-between">
                  <span>Height:</span>
                  <span>{bikeSpecs.dimensions.height}</span>
                </li>
                <li className="flex justify-between">
                  <span>Wheel Size:</span>
                  <span>{bikeSpecs.dimensions.wheelSize}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Components</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Frame:</span>
                  <span>{bikeSpecs.technical.frameType}</span>
                </li>
                <li className="flex justify-between">
                  <span>Weight:</span>
                  <span>{bikeSpecs.technical.weight}</span>
                </li>
                <li className="flex justify-between">
                  <span>Brakes:</span>
                  <span>{bikeSpecs.technical.brakes}</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">Technology</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Lighting:</span>
                  <span>{bikeSpecs.technical.lighting}</span>
                </li>
                <li className="flex justify-between">
                  <span>Security:</span>
                  <span>{bikeSpecs.technical.security}</span>
                </li>
                <li className="flex justify-between">
                  <span>Gears:</span>
                  <span>3-speed internal hub</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bike Station Map */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center justify-center p-2 bg-background rounded-full">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold tracking-tighter">Find Our Bikes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our orange bikes are available at multiple stations across campus. Check the map to find the nearest
              station.
            </p>
          </div>

          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border">
            <Image
              src="docking bikes.png"
              alt="Campus Bike Station Map"
              width={1200}
              height={600}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground mb-4">
              Use our mobile app for real-time bike availability and navigation to the nearest station.
            </p>
            <Link href="/how-it-works">
              <Button>Learn How It Works</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">Ready to Ride?</h2>
            <p className="mx-auto max-w-[700px] md:text-lg">
              Join Zyro Bike today and experience the convenience of our orange bike-sharing service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/signup">
                <Button variant="secondary" size="lg">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary/10 text-primary-foreground border-primary-foreground/20 hover:bg-primary/20"
                >
                  View Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

