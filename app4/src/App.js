import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    const carsList= this.state.cars.map((car,index)=>{
      return <p key={index}> {car.make} {car.model} {car.year}</p>
    })
    return (
      <div className="App">
        <button onClick={()=>this.getCars()}>Get cars</button>
        {carsList}
      </div>
    );
  }
}

export default App;
