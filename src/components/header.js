import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/"><button>Ana Sayfa</button></Link>
        <Link to="/about"><button>Hakkımda</button></Link>
        <Link to="/contact"><button>İletişim</button></Link>
      </nav>
    </header>
  );
}

export default Header;
