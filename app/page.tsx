'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Logo, { LogoCompact } from '@/components/Logo'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const ySpring = useSpring(y, springConfig)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main ref={containerRef} className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden sm:block">
              <Logo size="sm" />
            </div>
            <div className="sm:hidden">
              <LogoCompact />
            </div>
            <div className="flex items-center gap-8">
              <a href="#features" className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block">Features</a>
              <a href="#how" className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block">How it works</a>
              <a href="#deploy" className="text-sm text-muted hover:text-foreground transition-colors hidden sm:block">Deploy</a>
              <a
                href="https://github.com/Grandillionaire/StartupCouncilAI"
                className="text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all font-medium"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("/grid.svg")', backgroundSize: '60px 60px' }} />
        </div>

        <motion.div
          style={{ y: ySpring, opacity, scale }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs mb-8 border border-primary/20">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-medium">Deploy your own private instance</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-gradient-primary">Five AI advisors.</span>
            <br />
            <span className="text-foreground">One consensus.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light"
          >
            Naval, Elon, Larry, Alex, and Pavel debate your toughest decisions.
            Deploy your private council in 60 seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all transform hover:scale-105 shadow-soft hover:shadow-hover"
            >
              Deploy to Vercel
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-surface hover:bg-surface/90 rounded-xl font-medium transition-all border border-muted/30 hover:border-muted/40"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute top-32 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float animation-delay-2000" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The council&apos;s capabilities
            </h2>
            <p className="text-xl text-muted">
              Five unique perspectives, one powerful platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-agent debate',
                description: 'Five AI personalities with distinct expertise debate every angle of your question.',
                color: 'bg-naval/10 text-naval border-naval/20',
              },
              {
                title: 'Consensus building',
                description: 'Watch as advisors challenge, refine, and converge on optimal solutions.',
                color: 'bg-elon/10 text-elon border-elon/20',
              },
              {
                title: 'Your private instance',
                description: 'Deploy your own council. Your data never leaves your browser.',
                color: 'bg-larry/10 text-larry border-larry/20',
              },
              {
                title: '90% cost reduction',
                description: 'Advanced prompt caching cuts API costs while maintaining quality.',
                color: 'bg-alex/10 text-alex border-alex/20',
              },
              {
                title: 'Voice interaction',
                description: 'Speak naturally to your council. Get answers hands-free.',
                color: 'bg-pavel/10 text-pavel border-pavel/20',
              },
              {
                title: 'Export anywhere',
                description: 'Download as PDF, Markdown, or share debate transcripts with your team.',
                color: 'bg-primary/10 text-primary border-primary/20',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group p-8 bg-surface rounded-2xl border hover:shadow-soft transition-all duration-300 ${feature.color}`}
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your advisory council
            </h2>
            <p className="text-xl text-muted">
              Five legendary minds, each with unique expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { name: 'Naval', color: 'text-naval', desc: 'Philosophy & Strategy' },
              { name: 'Elon', color: 'text-elon', desc: 'Innovation & Scale' },
              { name: 'Larry', color: 'text-larry', desc: 'Enterprise & Data' },
              { name: 'Alex', color: 'text-alex', desc: 'Sales & Marketing' },
              { name: 'Pavel', color: 'text-pavel', desc: 'Product & Privacy' },
            ].map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`text-5xl font-bold mb-2 ${advisor.color}`}>
                  {advisor.name[0]}
                </div>
                <h3 className="text-lg font-semibold mb-1">{advisor.name}</h3>
                <p className="text-sm text-muted">{advisor.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how" className="py-32 relative bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three steps to clarity
            </h2>
            <p className="text-xl text-muted">
              From question to consensus in minutes
            </p>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
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

      {/* CTA Section */}
      <section id="deploy" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to make better decisions?
              </h2>
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