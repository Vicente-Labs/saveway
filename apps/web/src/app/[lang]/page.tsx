'use client'

import { motion } from 'framer-motion'
import { DollarSign, LineChart, Shield, Wallet } from 'lucide-react'
import Image from 'next/image'

import { Header } from '@/components/header'
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
        className="flex flex-col items-center gap-4 px-[4rem] pb-[15.625rem] pt-[10rem]"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl font-bold"
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
          className="flex gap-4"
        >
          <Button variant="outline">Learn more</Button>
          <Button className="font-bold">Start your financial journey </Button>
        </motion.div>
      </motion.div>
      <motion.div className="flex flex-col items-center gap-4 px-16 pb-[15.625rem] pt-[10rem]">
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
            className="group relative col-span-2 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
          >
            <div className="flex flex-col gap-4">
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
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group relative row-span-2 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
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
                  duration={20}
                  delay={20}
                  radius={70}
                >
                  <Image
                    src="/etherum.png"
                    className="grayscale dark:invert"
                    alt="Ethereum"
                    width={100}
                    height={100}
                  />
                </OrbitingCircles>
                <OrbitingCircles
                  className="size-[30px] border-none bg-transparent"
                  duration={20}
                  delay={10}
                  radius={40}
                >
                  <Image
                    src="/bitcoin.png"
                    className="grayscale"
                    alt="Bitcoin"
                    width={100}
                    height={100}
                  />
                </OrbitingCircles>

                {/* Outer Circles (reverse) */}
                <OrbitingCircles
                  className="size-[50px] border-none bg-transparent"
                  radius={120}
                  duration={20}
                  reverse
                >
                  <Image
                    src="/xrp.png"
                    className="grayscale dark:invert"
                    alt="XRP"
                    width={100}
                    height={100}
                  />
                </OrbitingCircles>
                <OrbitingCircles
                  className="size-[50px] border-none"
                  radius={100}
                  duration={20}
                  delay={20}
                  reverse
                >
                  <Image
                    src="/tether.png"
                    className="grayscale"
                    alt="Tether"
                    width={100}
                    height={100}
                  />
                </OrbitingCircles>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
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
            className="group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-neutral-950 p-6 transition-colors hover:border-white/20"
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
      </motion.div>
    </div>
  )
}
