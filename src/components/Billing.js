import React from 'react';
import { motion } from "framer-motion"

class Billing extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange, handleChangeCheckbox } = this.props;

    return (
      <motion.div initial={{opacity: 0, x:100}} animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-100}} transition={{duration: .2, ease: "easeInOut"}}>
      <div className="form-container px-5 px-md-0">

        <div className="form-container-inner">

          <div className="mb-5">
            <h1>Billing</h1>
            <p>Complete your billing information to start using our services immediately.</p>
          </div>

          <input
            className="col-sm-12 col-md-6 spacing-2"
            type="text"
            placeholder="First name"
            onChange={handleChange('billingFirstName')}
            defaultValue={values.billingFirstName}
          />
          <input
            className="col-sm-12 col-md-6"
            type="text"
            placeholder="Last Name"
            onChange={handleChange('billingLastName')}
            defaultValue={values.billingLastName}
          />
          <input
            className="col-sm-12"
            type="number"
            placeholder="Phone Number"
            onChange={handleChange('billingPhone')}
            defaultValue={values.billingPhone}
          />
          <input
            className="col-sm-12"
            type="email"
            placeholder="Email"
            onChange={handleChange('billingEmail')}
            defaultValue={values.billingEmail}
          />

          <label className="col-sm-12" style={{paddingLeft: "0"}}>
            <input
              type="checkbox"
              checked={values.billingAddressSame}
              onChange={handleChangeCheckbox('billingAddressSame')}
            />
            Same as company address
          </label>

          {values.billingAddressSame === false ?
            <div>
            <input
              className="col-sm-12"
              type="text"
              placeholder="Address 1"
              onChange={handleChange('billingAddressLine1')}
              defaultValue={values.billingAddressLine1}
            />
            <input
              className="col-sm-12"
              type="text"
              placeholder="Address 2"
              onChange={handleChange('billingAddressLine2')}
              defaultValue={values.billingAddressLine2}
            />
            <input
              className="col-sm-12 col-md-4"
              type="text"
              placeholder="City"
              onChange={handleChange('billingAddressCity')}
              defaultValue={values.billingAddressCity}
            />
            <input
              className="col-sm-12 col-md-4 spacing-3"
              type="text"
              placeholder="State"
              onChange={handleChange('billingAddressState')}
              defaultValue={values.billingAddressState}
            />
            <input
              className="col-sm-12 col-md-4"
              type="text"
              placeholder="Post Code"
              onChange={handleChange('billingAddressPost')}
              defaultValue={values.billingAddressPost}
            />
            <select className="col-sm-12" onChange={handleChange('billingAddressCountry')} defaultValue={values.billingAddressCountry}>
              <option selected disabled value="">Country</option>
              <option value="United States Of America">United States Of America (USA)</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            </div>
            :null
          }

          <div className="back" onClick={this.back}>Previous Step</div>
          <button
            onClick={this.continue}
            style={{float: "right"}}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
          <div className="back skip" onClick={this.continue}>Skip</div>


        </div>

      </div>
      </motion.div>
    )
  }
}

export default Billing;
