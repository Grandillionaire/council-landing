'use client'

import { useEffect, useRef, useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue, useVelocity } from 'framer-motion'
import Logo, { LogoCompact } from '@/components/Logo'

// Lazy load components with better loading states
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  ssr: false,
  loading: () => <div className="h-96" />,
})

const AdvisorsSection = dynamic(() => import('@/components/AdvisorsSection'), {
  ssr: false,
  loading: () => <div className="h-64" />,
})

const HowItWorksSection = dynamic(() => import('@/components/HowItWorksSection'), {
  ssr: false,
  loading: () => <div className="h-96" />,
})

const CTASection = dynamic(() => import('@/components/CTASection'), {
  ssr: false,
  loading: () => <div className="h-64" />,
})

// Smooth spring config
const springConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
}

// Advanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
    },
  },
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)

  // Advanced parallax transforms
  const heroY = useSpring(
    useTransform(scrollY, [0, 1000], [0, 200]),
    springConfig
  )

  const heroOpacity = useSpring(
    useTransform(scrollY, [0, 400], [1, 0]),
    springConfig
  )

  const heroScale = useSpring(
    useTransform(scrollY, [0, 400], [1, 0.95]),
    springConfig
  )

  // Mouse parallax for hero
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const heroRotateX = useSpring(
    useTransform(mouseY, [-300, 300], [1, -1]),
    springConfig
  )

  const heroRotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-1, 1]),
    springConfig
  )

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set(clientX - innerWidth / 2)
      mouseY.set(clientY - innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Simulate loading
    const timer = setTimeout(() => {
      setMounted(true)
      setIsLoading(false)
    }, 300)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timer)
    }
  }, [mouseX, mouseY])

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <div className="w-12 h-12 border-3 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-muted text-sm">Loading StartupCouncil...</p>
        </motion.div>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-x-hidden"
      >
        {/* Advanced Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-muted/10"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <Logo size="sm" />
              </motion.div>
              <div className="sm:hidden">
                <LogoCompact />
              </div>

              <div className="flex items-center gap-6">
                {['Features', 'Advisors', 'Deploy'].map((item, i) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.3 }}
                    whileHover={{ y: -2 }}
                    className="text-sm text-muted hover:text-primary transition-colors hidden sm:block relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </motion.a>
                ))}

                <motion.a
                  href="https://github.com/Grandillionaire/StartupCouncilAI"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all font-medium relative overflow-hidden group"
                >
                  <span className="relative z-10">View on GitHub</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section 2.0 */}
        <section className="relative min-h-screen flex items-center justify-center perspective-1000">
          {/* Animated background mesh */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                x: [0, -100, 0],
                y: [0, 100, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>

          <motion.div
            style={{
              y: heroY,
              opacity: heroOpacity,
              scale: heroScale,
              rotateX: heroRotateX,
              rotateY: heroRotateY,
            }}
            className="relative z-10 text-center px-6 max-w-5xl mx-auto transform-3d"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="inline-block"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-xs border border-primary/20 backdrop-blur-sm">
                  <motion.span
                    className="w-2 h-2 bg-primary rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-primary font-medium">Your own private AI council</span>
                </div>
              </motion.div>

              {/* Title with advanced animation */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-8 mb-6"
              >
                <motion.span
                  className="inline-block text-gradient-primary"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  Five AI advisors.
                </motion.span>
                <br />
                <motion.span
                  className="inline-block text-foreground"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  One consensus.
                </motion.span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light"
              >
                Naval, Elon, Larry, Alex, and Pavel debate your toughest decisions.
                <br className="hidden sm:block" />
                Deploy your private council in 60 seconds.
              </motion.p>

              {/* CTA Buttons with advanced hover */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-primary text-white rounded-xl font-medium overflow-hidden shadow-soft hover:shadow-hover transition-shadow"
                >
                  <span className="relative z-10">Deploy to Vercel</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                  />
                </motion.a>

                <motion.a
                  href="#features"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-surface/90 backdrop-blur-sm rounded-xl font-medium border border-muted/30 hover:border-primary/30 transition-all"
                >
                  Learn more
                  <motion.span
                    className="inline-block ml-2"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-5 h-8 border-2 border-muted/30 rounded-full flex justify-center">
                  <div className="w-1 h-2 bg-muted/50 rounded-full mt-1" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Dynamically loaded sections with Suspense */}
        <Suspense fallback={<div className="h-96" />}>
          <FeaturesSection />
        </Suspense>

        <Suspense fallback={<div className="h-64" />}>
          <AdvisorsSection />
        </Suspense>

        <Suspense fallback={<div className="h-96" />}>
          <HowItWorksSection />
        </Suspense>

        <Suspense fallback={<div className="h-64" />}>
          <CTASection />
        </Suspense>

        {/* Footer 2.0 */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="py-12 border-t border-muted/10 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3"
              >
                <Logo size="sm" showText={false} />
                <span className="text-muted text-sm">© 2024 StartupCouncil</span>
              </motion.div>

              <div className="flex items-center gap-6">
                {['GitHub', 'Deploy', 'Documentation'].map((link, i) => (
                  <motion.a
                    key={link}
                    href={link === 'GitHub' ? 'https://github.com/Grandillionaire/StartupCouncilAI' :
                          link === 'Deploy' ? 'https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI' : '#'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="text-muted hover:text-primary text-sm transition-all"
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.footer>
      </motion.main>
    </AnimatePresence>
  )
}