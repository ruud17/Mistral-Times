import React from 'react';
import Header from './common/Header';
import Routes from '../routes';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes/>
      </div>
    )
  }
}

export default App;
