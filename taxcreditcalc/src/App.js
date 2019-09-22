import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Resultant from './Components/resultant';




class App extends Component {
  state = {
    taxCredit: 0,
  };
  result = (wage, rent) => {
      this.state.taxCredit = parseInt(wage) + parseInt(rent);
  };
  
  

  render() {
    return (
      
      <div>
        <Resultant/>
      </div>
    )
  }
}

export default App;
