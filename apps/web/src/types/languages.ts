export type Language = 'en-US' | 'pt-BR'

export type PageProps<T = unknown> = {
  searchParams: {
    [key: string]: string
  }
  params: {
    lang: Language
  } & T
}
