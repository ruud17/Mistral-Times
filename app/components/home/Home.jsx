import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Praise or criticism someone</h1>
                <h3>Here is the best place for it</h3>
                <hr className="intro-divider"/>
                <ul className="list-inline intro-social-buttons">
                  <li>
                    <Link to="/create" className="btn btn-default btn-lg">
                      <i className="fa fa-smile-o fa-fw"></i>
                      <span className="network-name">Create a praise</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/create" className="btn btn-default btn-lg">
                      <i className="fa fa-frown-o fa-fw"></i>
                      <span className="network-name">Create a criticism</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
