import './globals.css'
import type { Metadata } from 'next'
import { Lato } from 'next/font/google'

const lato = Lato({ style: "normal", weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Paper.id - Raihan Muhammad',
  description: 'Created by Raihan Muhammad with love',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  )
}
