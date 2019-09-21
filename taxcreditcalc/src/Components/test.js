import React from 'react'
import {getFormValues} from 'redux-form';
import { connect } from 'react-redux';

const test = (props) => {
        
    console.log(props);
    return(
    <div><p>Hello </p>
    </div>
    )

}

function mapStateToProps(state) {
    return {
        formStates: getFormValues('wizard')(state)
    }
}

export default connect(mapStateToProps)(test)

