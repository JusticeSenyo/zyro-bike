"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Bike, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const routes = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-fleet", label: "Our Bikes" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
  { href: "/feedback", label: "Feedback" },
  { href: "/about", label: "About" },
]

export default function Navbar() {
  const pathname = usePathname()
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Mock authentication state - in a real app, this would come from an auth context
  const [isLoggedIn, setIsLoggedIn] = useState(true)

    const logostyle = {
    "height":"60px",
    "width":"60px",
    "padding": "none",
    "margin": "0",
    "borderRadius": "100%",
    "backgroundSize": "cover",
  }

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMobile, isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <Bike className="h-6 w-6 text-primary" /> */}
          <img style={logostyle} src="LOGO.png" alt="" />
          <span className="text-xl font-bold">Zyro Bike</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          {isLoggedIn ? (
            <Link href="/profile">
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Sign Up & Ride</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 flex flex-col gap-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary p-2",
                  pathname === route.href ? "text-primary bg-muted rounded-md" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2 pt-2 border-t">
              {isLoggedIn ? (
                <Link href="/profile">
                  <Button className="w-full gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full">Sign Up & Ride</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

