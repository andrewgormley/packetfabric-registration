import React from 'react';
import { motion } from "framer-motion"

class CompanyInformation extends React.Component {
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
            <h1>Company Information</h1>
            <p>This information ensures that we can provide you with the best possible experience.</p>
          </div>

          <input
            className="col-sm-12"
            type="text"
            placeholder="Company Name"
            onChange={handleChange('companyName')}
            defaultValue={values.companyName}
          />

          <select className="col-sm-12" onChange={handleChange('companyType')} defaultValue={values.companyType}>
            <option selected disabled value="">Company Type</option>
            <option value="Corporation">Corporation</option>
            <option value="General Partnership">General Partnership</option>
            <option value="Limited Liability Company">Limited Liability Company</option>
            <option value="Limited Liability Limited Partnership">Limited Liability Limited Partnership</option>
            <option value="Limited Liability Partnership">Limited Liability Partnership</option>
            <option value="Limited Partnership">Limited Partnership</option>
            <option value="Professional Limited Liability Company">Professional Limited Liability Company</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
          </select>

          <select className="col-sm-12" onChange={handleChange('companyCountry')} defaultValue={values.companyCountry}>
            <option selected disabled value="">Business Registration Country</option>
            <option value="United States Of America">United States Of America (USA)</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>

          {values.companyCountry === 'United States Of America' ?
            <select className="col-sm-12" onChange={handleChange('companyState')} defaultValue={values.companyState}>
              <option selected disabled value="">Business Registration State</option>
              <option value="CA">CA</option>
              <option value="NY">NY</option>
            </select>
            :null
          }

          <button disabled={!values.companyName || !values.companyType || !values.companyCountry || (values.companyCountry === 'United States Of America' && !values.companyState)}
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

export default CompanyInformation;
