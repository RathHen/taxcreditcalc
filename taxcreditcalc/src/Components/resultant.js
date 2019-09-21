import React, { Component } from 'react'
import FinanaceForm from './finanaceForm';
import { PARENT_MESSAGE_CLIENT_ERROR } from 'jest-worker/build/types';


export class resultants extends Component {
    state = {
        num: 0,
      };

      result = (wage, rent) => {
          this.setState({num: parseInt(wage)+parseInt(rent)});
      };
      

      
    
      render() {
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
