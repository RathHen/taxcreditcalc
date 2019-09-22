import React, { Component } from 'react'
import { thisExpression } from '@babel/types';
import PropTypes from 'prop-types';
import { SSL_OP_SINGLE_DH_USE } from 'constants';
import * as firebase from 'firebase';
import { Dropdown } from 'semantic-ui-react'


export class finanaceForm extends Component {
    state = {
        monthlyWage: 0,
        monthlyRent: 0,
        dependents: 0,
        filingJointly: "",
        usState: ""

    }
    

    countryOptions = () => [
      { key: 'te', value: 'te', text: 'Test Islands' },
      { key: 'af', value: 'af', text: 'Afghanistan' },
      { key: 'ax', value: 'ax', text: 'Aland Islands' }
    ]
  

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
    }

    componentDidMount() {
      const rootRef = firebase.database().ref();
      
    }

    handleDropDown = (e, { value }) => {
      this.setState({usState: value})
    }

  

    render() {
        return (
          <React.Fragment>  

            <font face="Times New Roman">
<br></br><br></br>
<center><h1>
  Housing Subsidy Calculator
  <br></br>
  </h1></center>
            <h2 style={{marginLeft: "5%",marginRight: "20%"}}> The issue:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}><font size="+1">The housing inequality crisis refers to the increasing disparity in the quality of housing in the U.S. Quality of housing includes multiple aspects, including crime rate, quality of
 local schools, the amenities and the amount of air pollution.</font></p>
<h2 style={{marginLeft: "5%",marginRight: "30%"}}>  The solution:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1"> Our team believes that an effective solution to this issue is subsidized 
housing. This solution involves the government providing rent supplements to impoverished households.
 To avoid potential misuses of state funding, the rent supplements should be given directly to landlord
 s. For instance, a person with an extensive history of drug abuse might spend rent supplements on dru
 gs, and giving rent supplements directly to the landlord prevents this from occurring.</font> </p>

<h2 style={{marginLeft: "5%",marginRight: "30%"}}>  How the housing subsidy calculator contributes to the solution:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1">  A key challenge in providing subsidies is determining the correct amount of subsidy to allocate to each household. To address this challenge, our team developed a housing subsidy calculator, which allows individuals to check the amount of subsidy that th
ey should receive to guarantee a reasonable level of housing quality.</font> </p>

<h2 style={{marginLeft: "5%",marginRight: "30%"}}>How the housing subsidy calculator works:</h2>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1">The calculator takes five inputs from the user:
  <ol>
<li>Monthly wage</li>
<li>Monthly rent</li>
<li>Zip code</li>
<li>Number of dependents</li>
<li>Marital status</li></ol>
Using the wage and rent, the calculator computes a ratio that represents the proportion of an individual’s income that’s spent on housing. This ratio is then compared with the “ideal” ratio of 1/3, and the difference between these two ratios suggests the amount of subsidy that’s required. </font>
</p>

<br></br><br></br>
<center><h1>Instructions:</h1></center><br></br>
<p style={{marginLeft: "5%",marginRight: "30%"}}>  <font size="+1"><ol>
<li>Type in your pre-tax monthly wage in the first input box below. </li>
[note: your monthly wage must be below $4,000 to qualify for housing subsidy]<br></br>
<br></br>
<li>Type in your monthly rent in the second box.</li>
<br></br>
<li>Type in your zip code; this will be used to factor the crime rate and mental health index into our calculation.</li>
<br></br>
<li>Type in the number of your dependents, including the number of your children and parents that you need to provide financial support for.</li>
<br></br>
<li>Select your marital status, click on the “submit” button if you’re unmarried.</li>
<br></br>
<li>If you’re married or divorced, enter the income of or financial support that you receive from the other person.</li>
</ol><br></br>
See the formula that this calculator uses here.</font>
</p></font>
<br></br><br></br><br></br>

            <form className="ui form" onSubmit={this.onSubmit} style={this.getFormStyle()}>
            <h1 style={{color: "white", marginLeft: "23%"}}>The Housing Subsidy Calculator</h1>
              <div className="field" >
                <div style={this.getFieldStyle()}>
                  <label style={{color: "white"}}>Monthly Wage</label>
                  <input type="number" name="wage" placeholder="Enter Monthly Wage" onChange={this.setWage}/>
                </div>
              </div>
              <div className="field">
                <div style={this.getFieldStyle()}>
                  <label style={{color: "white"}}>Monthly Rent</label>
                  <input type="number" name="rent" placeholder="Enter Monthly Rent" onChange={this.setRent}/>
                </div>  
              </div>



            <div className="inline fields" >
                <h3 style={this.styles()}> Filing As: </h3>
                <label style={{color: "white", fontSize: "17px"}}><input type="radio" name="value" onChange={this.handleCheckClick} value="yes" checked={this.state.filingJointly === "yes"}/> Jointly </label>
                <label style={{color: "white", fontSize: "17px"}}><input type="radio" name="value" onChange={this.handleCheckClick} value="no" checked={this.state.filingJointly === "no"}/>  Single</label>
            </div>




              <div className="field">
                <div style={this.getFieldStyle()}>
                  <label style={{color: "white", }}>Dependents</label>
                  <input type="number" name="rent" placeholder="Enter Dependends" onChange={this.setDependents}/>
                </div>  
              </div>
              <div style={this.getButtonStyle()}>
                <button className="ui button" type="submit" >Submit</button>
              </div>
       
          


 
  <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={this.countryOptions()}
    onChange={this.handleDropDown}
    value={this.state.usState}
  />


  
          



  
            </form>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            
          </React.Fragment>
        )
    }

   styles = () => {
      return {
          width: 'auto',
          height: 'auto',
          display: 'flex',
          flexWrap: 'nowrap',
          flexDirection: 'row',
          margin: '5px',
          color: 'white',
          marginLeft: "35%"
      }
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
        background: "#B0D0D3",
        border: "solid",
        borderWidth: "8px",
        borderRadius: "10px",
        borderColor: "#F4AC45"
      }
    }
}

export default finanaceForm