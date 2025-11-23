'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Logo, { LogoCompact } from '@/components/Logo'

const fadeIn = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="relative">
      {/* Simple Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="hidden sm:block">
              <Logo size="sm" />
            </div>
            <div className="sm:hidden">
              <LogoCompact />
            </div>
            <div className="flex items-center gap-6">
              <a href="#features" className="text-sm text-muted hover:text-primary transition-colors hidden sm:block">
                Features
              </a>
              <a href="#deploy" className="text-sm text-muted hover:text-primary transition-colors hidden sm:block">
                Deploy
              </a>
              <a
                href="https://github.com/Grandillionaire/StartupCouncilAI"
                className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Clean Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          {...fadeIn}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-xs border border-primary/20 mb-8">
            <span className="w-2 h-2 bg-primary rounded-full" />
            <span className="text-primary font-medium">Deploy your own instance</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gradient-primary">Five AI advisors.</span>
            <br />
            <span>One consensus.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Naval, Elon, Larry, Alex, and Pavel debate your decisions.
            Deploy in 60 seconds.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-colors"
            >
              Deploy to Vercel
            </a>
            <a
              href="#features"
              className="px-8 py-4 bg-surface hover:bg-surface/90 rounded-xl font-medium transition-colors border border-muted/30"
            >
              Learn more
            </a>
          </div>
        </motion.div>
      </section>

      {/* Simple Features Grid */}
      <section id="features" className="py-32 bg-surface/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Core capabilities
            </h2>
            <p className="text-xl text-muted">
              Everything you need for strategic decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Multi-agent debate',
                description: 'Five AI personalities debate every angle.',
                icon: '🧠',
              },
              {
                title: 'Consensus building',
                description: 'Advisors converge on optimal solutions.',
                icon: '🤝',
              },
              {
                title: 'Private instance',
                description: 'Your data never leaves your browser.',
                icon: '🔒',
              },
              {
                title: '90% cost reduction',
                description: 'Advanced caching cuts API costs.',
                icon: '💎',
              },
              {
                title: 'Voice interaction',
                description: 'Speak naturally to your council.',
                icon: '🎙️',
              },
              {
                title: 'Export anywhere',
                description: 'PDF, Markdown, or share transcripts.',
                icon: '📤',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-surface rounded-xl border border-muted/20 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Advisors */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Your advisors
            </h2>
            <p className="text-xl text-muted">
              Five legendary minds
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { name: 'Naval', color: 'text-naval' },
              { name: 'Elon', color: 'text-elon' },
              { name: 'Larry', color: 'text-larry' },
              { name: 'Alex', color: 'text-alex' },
              { name: 'Pavel', color: 'text-pavel' },
            ].map((advisor, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl font-bold mb-2 ${advisor.color}`}>
                  {advisor.name[0]}
                </div>
                <p className="text-sm text-muted">{advisor.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section id="deploy" className="py-32 bg-surface/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="p-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to deploy?
            </h2>
            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
              Get your private AI council running in 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-colors"
              >
                Deploy now
              </a>
              <a
                href="https://github.com/Grandillionaire/StartupCouncilAI"
                className="px-8 py-4 bg-surface hover:bg-surface/90 rounded-xl font-medium transition-colors border border-muted/30"
              >
                View code
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-muted/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" showText={false} />
              <span className="text-muted text-sm">© 2024 StartupCouncil</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/Grandillionaire/StartupCouncilAI" className="text-muted hover:text-primary text-sm transition-colors">
                GitHub
              </a>
              <a href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI" className="text-muted hover:text-primary text-sm transition-colors">
                Deploy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}