import React, { Component } from 'react'
import { thisExpression } from '@babel/types';
import PropTypes from 'prop-types';


export class finanaceForm extends Component {
    state = {
        monthlyWage: 0,
        monthlyRent: 0 
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.result.bind(this.state.monthlyWage,this.state.monthlyRent);
        this.props.result(this.state.monthlyWage, this.state.monthlyRent);
    }

    setWage = (e) => this.setState({monthlyWage: e.target.value})
    setRent = (e) => this.setState({monthlyRent: e.target.value})


    render() {
        return (
          <React.Fragment>    
            <form className="ui form" onSubmit={this.onSubmit} style={this.getFormStyle()}>
              <div className="field" >
                <div style={this.getFieldStyle()}>
                  <label>Monthly Wage</label>
                  <input type="number" name="wage" placeholder="Monthly Wage" onChange={this.setWage}/>
                </div>
              </div>
              <div className="field">
                <div style={this.getFieldStyle()}>
                  <label>Mothly Rent</label>
                  <input type="number" name="rent" placeholder="Monthly Rent" onChange={this.setRent}/>
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