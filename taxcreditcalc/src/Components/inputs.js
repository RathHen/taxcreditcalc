import React, { Component } from 'react'

export class inputs extends Component {

    render() {
        return (
                <div className="ui input">
                    <input type="number"  pattern="[0-9]*" placeholder="Search..."/> 
                </div>
            
        )
    }
}

export default inputs

