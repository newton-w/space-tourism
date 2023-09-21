import type { Metadata } from 'next'
import { Barlow_Condensed } from 'next/font/google'

import './globals.css'
import Nav from '@/components/nav'

const inter = Barlow_Condensed({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Space Tourism ',
  description: 'Developed by newton-w',
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
        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
