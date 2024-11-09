'use client'

import { motion } from 'framer-motion'
import {
  ArrowUpDown,
  Banknote,
  BrainIcon,
  CreditCard,
  LineChart,
  Receipt,
  TrendingUp,
  Wallet,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background px-6 py-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-muted-foreground">
            Here's your financial overview
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          <motion.div variants={item}>
            <Card className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-lime-400/10 p-2">
                <Receipt className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Add Expense</p>
                <p className="text-xs text-muted-foreground">Track spending</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-lime-400/10 p-2">
                <Banknote className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Add Income</p>
                <p className="text-xs text-muted-foreground">Record earnings</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-lime-400/10 p-2">
                <LineChart className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <p className="text-sm font-medium">View Reports</p>
                <p className="text-xs text-muted-foreground">Analyze data</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="flex items-center gap-3 p-4">
              <div className="rounded-lg bg-lime-400/10 p-2">
                <TrendingUp className="h-5 w-5 text-lime-400" />
              </div>
              <div>
                <p className="text-sm font-medium">Investments</p>
                <p className="text-xs text-muted-foreground">Track growth</p>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3"
        >
          {/* Main Balance Card - Full Width */}
          <div className="col-span-full grid grid-cols-1 gap-6 lg:grid-cols-3">
            <motion.div>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-lime-400/10 p-2">
                        <Wallet className="h-5 w-5 text-lime-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Total Balance</h3>
                        <p className="text-xs text-muted-foreground">
                          Current assets
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <ArrowUpDown className="mr-2 h-3 w-3" />
                      Transfer
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">$100,000.00</div>
                      <div className="flex items-center gap-1 text-xs text-green-500">
                        <TrendingUp className="h-3 w-3" />
                        +2.5% from last month
                      </div>
                    </div>
                    <Button size="sm">
                      <Receipt className="mr-2 h-3 w-3" />
                      New Transaction
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-lime-400/10 p-2">
                      <Banknote className="h-5 w-5 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Income</h3>
                      <p className="text-xs text-muted-foreground">
                        This month
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-green-500">
                      +$8,500.00
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Monthly income tracking
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-lime-400/10 p-2">
                      <LineChart className="h-5 w-5 text-lime-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Expenses</h3>
                      <p className="text-xs text-muted-foreground">
                        This month
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-red-500">
                      -$3,250.00
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      Monthly expense tracking
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="col-span-full grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-lime-400/10 p-2">
                        <LineChart className="h-5 w-5 text-lime-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">Spending Overview</h3>
                        <p className="text-xs text-muted-foreground">
                          Last 30 days
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="h-[15rem] w-full rounded-lg bg-muted/20"></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="h-full"
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-lime-400/10 p-2">
                        <Receipt className="h-5 w-5 text-lime-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">
                          Recent Transactions
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Latest activity
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium">Today</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-5 text-xs"
                        >
                          See all
                        </Button>
                      </div>
                      <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="space-y-3"
                      >
                        <motion.div
                          variants={item}
                          className="flex items-center justify-between rounded-lg p-3 hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-red-100 p-2">
                              <Receipt className="h-4 w-4 text-red-500" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">Netflix</div>
                              <div className="text-xs text-muted-foreground">
                                Entertainment
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-red-500">
                            -$15.99
                          </div>
                        </motion.div>
                        <motion.div
                          variants={item}
                          className="flex items-center justify-between rounded-lg p-3 hover:bg-muted/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-full bg-green-100 p-2">
                              <Banknote className="h-4 w-4 text-green-500" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">Salary</div>
                              <div className="text-xs text-muted-foreground">
                                Income
                              </div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-green-500">
                            +$3,500.00
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
