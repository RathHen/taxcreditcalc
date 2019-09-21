import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Resultant from './Components/resultant';




class App extends Component {
  state = {
    num: 0,
  };
  result = (wage, rent) => {
      console.log(wage);
      console.log(rent);
      this.state.num = parseInt(wage) + parseInt(rent);
      console.log(this.state.num);
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
