import React, { Component } from 'react'

export class finanaceForm extends Component {

    render() {
        return (
            <form class="ui form">
            <div class="field">
              <div class="six wide field">
                <label>Monthly Wage</label>
                <input type="number" name="wage" placeholder="Monthly Wage"/>
              </div>
            </div>
            <div class="field">
              <div class="six wide field">
                <label>Mothly Rent</label>
                <input type="number" name="rent" placeholder="Monthly Rent"/>
              </div>  
            </div>
            <button class="ui button" type="submit">Submit</button>
          </form>
        )
    }
}

export default finanaceForm