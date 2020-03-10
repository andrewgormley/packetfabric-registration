import React from 'react';
import image from '../assets/img/success.png';
import { motion } from "framer-motion"

class Success extends React.Component {
  render() {
    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>
      <div className="form-container" style={{paddingTop: "64px"}}>

        <div className="form-container-inner">

          <img src={image} alt="Logo" />

          <div className="mb-5">
            <h1 className="text-center">Registration Complete</h1>
            <p className="text-center">Your account will be disabled until it has been reviewed by our account team in the next 24 hours. You will be contacted if any further information is required.</p>
          </div>

          <button style={{width: "100%"}}>
            Continue
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

        </div>

      </div>
      </motion.div>
    )
  }
}

export default Success;
