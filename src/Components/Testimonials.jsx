import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../Data";
import heroImg2 from '../Images/hero-2.webp';

const Testimonials=()=>{
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // change every 5 sec

    return () => clearInterval(interval);
  }, []);
    return(
        <>
        <section className="testimonial-section">
      <div className="testimonial-container">

        {/* LEFT SIDE */}
        <motion.div
          className="testimonial-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25 }
            }
          }}
        >
          <motion.div
            className="testimonial-left-text"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Stories of Success</h2>
            <p className="section-sub">
              Businesses across industries are closing more deals with Onbbits.
            </p>
          </motion.div>

          <motion.div
            className="testimonial-image-wrapper"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImg2}
              alt="Stories of Success | Onbbits"
              className="chat-overlay"
            />
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="testimonial-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <p className="section-sub">
                “{testimonials[index].desc}”
              </p>

              <h3 className="testimonial-title">
                {testimonials[index].title}
              </h3>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
        </>
    )
}

export default Testimonials;