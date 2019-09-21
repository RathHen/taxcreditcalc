import React, { Component } from 'react'
import { thisExpression } from '@babel/types';
import PropTypes from 'prop-types';
import { SSL_OP_SINGLE_DH_USE } from 'constants';


export class finanaceForm extends Component {
    state = {
        monthlyWage: 0,
        monthlyRent: 0,
        dependents: 0,
        filingJointly: true
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
      this.setState({filingJointly: !this.state.filingJointly})
      console.log(this.state.filingJointly)
    }

    render() {
        return (
          <React.Fragment>    
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
                <label>Filing As</label>
                <div className="field">
                  <div className="ui radio checkbox">
                  <label>Jointly
                    <input type="radio" name="jointly" onChange={this.handleCheckClick} checked={true} className="hidden"/>
                  </label>
                  </div>
                </div>
            <div className="field">
              <div className="ui radio checkbox">
              <label>Single
                <input type="radio" name="single" value="single" onChange={this.handleCheckClick} className="hidden"/>
                </label>
                  </div>
                  </div>
      
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