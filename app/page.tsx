import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Bike, Clock, Leaf, QrCode, PauseCircle, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-primary text-primary-foreground">Eco-Friendly</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Ride Green, Save Time with Zyro Bike
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  The smart, sustainable way to get around campus. Unlock, ride, and return bikes with ease.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1">
                    Sign Up & Ride <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline">
                    View Plans
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                <Image
                  src="Guy on bike.png"
                  alt="Zyro Bike"
                  width={500}
                  height={500}
                  className="object-contain hero-animation"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Sustainable Campus Mobility</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Zyro Bike is revolutionizing campus transportation with our eco-friendly bike-sharing service.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Leaf className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Eco-Friendly</CardTitle>
                  <CardDescription>Zero emissions, reduced carbon footprint</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our bikes help reduce campus carbon emissions by providing a green alternative to motorized
                  transportation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Time-Saving</CardTitle>
                  <CardDescription>Quick access across campus</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Navigate between classes and buildings faster than walking, giving you more time for what matters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-primary" />
                <div className="grid gap-1">
                  <CardTitle>Convenient</CardTitle>
                  <CardDescription>Easy to use, available 24/7</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multiple bike stations across campus ensure you're never far from your next ride.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Designed with students in mind, our service makes campus mobility simple and sustainable.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
              <QrCode className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">QR Unlocking</h3>
              <p className="text-sm text-muted-foreground">
                Scan the QR code on any Zyro Bike to instantly unlock and start your ride.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
              <PauseCircle className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Ride Pausing</h3>
              <p className="text-sm text-muted-foreground">
                Need to make a quick stop? Pause your ride and resume whenever you're ready.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 text-center">
              <Bike className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-bold">Multiple Stations</h3>
              <p className="text-sm text-muted-foreground">
                Conveniently located bike stations throughout campus for easy pick-up and drop-off.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Ride Green?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join thousands of students already enjoying the benefits of Zyro Bike.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/signup">
                <Button size="lg" className="gap-1">
                  Sign Up Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

