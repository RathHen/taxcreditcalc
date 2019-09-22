import React, { Component } from 'react'
import { thisExpression } from '@babel/types';
import PropTypes from 'prop-types';
import { SSL_OP_SINGLE_DH_USE } from 'constants';


export class finanaceForm extends Component {
    state = {
        monthlyWage: 0,
        monthlyRent: 0,
        dependents: 0,
        filingJointly: ""
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.result(this.state.monthlyWage, this.state.monthlyRent);
        this.props.dependent(this.state.dependents);
        // this.props.filing(this.state.filingAs);
    }

    setWage = (e) => this.setState({monthlyWage: e.target.value})
    setRent = (e) => this.setState({monthlyRent: e.target.value})
    setDependents = (e) => this.setState({dependents: e.target.value})

    handleCheckClick = (e) => {
      this.setState({filingJointly: e.target.value})
      console.log(this.state.filingJointly)
    }

    render() {
        return (
          <React.Fragment>  

            <h2>The issue:</h2>
<p>The housing inequality crisis refers to the increasing disparity in the quality of housing in the U.S. Quality of housing includes multiple aspects, including crime rate, quality of local schools, the amenities and the amount of air pollution.</p>

<h2>The solution:</h2>
<p>Our team believes that an effective solution to this issue is subsidized housing. This solution involves the government providing rent supplements to impoverished households. To avoid potential misuses of state funding, the rent supplements should be given directly to landlords. For instance, a person with an extensive history of drug abuse might spend rent supplements on drugs, and giving rent supplements directly to the landlord prevents this from occurring. </p>

<h2>How the housing subsidy calculator contributes to the solution:</h2>
<p>A key challenge in providing subsidies is determining the correct amount of subsidy to allocate to each household. To address this challenge, our team developed a housing subsidy calculator, which allows individuals to check the amount of subsidy that they should receive to guarantee a reasonable level of housing quality. </p>

<h2>How the housing subsidy calculator works:</h2>
<p>The calculator takes five inputs from the user:
<li>1.	Monthly wage</li>
<li>2.	Monthly rent</li>
<li>3.	Zip code</li>
<li>4.	Number of dependents</li>
<li>5.	Marital status</li>
Using the wage and rent, the calculator computes a ratio that represents the proportion of an individual’s income that’s spent on housing. This ratio is then compared with the “ideal” ratio of 1/3, and the difference between these two ratios suggests the amount of subsidy that’s required. 
</p>


<h1>Instructions:</h1>
<p>
<li>1.	Type in your pre-tax monthly wage in the first input box below </li>
[note: your monthly wage must be below $4,000 to qualify for housing subsidy]

<li>2.	Type in your monthly rent in the second box</li>

<li>3.	Type in your zip code; this will be used to factor the crime rate and mental health index into our calculation</li>

<li>4.	Type in the number of your dependents, including the number of your children and parents that you need to provide financial support for</li>

<li>5.	Select your marital status, click on the “submit” button if you’re unmarried</li>

<li>6.	If you’re married or divorced, enter the income of or financial support that you receive from the other person</li>

See the formula that this calculator uses here.
</p>

            <form className="ui form" onSubmit={this.onSubmit} style={this.getFormStyle()}>
              <div className="field" >
                <div style={this.getFieldStyle()}>
                  <label>Monthly Wage</label>
                  <input type="number" name="wage" placeholder="Enter Monthly Wage" onChange={this.setWage}/>
                </div>
              </div>
              <div className="field">
                <div style={this.getFieldStyle()}>
                  <label>Monthly Rent</label>
                  <input type="number" name="rent" placeholder="Enter Monthly Rent" onChange={this.setRent}/>
                </div>  
              </div>



            <div className="inline fields">
                <label><input type="radio" name="value" onChange={this.handleCheckClick} value="yes" checked={this.state.filingJointly === "yes"}/>Jointly</label>
                <label><input type="radio" name="value" onChange={this.handleCheckClick} value="no" checked={this.state.filingJointly === "no"}/>Single</label>
            </div>




              <div className="field">
                <div style={this.getFieldStyle()}>
                  <label>Dependents</label>
                  <input type="number" name="rent" placeholder="Enter Dependends" onChange={this.setDependents}/>
                </div>  
              </div>
              <div style={this.getButtonStyle()}>
                <button className="ui button" type="submit" >Submit</button>
              </div>
              <div>
              <h1>The housing subsidy calculator:</h1>




              </div>
            </form>
          </React.Fragment>
        )
    }

    getButtonStyle = () => {
      return {
        textAlign: "center"
      }
    }

    getFieldStyle = () => {
      return {
        width: "80%",
        left: "50%",
        margin: "auto",
        color: "#E1E1E1"
      }
    }

    getFormStyle = () => {
      return {
        marginRight: "auto",
        marginLeft: "auto",
        padding: "10px",
        maxWidth: "60%",
        background: "#93B5C6",
        border: "solid",
        borderWidth: "8px",
        borderRadius: "10px",
        borderColor: "#F0CF65"
      }
    }
}

export default finanaceForm