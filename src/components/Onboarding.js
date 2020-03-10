import React from 'react';

function Onboarding() {
  return (
    <div className="onboarding d-none d-md-block">
      <ul>

        <li>
          <div className="icon icon-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2>The capacity you need, on demand</h2>
          <p>Our platform scales effortlessly as your connectivity requirements change.</p>
        </li>

        <li>
          <div className="icon icon-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2>Transparent pricing, flexible service terms</h2>
          <p>All our services are available on month-to-month terms, with discounted rates for contracts of one year or longer.</p>
        </li>

        <li>
          <div className="icon icon-info">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2>An easy to manage private network</h2>
          <p>It’s your network; you should be in control. With our user-friendly web portal or API.</p>
        </li>

      </ul>
    </div>
  );
}

export default Onboarding;
