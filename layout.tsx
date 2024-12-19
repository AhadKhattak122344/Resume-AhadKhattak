import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ahad Khattak - Software Engineer',
  description: 'Personal resume website of Ahad Khattak, Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gradient-to-br from-[#001a1c] via-[#003135] to-[#024950] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}

