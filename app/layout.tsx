import type React from "react"
import "./globals.css"
import { Noto_Serif } from "next/font/google"

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-serif",
  weight: ["200", "300", "400", "500", "700"],
})

export const metadata = {
  title: "Isabele Amaro",
  description: "Portfolio profissional de Isabele Amaro",
    icons: {
    icon: '/terminal.png'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${notoSerif.variable} font-serif bg-[#f8f8f6]`}>{children}</body>
    </html>
  )
}



import './globals.css'