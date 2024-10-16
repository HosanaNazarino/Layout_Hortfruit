import React from 'react';
import banner_frete_gratis from './banner_frete_gratis.png';

const Banner_Frete_Gratis = () => {
  return (
    <div>
       <img src={banner_frete_gratis} alt="Frete Grátis" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export { Banner_Frete_Gratis };
