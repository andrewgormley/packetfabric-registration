import React from 'react';
import { motion } from "framer-motion"

class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChangeCheckbox } = this.props;

    return (
      <motion.div initial={{opacity: 0, x:100}} animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-100}} transition={{duration: .2, ease: "easeInOut"}}>
      <div className="form-container px-5 px-md-0">

        <div className="form-container-inner">

          <label className="col-sm-12" style={{paddingLeft: "0"}}>
            <input
              type="checkbox"
              checked={values.acceptPrivacyPolicy}
              onChange={handleChangeCheckbox('acceptPrivacyPolicy')}
            />
            I accept the terms of the <a href="https://www.packetfabric.com/" target="_blank">Privacy Policy</a>
          </label>

          <p style={{marginBottom: "24px"}}>
            By clicking Register Company, I certify that I am an authorized representative of testcompany and understand that testcompany is entering into a legally binding contract with PacketFabric.
          </p>

          <div className="back" onClick={this.back}>Previous Step</div>

          <button disabled={!values.acceptPrivacyPolicy} onClick={this.continue} style={{float: "right"}}>
            Register Company
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>


        </div>

      </div>
      </motion.div>
    )
  }
}

export default Confirm;
