import React, { Component } from 'react'

export class inputs extends Component {

    render() {
        return (
                <div className="ui input">
                    <input type="number" placeholder="Enter Monthly Wage"/> 
                    <input type="number" placeholder="Enter Monthly Rent"/> 
                </div>
            
        )
    }
}

export default inputs
