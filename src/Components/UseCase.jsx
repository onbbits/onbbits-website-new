import React from "react";
import { motion } from "framer-motion";

import pillIcon from '../Images/subheading-icon.png';

import CardInbox from "./CardInbox";
import CardSales from "./CardSales";
import CardAutomation from "./CardAutomation";
import CardAnalytics from "./CardAnalytics";

export const UseCase=()=>{
    return(
        <>
 <section className="usecase-section">
  <div className="usecase-header">
        <motion.p
          className="section-sub"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
         From lead capture and automation to team collaboration and analytics, Onbbits gives you everything you need to run WhatsApp at scale.

        </motion.p>

        <motion.div
          className="header-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <span className="pill">
            <img src={pillIcon} alt="Business Operations Simplified | Onbbits" />
            Business Operations Simplified
          </span>

          <h2 className="section-heading">
            One Platform. Every WhatsApp Use Case
          </h2>
        </motion.div>
      </div>

  <div className="usecase-grid">
    <div className="col-left">
      <CardInbox />
      <CardSales />
    </div>

    <div className="col-right">
    <CardAutomation />
   <CardAnalytics />
    </div>
  </div>
</section>

        </>
    )
}

export default UseCase;