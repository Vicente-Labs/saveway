'use client'

import { motion } from 'framer-motion'
import {
  Banknote,
  BrainIcon,
  CreditCard,
  LineChart,
  Receipt,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background px-48 py-8">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-6">
              <Card className="col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-lime-400/10 p-3">
                      <Banknote className="h-6 w-6 text-lime-400" />
                    </div>
                    <h3 className="text-xl font-bold">Balance</h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">$100,000</div>
                    <Button>
                      <Receipt className="mr-2" />
                      Register transaction
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-lime-400/10 p-3">
                      <CreditCard className="h-6 w-6 text-lime-400" />
                    </div>
                    <h3 className="text-xl font-bold">Quick Actions</h3>
                  </div>
                </CardHeader>
                <CardContent className="row-span-2 flex flex-row pt-4">
                  <div className="space-y-3">
                    <div className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <BrainIcon className="h-4 w-4" />
                      AI Insights
                    </div>
                    <div className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
                      <Receipt className="h-4 w-4" />
                      Compare history
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-lime-400/10 p-3">
                      <LineChart className="h-6 w-6 text-lime-400" />
                    </div>
                    <h3 className="text-xl font-bold">Spending Overview</h3>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-[200px] w-full rounded-lg bg-muted/20"></div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-lime-400/10 p-3">
                  <Receipt className="h-6 w-6 text-lime-400" />
                </div>
                <h3 className="text-xl font-bold">Transaction History</h3>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-sm font-medium">Today</div>
                  <div className="text-sm text-muted-foreground">
                    Netflix - $15.99
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Spotify - $9.99
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-sm font-medium">Yesterday</div>
                  <div className="text-sm text-muted-foreground">
                    Amazon - $45.50
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Uber - $12.99
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.main>
    </div>
  )
}
