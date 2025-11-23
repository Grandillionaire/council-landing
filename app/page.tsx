'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main ref={containerRef} className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-glass">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-medium tracking-tight">StartupCouncil</div>
            <div className="flex items-center gap-8">
              <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors">Features</a>
              <a href="#how" className="text-sm text-muted hover:text-foreground transition-colors">How it works</a>
              <a href="#deploy" className="text-sm text-muted hover:text-foreground transition-colors">Deploy</a>
              <a
                href="https://github.com/Grandillionaire/StartupCouncilAI"
                className="text-sm px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all backdrop-blur-sm"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20 animate-gradient" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />

        <motion.div
          style={{ y: ySpring, opacity, scale }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-glass rounded-full text-xs mb-8 border border-glass">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted">Now available for deployment</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
          >
            <span className="text-gradient">Your AI Council</span>
            <br />
            <span className="text-white/80">awaits</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Five legendary advisors debate your toughest decisions.
            Deploy your private instance in 60 seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-medium transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
            >
              Deploy now
            </a>
            <a
              href="#demo"
              className="px-8 py-4 bg-glass hover:bg-white/20 rounded-xl font-medium transition-all backdrop-blur-sm border border-glass"
            >
              Watch demo
            </a>
          </motion.div>
        </motion.div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float animation-delay-2000" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Engineered for excellence
            </h2>
            <p className="text-xl text-muted">
              Every detail crafted for the perfect advisory experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-perspective analysis',
                description: 'Five unique AI personalities provide diverse viewpoints on every decision.',
                icon: '🧠',
              },
              {
                title: 'Consensus building',
                description: 'Watch advisors debate and converge on the optimal solution.',
                icon: '🤝',
              },
              {
                title: 'Private deployment',
                description: 'Your own instance. Your data. Complete privacy and control.',
                icon: '🔒',
              },
              {
                title: '90% cost reduction',
                description: 'Advanced caching reduces API costs while maintaining quality.',
                icon: '💎',
              },
              {
                title: 'Voice interface',
                description: 'Speak naturally. Get responses instantly. Hands-free operation.',
                icon: '🎙️',
              },
              {
                title: 'Export anywhere',
                description: 'PDF, Markdown, or share links. Your insights, your format.',
                icon: '📤',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 bg-glass rounded-2xl border border-glass hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-medium mb-4">
              Three steps to wisdom
            </h2>
            <p className="text-xl text-muted">
              From question to consensus in minutes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: '1',
                title: 'Deploy your instance',
                description: 'Click deploy, sign in with GitHub, and your private council is ready in 60 seconds.',
              },
              {
                step: '2',
                title: 'Ask your question',
                description: 'Type or speak your challenge. The AI council immediately begins their analysis.',
              },
              {
                step: '3',
                title: 'Receive consensus',
                description: 'Five advisors debate, challenge, and refine until reaching a unified recommendation.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                <p className="text-muted text-lg">{item.description}</p>
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 -right-6 w-12 h-[2px] bg-gradient-to-r from-accent/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="deploy" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 bg-glass rounded-3xl border border-glass relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-purple-600/10" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-medium mb-6">
                Ready to elevate your decisions?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
                Join hundreds of founders using AI councils to make better strategic decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
                  className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-xl font-medium transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-accent/25"
                >
                  Deploy your council
                </a>
                <a
                  href="https://github.com/Grandillionaire/StartupCouncilAI"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-medium transition-all backdrop-blur-sm"
                >
                  View source
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-glass">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted text-sm">
              © 2024 StartupCouncil. Open source under MIT license.
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Grandillionaire/StartupCouncilAI" className="text-muted hover:text-foreground text-sm transition-colors">
                GitHub
              </a>
              <a href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI" className="text-muted hover:text-foreground text-sm transition-colors">
                Deploy
              </a>
              <a href="#" className="text-muted hover:text-foreground text-sm transition-colors">
                Documentation
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}