import React from 'react';
import { motion } from "framer-motion"

class MasterServiceAgreement extends React.Component {
  state = {
    modalIsOpen: false
  }

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

          <div className="scroll-box mb-4">
            <h1>Master Service Agreement</h1>
            <h2 className="my-4">Terms and Conditions</h2>
            <p>
              These Terms and Conditions of Service; the Service Level Agreement, the Acceptable Use Policy, and the Privacy Policy set out the terms and conditions that apply to Customer’s access to and use of the PacketFabric Services and forms an agreement (this “Agreement”) between PacketFabric, Inc. (“PacketFabric”) and testcompany ("Customer"). Each party represents and warrants that the person signing this Agreement has been duly authorized to execute on its behalf.
              <br />
              This Agreement is effective as of the date Customer clicks to accept the Agreement, or both PacketFabric and Customer sign an offline version of this Agreement. This Agreement will remain in effect until the later of the following events: (i) all Orders have been terminated or expired; or (ii) either Customer or PacketFabric provides written notice of termination. Capitalized terms are defined in Section 11 at the end of this document.
            </p>
          </div>

          <label for="age1">
            <input
              type="radio"
              checked={values.msaAccepted}
              onChange={handleChangeCheckbox('msaAccepted')}
              id="age1" name="age"
            />
            I accept the terms of the Master Services Agreement.
          </label>

          <label for="age2">
            <input
              type="radio"
              checked={values.msaNotAccepted}
              onChange={handleChangeCheckbox('msaNotAccepted')}
              id="age2" name="age"
            />
            I DO NOT accept the Master Services Agreement as is and would like to discuss with Sales or Legal.
          </label>

          <label for="age3">
            <input
              type="radio"
              checked={values.msaAlreadyAccepted}
              onChange={handleChangeCheckbox('msaAlreadyAccepted')}
              id="age3" name="age"
            />
            I have already signed a Master Services Agreement.
          </label>

          <div className="modal-link mb-4" onClick = {() => this.setState({modalIsOpen: true})}>Can I sign the MSA later?</div>

          <div className="back" onClick={this.back}>Previous Step</div>
          <button onClick={this.continue} style={{float: "right"}}>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <div className="back skip" onClick={this.continue}>Skip</div>


        </div>

      </div>

      {this.state.modalIsOpen === true ?
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>
          <div className="modal">
            <p>You can continue with the Registration Process without accepting the MSA, but wont be able to access the PacketFabric Portal until one has been signed electronically or manually. A copy of the MSA will be sent to you when registration is completed, a copy will also be placed in your documents folder in the PacketFabric portal. If you would like to speak to someone about the terms, email or call us at +1-844-475-8322</p>
            <div className="modal-close" onClick = {() => this.setState({modalIsOpen: false})}>
              <div className="modal-close-inner">x</div>
            </div>
          </div>
          <div className="modal-background"></div>
        </motion.div>
      :null
      }

      </motion.div>
    )
  }
}

export default MasterServiceAgreement;
