import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import pillIcon from '../Images/subheading-icon.png';

const ProblemWeSolve=()=>{
    return(
        <>
           <section className="problem-section">
      <div className="problem-container">
        {/* LEFT */}
        <motion.div
          className="problem-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.span
            className="pill"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <img src={pillIcon} alt="The Problem We Solve | Onbbits" />
            The Problem We Solve
          </motion.span>

          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Businesses struggle to convert
            <br />
            conversations into revenue
          </motion.h2>

          <div className="problem-columns">
            {/* LEFT LIST */}
            <motion.div
              className="problem-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="problem-col-title">Common Business Challenges</h4>
              <ul>
                <li>❌ Low open & response rates</li>
                <li>❌ Slow manual follow-ups</li>
                <li>❌ Repetitive support queries</li>
                <li>❌ Disconnected sales & support teams</li>
              </ul>
            </motion.div>

            {/* DIVIDER */}
            <motion.div
              className="problem-divider"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />

            {/* RIGHT LIST */}
            <motion.div
              className="problem-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="problem-col-title">Common Business Challenges</h4>
              <ul>
                <li>✅ Engage users on WhatsApp</li>
                <li>✅ Automate without sounding robotic</li>
                <li>✅ Convert chats into leads & orders</li>
                <li>✅ Unified inbox & analytics</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          className="problem-stats"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <h3>{ <CountUp end={90} duration={2.2}  enableScrollSpy
  scrollSpyOnce />}%
   <span className="arrow up">↑</span></h3>
            <p>Open Rates on <span className="bold-heading">WhatsApp</span></p>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <h3>{<CountUp end={3} duration={4}  enableScrollSpy
  scrollSpyOnce />}x</h3>
            <p>Faster <span className="bold-heading">Response</span></p>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <h3>{<CountUp end={50} duration={2.2}  enableScrollSpy
  scrollSpyOnce />}%
    <span className="arrow down">↓</span></h3>
            <p>Support <span className="bold-heading">Load Reduction</span></p>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <h3>{ <CountUp end={5} duration={4}  enableScrollSpy
  scrollSpyOnce />}x</h3>
            <p>Higher <span className="bold-heading">Conversion</span></p>
          </motion.div>
        </motion.div>
      </div>
    </section>
        </>
    )
}

export default ProblemWeSolve;