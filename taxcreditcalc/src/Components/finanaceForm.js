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
        console.log(this.state.monthlyWage);
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
              <button className="ui button" type="submit">Submit</button>
            </form>
          </React.Fragment>
        )
    }

    getFieldStyle = () => {
      return {
        width: "80%",
        left: "50%",
        margin: "auto",
      }
    }

    getFormStyle = () => {
      return {
        border: "solid #FF000",
        width: "80%",
        marginRgiht: "auto",
        marginLeft: "auto",
        textAlign: "center",
        padding: "10px",
      }
    }
}

export default finanaceForm