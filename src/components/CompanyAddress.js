import React from 'react';
import { motion } from "framer-motion"

class CompanyAddress extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <motion.div initial={{opacity: 0, x:100}} animate={{opacity: 1, x:0}} exit={{opacity: 0, x:-100}} transition={{duration: .2, ease: "easeInOut"}}>
      <div className="form-container px-5 px-md-0">

        <div className="form-container-inner">

          <div className="mb-5">
            <h1>Company Address</h1>
            <p>Search via your postal code or enter your address manually.</p>
          </div>

          <div>
            <input
            className="col-sm-12"
            type="text"
            placeholder="Address 1"
            onChange={handleChange('companyAddressLine1')}
            defaultValue={values.companyAddressLine1}
          />
          <input
            className="col-sm-12"
            type="text"
            placeholder="Address 2"
            onChange={handleChange('companyAddressLine2')}
            defaultValue={values.companyAddressLine2}
          />
          <input
            className="col-sm-12 col-md-4"
            type="text"
            placeholder="City"
            onChange={handleChange('companyAddressCity')}
            defaultValue={values.companyAddressCity}
          />
          <input
            className="col-sm-12 col-md-4 spacing-3"
            type="text"
            placeholder="State"
            onChange={handleChange('companyAddressState')}
            defaultValue={values.companyAddressState}
          />
          <input
            className="col-sm-12 col-md-4"
            type="text"
            placeholder="Post Code"
            onChange={handleChange('companyAddressPost')}
            defaultValue={values.companyAddressPost}
          />
          <select className="col-sm-12" onChange={handleChange('companyAddressCountry')} defaultValue={values.companyAddressCountry}>
            <option selected disabled value="">Country</option>
            <option value="United States Of America">United States Of America (USA)</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
          </div>

          <div className="back" onClick={this.back}>Previous Step</div>

          <button disabled={!values.companyAddressLine1 || !values.companyAddressCity || !values.companyAddressState || !values.companyAddressPost || !values.companyAddressCountry}
            onClick={this.continue}
            style={{float: "right"}}>
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

        </div>

      </div>
      </motion.div>
    )
  }
}

export default CompanyAddress;
