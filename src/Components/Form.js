import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
        super(props);
    }
        

  render() {
    return (
      <div>
        <form onSubmit ={this.props.cargarClima}>
            <label>
                Ciudad:
            <input
            type="text"
            name="city"
            />
            </label>
            <label>
                Pais:
            <input
            type="text"
            name="country"
            />
            </label>
            <button> Obtener Clima </button>
        </form>
      </div>
    );
  }
}

export default Form;