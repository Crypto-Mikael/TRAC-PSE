import React from 'react';
import { LogoTractian } from '../images'
import '../styles/Header.css';

function Header() {
  return(
    <header>
      <img className="tractian-logo" alt="Tractian Logo" src={ LogoTractian } />
    </header>
  );
}

export default Header;