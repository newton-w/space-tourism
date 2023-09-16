import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from '@/components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Space Tourism ',
  description: 'Space tourism',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Nav />
        {children}

      </body>
    </html>
  )
}
