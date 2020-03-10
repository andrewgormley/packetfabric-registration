import React from 'react';
import Onboarding from './Onboarding';
import Navigation from './Navigation';
import AccountUserDetails from './AccountUserDetails';
import CompanyInformation from './CompanyInformation';
import CompanyAddress from './CompanyAddress';
import Billing from './Billing';
import MasterServiceAgreement from './MasterServiceAgreement';
import Confirm from './Confirm';
import Success from './Success';

class RegistrationForm extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    companyType: '',
    companyCountry: '',
    companyState: '',
    companyAddressLine1: '',
    companyAddressLine2: '',
    companyAddressCity: '',
    companyAddressState: '',
    companyAddressPost: '',
    companyAddressCountry: '',
    billingFirstName:'',
    billingLastName:'',
    billingPhone:'',
    billingEmail:'',
    billingAddressSame: true,
    billingAddressLine1: '',
    billingAddressLine2: '',
    billingAddressCity: '',
    billingAddressState: '',
    billingAddressPost: '',
    billingAddressCountry: '',
    msaAccepted: false,
    msaNotAccepted: false,
    msaAlreadyAccepted: false,
    acceptPrivacyPolicy: false,
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  handleChangeCheckbox = input => e => {
    this.setState({[input]: !this.state[input]})
  }

  renderForms(){
    const { step } = this.state;

    const {
      firstName,
      lastName,
      email,
      password,
      companyName,
      companyType,
      companyCountry,
      companyState,
      billingFirstName,
      billingLastName,
      billingEmail,
      billingPhone,
      billingAddressSame,
      billingAddressLine1,
      billingAddressLine2,
      billingAddressCity,
      billingAddressState,
      billingAddressPost,
      billingAddressCountry,
      acceptPrivacyPolicy,
      companyAddressLine1,
      companyAddressLine2,
      companyAddressCity,
      companyAddressState,
      companyAddressPost,
      companyAddressCountry,
      msaAccepted,
      msaNotAccepted,
      msaAlreadyAccepted,
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      password,
      companyName,
      companyType,
      companyCountry,
      companyState,
      billingFirstName,
      billingLastName,
      billingEmail,
      billingPhone,
      billingAddressSame,
      billingAddressLine1,
      billingAddressLine2,
      billingAddressCity,
      billingAddressState,
      billingAddressPost,
      billingAddressCountry,
      acceptPrivacyPolicy,
      companyAddressLine1,
      companyAddressLine2,
      companyAddressCity,
      companyAddressState,
      companyAddressPost,
      companyAddressCountry,
      msaAccepted,
      msaNotAccepted,
      msaAlreadyAccepted,
    }

    switch (step) {
      case 1:
        return (
          <AccountUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 2:
        return (
          <CompanyInformation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <CompanyAddress
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <Billing
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChangeCheckbox={this.handleChangeCheckbox}
            values={values}
          />
        )
      case 5:
        return (
          <MasterServiceAgreement
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleChangeCheckbox={this.handleChangeCheckbox}
            values={values}
          />
        )
      case 6:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChangeCheckbox={this.handleChangeCheckbox}
            values={values}
          />
        )
      case 7:
        return (
          <Success/>
        )
    }
  }

  render() {
    return (
      <div>

        { this.state.step === 1 ? <Onboarding/> : null }

        { this.state.step > 1 ? <Navigation step={this.state.step}/> :null }

        { this.renderForms() }

      </div>
    )
  }
}

export default RegistrationForm;
