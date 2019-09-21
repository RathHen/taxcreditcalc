import React, { Component } from 'react'
import FinanaceForm from './finanaceForm';
import { PARENT_MESSAGE_CLIENT_ERROR } from 'jest-worker/build/types';


export class resultants extends Component {
    state = {
        num: 0,
        calculated: 0,
        dependent: 0
      };
      calculate = (wage,rent) => {
        var w = parseFloat(wage);
        var r = parseFloat(rent);
        var ratio = r/w;
        if(ratio>1.0/3){
          var annual = (ratio*w - w*(1.0/3)) * 12;
          var dampen = annual*3.572/100000;
          var temp = (-Math.atan(dampen-1)) + 1.2;
          return Math.round((temp*annual/1.985)*100)/100;
        }
    };
      result = (wage, rent) => {
          this.setState({num: this.calculate(wage,rent)});
      };

      dependents = (dependentsNum) => {
        this.setState({dependent: dependentsNum});
      };
    
    
      render() {
        if(this.state.num !== 0) {
            return (
                <div>
                  <h3>{this.state.num}</h3>
                  <h3> Number of Dependents: {this.state.dependent}</h3>

                </div>
            )
        }
        return (
          
          <div>
            <React.Fragment>  
              <FinanaceForm result={this.result} dependent={this.dependents}  />
            </React.Fragment>

          </div>

        )
      }
  
}

export default resultants
