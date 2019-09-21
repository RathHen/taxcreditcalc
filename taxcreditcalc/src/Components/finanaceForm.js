import React, { Component } from 'react'

export class finanaceForm extends Component {
    state = {
        monthlyWage: 0,
        monthlyRent: 0
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.calculate(this.state.monthlyWage, this.state.monthlyRent)
    }

    render() {
        return (
         <form class="ui form" onSubmit={this.onSubmit}>
            <div class="field">
              <div class="six wide field">
                <label>Monthly Wage</label>
                <input type="number" name="wage" placeholder="Monthly Wage" value="this.state.monthlyWage"/>
              </div>
            </div>
            <div class="field">
              <div class="six wide field">
                <label>Mothly Rent</label>
                <input type="number" name="rent" placeholder="Monthly Rent" value="this.state.monthlyRent"/>
              </div>  
            </div>
            <button class="ui button" type="submit">Submit</button>
          </form>
        )
    }
}

export default finanaceForm