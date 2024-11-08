import './globals.css'

import type { Metadata } from 'next'

import { Pattern } from '@/components/pattern'
import type { Language } from '@/types/languages'

export const metadata: Metadata = {
  title: 'Saveway',
  description: 'Your new way of being financially responsible.',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Language }
}) {
  return (
    <html lang={params.lang} className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#09090b" />
      </head>

      <body>
        <Pattern variant="checkered" />
        {children}
      </body>
    </html>
  )
}
