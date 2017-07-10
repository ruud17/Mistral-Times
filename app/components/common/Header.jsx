import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-default'>
      <ul className="nav navbar-nav">
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;
