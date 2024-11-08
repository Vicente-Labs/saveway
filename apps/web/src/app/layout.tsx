import './globals.css'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { BackgroundBeams } from '@/components/background-beans'
import type { Language } from '@/types/languages'

export const metadata: Metadata = {
  title: 'Saveway',
  description: 'Your new way of being financially responsible.',
}

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Language }
}) {
  return (
    <html
      lang={params.lang}
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>

      <body className="font-mono antialiased">
        {/* <Pattern variant="checkered" /> */}
        <BackgroundBeams />
        <div className="relative z-10 w-full">{children}</div>
      </body>
    </html>
  )
}
