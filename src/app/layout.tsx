import { Poppins, Outfit } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Applically - Your Complete Learning & Career Platform",
  description: "One-stop platform for learning, interview preparation, and career development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${outfit.variable} font-sans`}>
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}