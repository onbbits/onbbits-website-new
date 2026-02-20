import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PoliciesHero from "../Components/PoliciesHero";

const NotFound=()=>{
    const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};
    return(
        <>
      
          <PoliciesHero
        title=""
  highlightText="404"
  title2="Page Not Found"
  className="not-found-page"
  
 />


      <motion.div
            className="hero-actions not-found-btn"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            <Link to='/'><button className="btn-outline">Go to HomePage</button></Link>
          </motion.div>
        
        </>
    )
}

export default NotFound;