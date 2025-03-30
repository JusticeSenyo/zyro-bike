import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Bike, Leaf, Clock, Users, Shield } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Joel Brian",
      role: "Project Lead",
      bio: "Oversees the entire project and ensures all components work together seamlessly.",
      avatar: "joel.jpg",
    },
    {
      id: 2,
      name: "Worshie Ebenezer",
      role: "UI/UX Designer",
      bio: "Creates the user interface and ensures a smooth user experience across all devices.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Senyo Justice",
      role: "Frontend Developer",
      bio: "Implements the user interface designs and ensures responsive behavior.",
      avatar: "justice.jpg",
    },
    {
      id: 4,
      name: "Amenu David Delali",
      role: "Backend Developer",
      bio: "Develops the server-side logic and database architecture.",
      avatar: "dela.png",
    },
    {
      id: 5,
      name: "Gbologah Prince",
      role: "Mobile Developer",
      bio: "Creates the mobile application for Android and iOS platforms.",
      avatar: "george.jpg",
    },
    {
      id: 6,
      name: "Richmond Vitashie",
      role: "QA Engineer",
      bio: "Tests all components to ensure quality and reliability.",
      avatar: "richie.png",
    },
    {
      id: 7,
      name: "Mac-Piusson",
      role: "DevOps Engineer",
      bio: "Manages deployment and infrastructure for the application.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 8,
      name: "Tsikatah Edem",
      role: "Database Administrator",
      bio: "Designs and maintains the database structure and performance.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 9,
      name: "Tetteh Denis",
      role: "Security Specialist",
      bio: "Ensures the application is secure and user data is protected.",
      avatar: "tetteh.jpg",
    },
    {
      id: 10,
      name: "Kumah Henry",
      role: "unknown for now",
      bio: "ago fill am later",
      avatar: "kumah.jpg",
    },
    // {
    //   id: 11,
    //   name: "Michael Dzomeku",
    //   role: "another Content Writer",
    //   bio: "also Creates all written content for the application and marketing materials.",
    //   avatar: "michael.jpg",
    // },


  ]

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Zyro Bike</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transforming campus mobility with sustainable transportation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company About Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2021 by a group of environmentally conscious students, Zyro Bike began with a simple mission:
                to provide a sustainable, convenient, and affordable transportation solution for university campuses.
              </p>
              <p className="text-muted-foreground">
                What started as a small pilot program with just 20 bikes has now grown into a campus-wide initiative
                with hundreds of bikes across multiple stations. Our innovative approach to bike-sharing has transformed
                how students navigate campus, reducing carbon emissions and promoting healthier lifestyles.
              </p>
              <p className="text-muted-foreground">
                Today, Zyro Bike is the leading bike-sharing service on campus, with plans to expand to other
                universities across Ghana and West Africa.
              </p>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="about.jpeg" alt="Zyro Bike Campus" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10">Our Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to reducing carbon emissions and promoting eco-friendly transportation options.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Efficiency</h3>
                <p className="text-muted-foreground">
                  Our service is designed to save time and make campus navigation quick and hassle-free.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Community</h3>
                <p className="text-muted-foreground">
                  We foster a sense of community and shared responsibility among our users.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reliability</h3>
                <p className="text-muted-foreground">
                  We ensure our bikes are well-maintained and always available when you need them.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Impact</h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground mb-10">
              Since our launch, Zyro Bike has made a significant impact on campus sustainability and student mobility.
            </p>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border p-6">
                <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                <div className="text-lg font-medium">Rides Per Month</div>
              </div>
              <div className="rounded-lg border p-6">
                <div className="text-4xl font-bold text-primary mb-2">30%</div>
                <div className="text-lg font-medium">Reduction in Campus Car Usage</div>
              </div>
              <div className="rounded-lg border p-6">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-lg font-medium">Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="inline-flex items-center justify-center p-2 bg-background rounded-full">
              {/* <Bike className="h-6 w-6 text-primary" /> */}
              <img style={} src="Logo.png" alt="" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">Meet Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                A diverse group of professionals working together to make campus mobility sustainable and efficient.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image src={member.avatar || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Mission</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                To transform campus mobility with sustainable, convenient, and affordable transportation solutions that
                reduce carbon footprint and improve student life.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

