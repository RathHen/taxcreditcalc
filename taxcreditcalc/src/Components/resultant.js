import React, { Component } from 'react'
import FinanaceForm from './finanaceForm';
import { PARENT_MESSAGE_CLIENT_ERROR } from 'jest-worker/build/types';
import Popup from "reactjs-popup";


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
          this.setState({calculated: lumpTaxCredit})
          return  lumpTaxCredit;
        }
    };
      result = (wage, rent) => {
          this.setState({num: this.calculate(wage,rent)});
      };

  PopupExample = () => (
    <Popup trigger={<button className="button"> Methodolgy </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Methodolgy </div>
        <div className="content">
          {" "}
          The methodology behind the calculator is a formula combined with "adjustments" in order to best help the housing inequality crisis.  Monthly Age and Rent are entered. This ratio
          between this is then used against the 1/3 rule of thumb for renting . Note: Ratios above 1/3 or Income above 100,000 do not qualify. The difference of ratio (Ratio - 1/3) is then multiplied with annual income to get Lump Sum.
          This lump sum, however, faces a high wage dampener. Formula = (Annnual Wage/ 100,000) * 3.57 to get X which is placed into -tan^(-1)(x-1.) +1.2 = y. Then, (Y/1.985) * annual lump subsidy to get the result. The reason this 
          certain formula is done rather than just a linear model is to address the housing inequality. Poor people are disproportionately affected by it, and so this function helps represent this disproportionality.

          <br />
          <br></br>
          At this state, 3 more of the given "adjustments" are done. 1. If filing jointly, the lump sum is then only worth 40% to take in account dual income. 2. For each dependent, the lump sum
          increases by 3 of the lump sum's value. The percentage is the result of our data analysis showing that there is a correlation between higher household numbers and housing inequality. 
          3. Creating a database with data of crime statistics gathered from the FBI 2017 Uniform crime reports, we derive the violent crimes per capita and multiply this percentage by 10. Varying based on which city 
          the user chooses, a higher percentage tells us that the location is not as safe, thus the lump sum is then increased the result of the lump sum multiplied with the percentage. 
          
        </div>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            Close
          </button>
        </div>
    )}
  </Popup>
);

// .modal {
//   font-size: 12px;
// }
// .modal > .header {
//   width: 100%;
//   border-bottom: 1px solid gray;
//   font-size: 18px;
//   text-align: center;
//   padding: 5px;
// }
// .modal > .content {
//   width: 100%;
//   padding: 10px 5px;
// }
// .modal > .actions {
//   width: 100%;
//   padding: 10px 5px;
//   margin: auto;
//   text-align: center;
// }
// .modal > .close {
//   cursor: pointer;
//   position: absolute;
//   display: block;
//   padding: 2px 5px;
//   line-height: 20px;
//   right: -10px;
//   top: -10px;
//   font-size: 24px;
//   background: #ffffff;
//   border-radius: 18px;
//   border: 1px solid #cfcece;
// }


    
    
      render() {
        if(this.state.num !== 0) {
            return (
                <div style={this.getPStyle()}>
                  <h2>Annual Housing Subsity: ${Math.round(this.state.calculated*100)/100}</h2>
                  <h2>Monthly Housing Subsity: ${Math.round(this.state.calculated/12*100)/100}</h2>
                  <h3>Violent Crimes per capita: {this.state.violent/100000}</h3>

                  <h3> Number of Dependents: {this.state.dependent}</h3>
                {this.PopupExample()}
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

      getPStyle = () => {
        return {
          marginRight: "auto",
          marginLeft: "auto",
          padding: "10px",
          maxWidth: "60%",
          background: "#B0D0D3",
          border: "solid",
          borderWidth: "8px",
          borderRadius: "10px",
          borderColor: "#1C3144",
          textAlign: "center"
        }
      }
  
}

export default resultants
