import React from 'react';
import { motion } from "framer-motion"

function Navigation(props) {
  return (
    <nav className="d-none d-md-block">
      <ul>

        {props.step > 1 ?
          <li>
            <div className="icon icon-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Get Started
          </li>
          :
          <li>
            <div className="icon icon-number">1</div>
            Get Started
          </li>
        }

        {props.step === 2 ?
          <li>
            <div className="icon icon-number icon-current">2</div>
            <div className="current">Company</div>
            <div className="sub-category sub-category-selected">
              Information
              <motion.svg initial={{opacity: 0, x:-20}} animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-100}} transition={{duration: .2, ease: "easeInOut"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></motion.svg>
            </div>
            <div className="sub-category">Address</div>
          </li>
        : props.step === 3 ?
          <li>
            <div className="icon icon-number icon-current">2</div>
            <div className="current">Company</div>
            <div className="sub-category">
              Information
            </div>
            <div className="sub-category sub-category-selected">
              Address
              <motion.svg initial={{opacity: 0, x:-20}} animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-100}} transition={{duration: .2, ease: "easeInOut"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></motion.svg>
            </div>
          </li>
        : props.step > 3 ?
          <li>
            <div className="icon icon-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Company
          </li>
        :
          <li>
            <div className="icon icon-number">2</div>
            Company
          </li>
        }

        {props.step === 4 ?
          <li>
            <div className="icon icon-number icon-current">3</div>
            <div className="current">Billing</div>
          </li>
        : props.step > 4 ?
          <li>
            <div className="icon icon-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Billing
          </li>
        :
          <li>
            <div className="icon icon-number">3</div>
            Billing
          </li>
        }

        {props.step === 5 ?
          <li>
            <div className="icon icon-number icon-current">4</div>
            <div className="current">Confirm</div>
            <div className="sub-category sub-category-selected">
              Service Agreement
              <motion.svg initial={{opacity: 0, x:-20}} animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-100}} transition={{duration: .2, ease: "easeInOut"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></motion.svg>
            </div>
            <div className="sub-category">Register Company</div>
          </li>
        : props.step === 6 ?
          <li>
            <div className="icon icon-number icon-current">4</div>
            <div className="current">Confirm</div>
            <div className="sub-category">
              Service Agreement
            </div>
            <div className="sub-category sub-category-selected">
              Register Company
              <motion.svg initial={{opacity: 0, x:-20}} animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-100}} transition={{duration: .2, ease: "easeInOut"}} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></motion.svg>
            </div>
          </li>
        : props.step > 6 ?
          <li>
            <div className="icon icon-success">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            Confirm
          </li>
        :
          <li>
            <div className="icon icon-number">4</div>
            Company
          </li>
        }

      </ul>
    </nav>
  );
}

export default Navigation;
