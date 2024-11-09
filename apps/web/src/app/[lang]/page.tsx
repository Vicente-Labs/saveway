'use client'

import { motion } from 'framer-motion'
import {
  ChevronDown,
  DollarSign,
  LineChart,
  Shield,
  Wallet,
} from 'lucide-react'
import Image from 'next/image'

import { Header } from '@/components/header'
import { InfiniteSlider } from '@/components/infinite-slider'
import { AnimatedBadge } from '@/components/ui/animated-badge'
import { Button } from '@/components/ui/button'
import OrbitingCircles from '@/components/ui/orbiting-circles'

import { useLanguage } from '../context/language'

export default function Home() {
  const { dictionary } = useLanguage()

  return (
    <div>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-4 px-[4rem] pb-[15.625rem] pt-[5rem]"
      >
        <AnimatedBadge>✨ Introducing saveway.io ✨</AnimatedBadge>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-2 text-center text-4xl font-bold"
        >
          Saveway where financial freedom
          <br />
          <motion.strong
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lime-400"
          >
            meets simplicity
          </motion.strong>{' '}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center text-muted-foreground"
        >
          Experience the future of personal finance with AI-powered <br />{' '}
          insights and smart investment tracking
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex gap-4">
            <Button variant="outline">Learn more</Button>
            <Button className="font-bold">Start your financial journey </Button>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-2"
          >
            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 1.2,
                  behavior: 'smooth',
                })
              }}
            >
              <ChevronDown className="h-6 w-6 animate-bounce" />
            </button>

            <button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight * 1.2,
                  behavior: 'smooth',
                })
              }}
            >
              <span className="text-sm text-muted-foreground">
                Scroll to explore more
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 blur-lg"
        >
          <Image
            src="/dashboard-preview.png"
            alt="--- Preview"
            width={1200}
            height={675}
            className="w-full"
            priority
          />
        </motion.div> */}
      </motion.div>

      <motion.div
        layoutId="section-2"
        className="flex flex-col items-center gap-4 px-16 pb-20 pt-40"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold"
        >
          Transform your entire financial world
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-muted-foreground"
        >
          One platform for all your financial needs -{' '}
          <motion.strong
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lime-400"
          >
            traditional banking
          </motion.strong>
          ,
          <br />
          <motion.strong
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lime-400"
          >
            crypto monitoring
          </motion.strong>{' '}
          and everything in between
        </motion.p>
        <div className="mt-12 grid w-full max-w-5xl grid-cols-3 grid-rows-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group relative col-span-2 cursor-default overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-4">
              <AnimatedBadge>Coming soon</AnimatedBadge>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-lime-400/10 p-3">
                  <DollarSign className="h-6 w-6 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold">OpenFinance Integration</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Connect your bank accounts securely for transparent transaction
                monitoring and comprehensive financial analysis
              </p>
              <InfiniteSlider>
                <img
                  src="/banks/itau.png"
                  className="aspect-square h-12 w-12 rounded-[4px] grayscale"
                  alt="Itaú bank logo"
                />

                <img
                  src="/banks/bradesco.png"
                  className="aspect-square h-12 w-12 rounded-[4px] grayscale"
                  alt="Bradesco bank logo"
                />

                <img
                  src="/banks/santander.png"
                  className="aspect-square h-12 w-12 rounded-[4px] grayscale"
                  alt="Santander bank logo"
                />

                <img
                  src="/banks/hsbc.png"
                  className="aspect-square h-12 w-12 rounded-[4px] grayscale"
                  alt="HSBC bank logo"
                />

                <img
                  src="/banks/barclays.png"
                  className="aspect-square h-12 w-12 rounded-[4px] grayscale"
                  alt="Barclays bank logo"
                />
              </InfiniteSlider>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative row-span-2 cursor-default overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-lime-400/10 p-3">
                  <LineChart className="h-6 w-6 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold">Secure Crypto Tracking</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Monitor your cryptocurrency portfolio with ease and security by
                simply adding your public wallet addresses.
              </p>
              <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg zoom-out-75">
                {/* Inner Circles */}
                <OrbitingCircles
                  className="size-[30px] border-none bg-transparent"
                  duration={40}
                  delay={40}
                  radius={70}
                >
                  <Image
                    src="/etherum.png"
                    className="grayscale dark:invert"
                    alt="Ethereum"
                    width={40}
                    height={40}
                  />
                </OrbitingCircles>
                <OrbitingCircles
                  className="size-[30px] border-none bg-transparent"
                  duration={40}
                  delay={10}
                  radius={40}
                >
                  <Image
                    src="/bitcoin.png"
                    className="grayscale"
                    alt="Bitcoin"
                    width={40}
                    height={40}
                  />
                </OrbitingCircles>

                {/* Outer Circles (reverse) */}
                <OrbitingCircles
                  className="size-[50px] border-none bg-transparent"
                  radius={120}
                  duration={40}
                  reverse
                >
                  <Image
                    src="/xrp.png"
                    className="grayscale dark:invert"
                    alt="XRP"
                    width={40}
                    height={40}
                  />
                </OrbitingCircles>
                <OrbitingCircles
                  className="size-[50px] border-none"
                  radius={100}
                  duration={40}
                  delay={40}
                  reverse
                >
                  <Image
                    src="/tether.png"
                    className="grayscale"
                    alt="Tether"
                    width={40}
                    height={40}
                  />
                </OrbitingCircles>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative cursor-default overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-lime-400/10 p-3">
                  <Shield className="h-6 w-6 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold">Multi-Currency Support</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Seamlessly manage and track both traditional fiat currencies and
                cryptocurrencies in one unified platform
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="group relative cursor-default overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-lime-400/10 p-3">
                  <Wallet className="h-6 w-6 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold">Transaction Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Advanced cross-platform analysis of your spending patterns and
                financial behavior across all your accounts
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold">Simple, transparent pricing</h2>
            <p className="mt-2 text-muted-foreground">
              Choose the plan that's right for you
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="rounded-xl border border-white/10 bg-neutral-950 p-8 transition-colors hover:border-white/20"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Basic</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="ml-2 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Basic expense tracking
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Up to 2 accounts
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Monthly reports
                  </li>
                </ul>
                <Button variant="outline" className="mt-6">
                  Get Started
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="rounded-xl border-2 border-lime-400 bg-neutral-950 p-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">Pro</h3>
                  <span className="rounded-full bg-lime-400/10 px-3 py-1 text-xs font-medium text-lime-400">
                    Popular
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="ml-2 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Everything in Basic
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Unlimited accounts
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    AI-powered insights
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Investment tracking
                  </li>
                </ul>
                <Button className="mt-6">Get Started</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="rounded-xl border border-white/10 bg-neutral-950 p-8 transition-colors hover:border-white/20"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="ml-2 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Everything in Pro
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <DollarSign className="mr-2 h-4 w-4 text-lime-400" />
                    Team collaboration
                  </li>
                </ul>
                <Button variant="outline" className="mt-6">
                  Contact Sales
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 border-t border-white/10 py-12"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col items-center gap-2 md:items-start"
              >
                <p className="text-sm text-muted-foreground">
                  © 2024 Saveway.io. All rights reserved.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
                >
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
                >
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full bg-white/5 p-2 transition-colors hover:bg-white/10"
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-muted-foreground"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </div>
  )
}
