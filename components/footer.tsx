import Link from "next/link"
import { Bike, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {

    const logoStyle = {
    "height":"60px",
    "width":"60px",
    "padding": "none",
    "margin": "0",
    "border-radius": "100%",
    "background-size": "cover",
  }
  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              {/* <Bike className="h-6 w-6 text-primary" /> */}
          <img style={logoStyle} src="LOGO.png" alt="logo" />

              <span className="text-xl font-bold">Zyro Bike</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Eco-friendly bike-sharing service for sustainable campus mobility.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/feedback" className="text-sm text-muted-foreground hover:text-primary">
                  Feedback
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Email: info@zyrobike.com</li>
              <li className="text-sm text-muted-foreground">Phone: +233 550 7475 66</li>
              <li className="text-sm text-muted-foreground">Address: University of Professional Studies</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zyro Bike. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

