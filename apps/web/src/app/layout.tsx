import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saveway',
  description: 'Your new way of being financially responsible.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  )
}
