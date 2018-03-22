import React from 'react';

import BrideGroomSvg from '../../assets/svg/bridegroom.svg';

const NameSection = () => {
    return (
      <div className="content">
        <div className="names">
          <div className="bride">
              <h1>Sadhna</h1>
              <img src={BrideGroomSvg} />
          </div>
          <h3>&</h3>
          <div className="groom">
            <h1>Amit</h1>
            <div className="info">
              <h5>We are getting married</h5>
            </div>
          </div>
        </div>
      </div>
    )
}
export default NameSection;
