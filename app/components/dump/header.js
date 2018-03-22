import React from 'react';

import God from '../../assets/svg/god.svg';

const Header = () => {
    return (
      <header>
        <div className="logo">
          <img src={God} />
        </div>
      </header>
    )
}
export default Header;
