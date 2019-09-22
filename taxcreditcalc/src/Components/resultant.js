import React, { Component } from 'react'
import FinanaceForm from './finanaceForm';
import { PARENT_MESSAGE_CLIENT_ERROR } from 'jest-worker/build/types';


export class resultants extends Component {
    state = {
        num: 0,
        calculated: 0,
        dependent: 0,
        filingAs: ' ',
        population: 0.0,
        violent: 0.0,
        wage: 0.0,
        rent: 0.0,
      }

      chainCall = (dependentsNum,filingAns,v,p,wage,rent)  => {
        this.setState(
        {
          dependent: dependentsNum,
          filingAs: filingAns,
          violent: v,
          population: p,
          wage: wage,
          rent: rent
        }, function() {console.log("setState completed", this.state)})
      }

      componentDidUpdate(props) {

        if(this.state.num ===0) {
        this.result(this.state.wage,this.state.rent)
        }
      }

      
      calculate = (wage,rent) => {
        var w = parseFloat(wage);
        var r = parseFloat(rent);
        var ratio = r/w;
        if(ratio>1.0/3){
          var annual = (ratio*w - w*(1.0/3)) * 12;
          var dampen = annual*3.572/100000;
          var temp = (-Math.atan(dampen-1)) + 1.2;
          var lumpTaxCredit = Math.round((temp*annual/1.985)*100)/100;
          var vioPerCapita = (this.state.violent/this.state.population);
        
          
          //Apply Crime Ratio Adjustment
          lumpTaxCredit += Math.round((lumpTaxCredit * (vioPerCapita*10))*100)/100;
        

          //Apply Dependent Ratio 
          lumpTaxCredit += Math.round((this.state.dependent * .03)*100)/100; 
       

          //Apply Jointly or Single
          if (this.state.filingAs === 'yes'){
            lumpTaxCredit = Math.round((lumpTaxCredit * .4)*100)/100;
          } 
          
          return lumpTaxCredit;
        }
    };
      result = (wage, rent) => {
          this.setState({num: this.calculate(wage,rent)});
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
              <FinanaceForm chainCall={this.chainCall} />
            </React.Fragment>

          </div>

        )
      }
  
}

export default resultants
