'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8])

  return (
    <section id="deploy" ref={ref} className="py-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
          style={{ scale, opacity }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="p-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl border border-primary/20 relative overflow-hidden backdrop-blur-sm"
          >
            {/* Animated background patterns */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: 'radial-gradient(circle at 20% 50%, rgba(193, 95, 60, 0.1) 0%, transparent 50%)',
                }}
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              <motion.div
                className="absolute top-0 right-0 w-full h-full"
                style={{
                  background: 'radial-gradient(circle at 80% 50%, rgba(193, 95, 60, 0.1) 0%, transparent 50%)',
                }}
                animate={{
                  x: [0, -100, 0],
                  y: [0, 50, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-xs border border-primary/30 mb-6"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-medium">Ready to deploy</span>
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Ready to make
                <motion.span
                  className="block text-gradient-primary mt-2"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  better decisions?
                </motion.span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted mb-8 max-w-2xl mx-auto"
              >
                Deploy your private AI council and tap into five legendary minds
                for every strategic choice you make.
              </motion.p>

              {/* CTAs with advanced animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.a
                  href="https://vercel.com/new/clone?repository-url=https://github.com/Grandillionaire/StartupCouncilAI"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 bg-primary text-white rounded-xl font-medium overflow-hidden shadow-soft hover:shadow-hover transition-all"
                >
                  <span className="relative z-10">Deploy your council</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ type: 'tween', duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)',
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                  />
                </motion.a>

                <motion.a
                  href="https://github.com/Grandillionaire/StartupCouncilAI"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-surface/90 hover:bg-surface rounded-xl font-medium border border-muted/30 hover:border-primary/30 transition-all backdrop-blur-sm"
                >
                  View source code
                </motion.a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.7 }}
                className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto"
              >
                {[
                  { label: 'Deploy time', value: '60s' },
                  { label: 'Advisors', value: '5' },
                  { label: 'Cost reduction', value: '90%' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-2xl font-bold text-primary mb-1"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-muted uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 border-2 border-primary/10 rounded-full"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  )
}