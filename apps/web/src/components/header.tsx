// @NOTE: in case you are using Next.js
'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { DollarSign } from 'lucide-react'
import Link from 'next/link'

import { useLanguage } from '@/app/context/language'

import { Button } from './ui/button'

export function Header() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const { language: lang } = useLanguage()

  const background = useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(38, 38, 38, 0.4), transparent 80%)`

  return (
    <div className="w-full py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseMove={(e) => {
          const { left, top } = e.currentTarget.getBoundingClientRect()

          mouseX.set(e.clientX - left)
          mouseY.set(e.clientY - top)
        }}
        className="group relative mx-auto w-fit overflow-hidden rounded-xl bg-neutral-950"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '80%' }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute right-5 top-0 h-px bg-gradient-to-l from-transparent via-white/30 via-10% to-transparent"
        />
        <motion.div
          style={{
            background,
          }}
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        />
        <motion.div className="relative z-20 flex h-full w-full flex-col gap-3 rounded-xl border border-white/10 px-6 py-3">
          <div className="flex items-center gap-8">
            <DollarSign className="h-6 w-6" />
            <ul className="flex items-center gap-6">
              <li className="cursor-pointer text-foreground transition-colors hover:text-foreground">
                Home
              </li>
              <li className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
                Our Mission
              </li>
              <li className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground">
                Pricing
              </li>
            </ul>
            <Button className="font-bold" asChild>
              <Link href={`/${lang}/login`}>Login</Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
