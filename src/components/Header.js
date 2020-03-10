import React from 'react';
import logo from '../assets/img/packetfabric-logo.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <a href="https://www.packetfabric.com/">
          <img src={logo} alt="Logo" />
        </a>
        <div className="help">Having trouble? <a href="https://www.packetfabric.com/" target="_blank">Get Help</a></div>
      </header>
    )
  }
}

export default Header;
