import React from 'react';

import Flower from '../../assets/svg/flower.svg';

const BorderDesign = () => {
    return (
      <div className="border-design">
        <div className="design top-left">
          <img src={Flower} />
        </div>
        <div className="design top-right">
          <img src={Flower} />
        </div>
        <div className="design bottom-left">
          <img src={Flower} />
        </div>
        <div className="design bottom-right">
          <img src={Flower} />
        </div>
      </div>
    )
}
export default BorderDesign;
