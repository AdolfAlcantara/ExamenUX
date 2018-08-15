import React, { Component } from 'react';
import Form from './Components/Form';
import Weather from './Components/Weather';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Form cargarClima={this.obtenerClima}/>
        <Weather/>
      </div>
    );
  }
}

export default App;
