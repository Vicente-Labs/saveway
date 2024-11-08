import { Language } from '@/types/languages'

export type SupportedLanguages = {
  label: string
  value: Language
  country: string
  enabled: boolean
  hreflang: string
}

export const SUPPORTED_LANGUAGES: Array<SupportedLanguages> = [
  {
    label: 'English',
    value: 'en-US',
    country: 'US',
    enabled: true,
    hreflang: 'en-us',
  },
  {
    label: 'Português',
    value: 'pt-BR',
    country: 'BR',
    enabled: true,
    hreflang: 'pt-BR',
  },
]

export const languages: Language[] = ['en-US', 'pt-BR']
