'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Deploy your instance',
    description: 'Click deploy, connect GitHub, and your private council is live in 60 seconds.',
    color: 'text-naval',
  },
  {
    number: '02',
    title: 'Ask your question',
    description: 'Type or speak your challenge. The council begins their analysis immediately.',
    color: 'text-elon',
  },
  {
    number: '03',
    title: 'Receive consensus',
    description: 'Five perspectives debate, challenge, and refine to reach the best solution.',
    color: 'text-primary',
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="how" ref={ref} className="py-32 relative bg-surface/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Animated line connecting steps */}
        <motion.div
          className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block"
          style={{ height: lineHeight }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Three steps to clarity
          </h2>
          <p className="text-xl text-muted">
            From question to consensus in minutes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              className="relative group"
            >
              {/* Step number with animation */}
              <motion.div
                className={`text-7xl font-bold ${step.color} mb-4 font-mono relative`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {step.number}
                <motion.div
                  className={`absolute inset-0 ${step.color} blur-2xl opacity-20`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-xl bg-surface border border-muted/20 group-hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
              >
                <h3 className="text-2xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-lg">
                  {step.description}
                </p>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-full h-full" viewBox="0 0 64 64">
                    <path
                      d="M 0 0 L 64 0 L 64 64"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={step.color}
                      opacity="0.3"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                  style={{ originX: 0 }}
                >
                  <div className="w-full h-full bg-gradient-to-r from-primary/30 to-transparent" />
                  <motion.div
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 border border-primary/10 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 border border-primary/10 rounded-full"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </section>
  )
}