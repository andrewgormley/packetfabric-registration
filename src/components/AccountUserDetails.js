import React from 'react';
import { motion } from "framer-motion"

class AccountUserDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .2, ease: "easeInOut"}}>
      <div className="form-container px-5 px-md-0">

        <div className="form-container-inner">

          <div className="mb-5">
            <h1>Create account</h1>
            <p>Register your company and start using our services in seconds.</p>
          </div>

          <input
            className="col-sm-12 col-md-6 spacing-2"
            type="text"
            placeholder="First name"
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />

          <input
            className="col-sm-12 col-md-6"
            type="text"
            placeholder="Last Name"
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />

          <input
            className={"col-sm-12" + ((values.email && !values.email.includes('@')) || (values.email && !values.email.includes('.com')) ? ' error-input' : (values.email && values.email.includes('@')) || (values.email && values.email.includes('.com')) ? ' validate' : '')}
            type="email"
            placeholder="Email"
            onChange={handleChange('email')}
            defaultValue={values.email}
          />

          {(values.email && !values.email.includes('@')) || (values.email && !values.email.includes('.com')) ? <div className="error">Email address must contain '@' and '.com'</div> : null }

          <input
            className={"col-sm-12" + (values.password && values.password.length < 8 ? ' error-input' : values.password.length > 7 ? ' validate' : '')}
            type="password"
            placeholder="Password"
            onChange={handleChange('password')}
            defaultValue={values.password}
          />

          { values.password && values.password.length < 8 ? <div className="error">Password must be longer than 8 characters.</div> : null }

          <button
            disabled={!values.firstName || !values.lastName || !values.email || !values.email.includes('@') || !values.email.includes('.com') || !values.password || values.password.length < 8}
            onClick={this.continue}
            style={{width: "100%"}}>
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

        </div>
      </div>
      </motion.div>
    )
  }
}

export default AccountUserDetails;
