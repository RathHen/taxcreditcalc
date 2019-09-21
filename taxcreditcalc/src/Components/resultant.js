import React, { Component } from 'react'
import FinanaceForm from './finanaceForm';
import { PARENT_MESSAGE_CLIENT_ERROR } from 'jest-worker/build/types';


export class resultants extends Component {
    state = {
        num: 0,
        calculated: 0,
      };
      calculate = (wage,rent) => {
        var ratio = ParseFloat(wage)/parseInt(rent);
        if(ratio>1.0/3){
          return ratio*parseFloat(wage) - parseFloat(wage)*(1.0/3);
        }
    };
      result = (wage, rent) => {
          this.setState({num: this.calculate(wage,rent)});
      };
    

      

      
    
      render() {
        if(this.state.num != 0) {
            return (
                <div>
                  <h3>{this.state.num}</h3>
                </div>
            )
        }
        return (
          
          <div>
            <React.Fragment>  
              <FinanaceForm result={this.result} num={this.state.num}/>
            </React.Fragment>

          </div>

        )
      }
}

export default resultants
