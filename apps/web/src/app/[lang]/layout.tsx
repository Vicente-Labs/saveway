import NextTopLoader from 'nextjs-toploader'

import { ThemeProvider } from '@/components/theme/theme-provider'
import type { Language } from '@/types/languages'
import { getDictionary } from '@/utils/dictionaries'

import { SUPPORTED_LANGUAGES } from '../../../languages'
import { LanguageContextProvider } from '../context/language'

export async function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang: lang.value }))
}

export const dynamic = 'force-dynamic'

type RootLayoutProps = {
  children: React.ReactNode
  params: Promise<{ lang: Language }>
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params

  const dictionary = await getDictionary(lang)

  return (
    <ThemeProvider
      storageKey="@vicentesan-theme:0.0.0"
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      <NextTopLoader color="#ccc" showSpinner={false} />

      <LanguageContextProvider language={lang} dictionary={dictionary}>
        <main>{children}</main>
      </LanguageContextProvider>
    </ThemeProvider>
  )
}
