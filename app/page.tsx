'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Logo, { LogoCompact } from '@/components/Logo'

// Lazy load heavy sections
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <div className="h-96 animate-pulse bg-surface/50" />,
})

const AdvisorsSection = dynamic(() => import('@/components/AdvisorsSection'), {
  loading: () => <div className="h-64 animate-pulse" />,
})

// Optimized animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()

  // Optimized parallax with will-change
  const y = useTransform(scrollY, [0, 500], [0, 150], { clamp: true })
  const opacity = useTransform(scrollY, [0, 300], [1, 0], { clamp: true })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Minimal loading state
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <main className="relative overflow-x-hidden">
      {/* Navigation - Fixed for better performance */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-muted/20 will-change-transform">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden sm:block">
              <Logo size="sm" />
            </div>
            <div className="sm:hidden">
              <LogoCompact />
            </div>
            <div className="flex items-center gap-8">
              <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block">
                Features
              </a>
              <a href="#how" className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block">
                How it works
              </a>
              <a
                href="https://github.com/Grandillionaire/StartupCouncilAI"
                className="text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all font-medium transform hover:scale-105"
                aria-label="View StartupCouncil on GitHub"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with optimized animations */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        <motion.div
          style={{ y, opacity }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto will-change-transform"
        >
          <AnimatePresence mode="wait">
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs border border-primary/20">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-primary font-medium">Deploy your own private instance</span>
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              >
                <span className="text-gradient-primary">Five AI advisors.</span>
                <br />
                <span className="text-foreground">One consensus.</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-muted max-w-3xl mx-auto leading-relaxed font-light"
              >
                Naval, Elon, Larry, Alex, and Pavel debate your toughest decisions.
                Deploy your private council in 60 seconds.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
                  className="group px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-soft hover:shadow-hover"
                  aria-label="Deploy StartupCouncil to Vercel"
                >
                  <span className="relative">
                    Deploy to Vercel
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                  </span>
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 bg-surface hover:bg-surface/90 rounded-xl font-medium transition-all border border-muted/30 hover:border-muted/40 transform hover:scale-105"
                  aria-label="Learn more about StartupCouncil"
                >
                  Learn more
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Simplified decorative elements */}
        <div className="absolute top-32 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Lazy loaded sections */}
      <FeaturesSection />
      <AdvisorsSection />

      {/* How it Works Section */}
      <section id="how" className="py-32 relative bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Three steps to clarity</h2>
            <p className="text-xl text-muted">From question to consensus in minutes</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Deploy your instance',
                description: 'Click deploy, connect GitHub, and your private council is live in 60 seconds.',
              },
              {
                step: '02',
                title: 'Ask your question',
                description: 'Type or speak your challenge. The council begins their analysis immediately.',
              },
              {
                step: '03',
                title: 'Receive consensus',
                description: 'Five perspectives debate, challenge, and refine to reach the best solution.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4 font-mono">{item.step}</div>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with optimized animation */}
      <section id="deploy" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4 }}
            className="p-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to make better decisions?</h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Deploy your private AI council and tap into five legendary minds for every strategic choice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
                  className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-soft hover:shadow-hover"
                >
                  Deploy your council
                </a>
                <a
                  href="https://github.com/Grandillionaire/StartupCouncilAI"
                  className="px-8 py-4 bg-surface hover:bg-surface/90 rounded-xl font-medium transition-all border border-muted/30"
                >
                  View source code
                </a>
              </div>
            </div>
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 animate-gradient" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={false} />
              <span className="text-muted text-sm">© 2024 StartupCouncil</span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/Grandillionaire/StartupCouncilAI"
                className="text-muted hover:text-foreground text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
                className="text-muted hover:text-foreground text-sm transition-colors"
              >
                Deploy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}