import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
// The Inter font import is not used, but we can leave it
import { Inter } from "next/font/google"; 
// Make sure this path is correct. If your file is Chatbot.tsx, it should be "@/components/Chatbot"
import Chatbot from "@/components/ChatWidget"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Final Year Projects Hub - Showcase Student Innovation",
  description: "Discover and showcase innovative final year projects from talented students across various domains.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  )
}

