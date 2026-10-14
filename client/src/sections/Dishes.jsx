import React, { useState } from 'react'
import Animated from '../components/Animated'
import { dishes } from '../data/data'
import { motion } from 'motion/react'

const Dishes = () => {
  const [rotate, setRotate] = useState({})

  return (
    <section id="dishes" className="px-4 md:px-16 mt-44">
      <div className="text-center mb-16">
        <Animated delay={0.2}>
          <p className="text-orange-500 font-medium uppercase tracking-wide mb-3.5">
            Chef's Signature Selections
          </p>
        </Animated>

        <Animated>
          <h2 className="text-4xl md:text-5xl font-medium text-zinc-900 max-w-lg mx-auto text-balance font-urbanist">
            Discover our Signature dishes
          </h2>
        </Animated>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 max-w-5xl mx-auto">
        {dishes.map((dish, index) => (
          <Animated
            key={index}
            delay={index * 0.1}
            y={80}
            onMouseEnter={() => setRotate((prev) => ({ ...prev, [index]: 15 }))}
            onMouseLeave={() => setRotate((prev) => ({ ...prev, [index]: 0 }))}
            className="flex flex-col items-center text-center shrink-0 cursor-pointer"
          >
            <motion.div
              animate={{ rotate: rotate[index] || 0 }}
              transition={{ type: 'spring', stiffness: 80, damping: 15 }}
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="size-28 md:size-36 object-cover"
              />
            </motion.div>
            <h3 className="mt-5 font-medium">{dish.title}</h3>
            <p className="mt-2 text-zinc-600">{dish.price}</p>
          </Animated>
        ))}
      </div>
    </section>
  )
}

export default Dishes