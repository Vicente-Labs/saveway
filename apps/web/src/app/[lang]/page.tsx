'use client'

import { useLanguage } from '../context/language'

export default function Home() {
  const { dictionary } = useLanguage()

  return <h1>{dictionary.title}</h1>
}
