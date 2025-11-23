'use client'

import { motion } from 'framer-motion'

const advisors = [
  { name: 'Naval', color: 'text-naval', desc: 'Philosophy & Strategy', initial: 'N' },
  { name: 'Elon', color: 'text-elon', desc: 'Innovation & Scale', initial: 'E' },
  { name: 'Larry', color: 'text-larry', desc: 'Enterprise & Data', initial: 'L' },
  { name: 'Alex', color: 'text-alex', desc: 'Sales & Marketing', initial: 'A' },
  { name: 'Pavel', color: 'text-pavel', desc: 'Product & Privacy', initial: 'P' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const advisorCard = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

export default function AdvisorsSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your advisory council</h2>
          <p className="text-xl text-muted">Five legendary minds, each with unique expertise</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              variants={advisorCard}
              className="text-center group cursor-default"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`text-5xl font-bold mb-2 ${advisor.color} transition-all duration-300`}
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                {advisor.initial}
              </motion.div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                {advisor.name}
              </h3>
              <p className="text-sm text-muted">{advisor.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}