import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand topnav" href="#">Mistral Hotline</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
