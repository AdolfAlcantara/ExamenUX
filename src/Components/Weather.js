import React, { Component } from 'react';
import axios from 'axios';

export class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: '',
      city: '',
      weather: []
    };
  }

  async obtenerClima(){
      await axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=ddbd76d2a9f0c6a6ed20e1fbe60c4593&u`)
      .then(wt =>{
          this.setState({weather : wt.data});
      }).catch(err =>{
          alert(err);
      });
      console.log(this.state.weather)
  }

  render() {
    return (
      <div>
        <h1>Hola</h1>
      </div>
    );
  }
}

export default Weather;