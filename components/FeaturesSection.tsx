'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Multi-agent debate',
    description: 'Five AI personalities with distinct expertise debate every angle of your question.',
    color: 'bg-naval/10 text-naval border-naval/20',
    icon: '🧠',
  },
  {
    title: 'Consensus building',
    description: 'Watch as advisors challenge, refine, and converge on optimal solutions.',
    color: 'bg-elon/10 text-elon border-elon/20',
    icon: '🤝',
  },
  {
    title: 'Your private instance',
    description: 'Deploy your own council. Your data never leaves your browser.',
    color: 'bg-larry/10 text-larry border-larry/20',
    icon: '🔒',
  },
  {
    title: '90% cost reduction',
    description: 'Advanced prompt caching cuts API costs while maintaining quality.',
    color: 'bg-alex/10 text-alex border-alex/20',
    icon: '💎',
  },
  {
    title: 'Voice interaction',
    description: 'Speak naturally to your council. Get answers hands-free.',
    color: 'bg-pavel/10 text-pavel border-pavel/20',
    icon: '🎙️',
  },
  {
    title: 'Export anywhere',
    description: 'Download as PDF, Markdown, or share debate transcripts with your team.',
    color: 'bg-primary/10 text-primary border-primary/20',
    icon: '📤',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturesSection() {
  return (
    <section id="features" className="py-32 relative bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The council&apos;s capabilities</h2>
          <p className="text-xl text-muted">Five unique perspectives, one powerful platform</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={item}
              className={`group p-8 bg-surface rounded-2xl border hover:shadow-soft transition-all duration-300 transform hover:-translate-y-1 ${feature.color}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}