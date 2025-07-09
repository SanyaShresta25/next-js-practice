'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const benefits = [
  {
    title: 'File-based Routing',
    desc: 'Automatic routing from your file structure. No need to configure routes manually.',
  },
  {
    title: 'SSR + SSG + ISR',
    desc: 'Choose your rendering method per page: server-side, static, or on-demand.',
  },
  {
    title: 'API Routes',
    desc: 'Add backend logic to your frontend app easily using Next.js API routes.',
  },
  {
    title: 'Built-in Optimizations',
    desc: 'Automatic image, font, and script optimizations to boost performance.',
  },
]

const chartData = [
  { framework: 'React Only', performance: 60 },
  { framework: 'Next.js', performance: 95 },
]

export default function WhyNextPage() {
  return (
    <main className="flex flex-col gap-12 p-6 md:p-12 max-w-6xl mx-auto">
      {/* Page Header */}
      <section className="text-center space-y-4">
        <Badge className="text-sm px-3 py-1 rounded-full">React Enhanced</Badge>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Why Next.js Makes React Better
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Unlock the full potential of React with built-in routing, server-side rendering,
          and performance optimizations that scale.
        </p>
      </section>

      {/* Carousel Section */}
      <section className="relative w-full max-w-4xl mx-auto">
        <Carousel>
          <CarouselContent>
            {benefits.map((item, idx) => (
              <CarouselItem key={idx} className="basis-full md:basis-1/2 lg:basis-1/3 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow h-full">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-5 h-5" />
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Chart Section */}
      <section>
        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle>Performance Comparison</CardTitle>
            <CardDescription>
              See how Next.js enhances performance over a plain React setup.
            </CardDescription>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="framework" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="performance" fill="#4f46e5" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Ready to Try Next.js?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Whether you're building static sites, full-stack applications, or hybrid systems,
          Next.js gives you the power to move faster and scale confidently.
        </p>
        <Button className="text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90">
          Get Started with Next.js
        </Button>
      </section>
    </main>
  )
}
