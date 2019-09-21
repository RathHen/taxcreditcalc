import React, { Component } from 'react'
import FinanaceForm from './Components/finanaceForm';


export class resultants extends Component {
    state = {
        num: 0,
      };
      result = (wage, rent) => {
          this.state.num = parseInt(wage) + parseInt(rent);
      };
      
    
      render() {
        return (
    
          <div>
            <FinanaceForm result={this.result} num={this.state.num}/>
          
          <p>
            Hello
          </p>
          </div>

        )
      }
}

export default reusltants
