'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const features = [
  {
    title: 'Multi-agent debate',
    description: 'Five AI personalities with distinct expertise debate every angle of your question.',
    color: 'from-naval/20 to-naval/5',
    borderColor: 'border-naval/30',
    iconColor: 'text-naval',
    icon: '🧠',
  },
  {
    title: 'Consensus building',
    description: 'Watch as advisors challenge, refine, and converge on optimal solutions.',
    color: 'from-elon/20 to-elon/5',
    borderColor: 'border-elon/30',
    iconColor: 'text-elon',
    icon: '🤝',
  },
  {
    title: 'Your private instance',
    description: 'Deploy your own council. Your data never leaves your browser.',
    color: 'from-larry/20 to-larry/5',
    borderColor: 'border-larry/30',
    iconColor: 'text-larry',
    icon: '🔒',
  },
  {
    title: '90% cost reduction',
    description: 'Advanced prompt caching cuts API costs while maintaining quality.',
    color: 'from-alex/20 to-alex/5',
    borderColor: 'border-alex/30',
    iconColor: 'text-alex',
    icon: '💎',
  },
  {
    title: 'Voice interaction',
    description: 'Speak naturally to your council. Get answers hands-free.',
    color: 'from-pavel/20 to-pavel/5',
    borderColor: 'border-pavel/30',
    iconColor: 'text-pavel',
    icon: '🎙️',
  },
  {
    title: 'Export anywhere',
    description: 'Download as PDF, Markdown, or share debate transcripts with your team.',
    color: 'from-primary/20 to-primary/5',
    borderColor: 'border-primary/30',
    iconColor: 'text-primary',
    icon: '📤',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    rotateX: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" className="py-32 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The council&apos;s capabilities
          </h2>
          <p className="text-xl text-muted">
            Five unique perspectives, one powerful platform
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000"
        >
          {features.map((feature, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -8,
                rotateY: 5,
                scale: 1.02,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="group relative"
            >
              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${feature.color} border ${feature.borderColor} backdrop-blur-sm transform-3d transition-all duration-300 hover:shadow-soft`}>
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />

                {/* Icon with animation */}
                <motion.div
                  className="relative text-4xl mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <span className={feature.iconColor}>{feature.icon}</span>
                  <motion.div
                    className={`absolute inset-0 ${feature.iconColor} blur-xl opacity-30`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-muted relative z-10">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className={feature.iconColor}>→</span>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}