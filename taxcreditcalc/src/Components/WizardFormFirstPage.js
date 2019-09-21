import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderfield'

const WizardFormFirstPage = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="income"
        type="number"
        component={renderField}
        label="Enter Monthly Income"
      />
      <Field
        name="rent"
        type="number"
        component={renderField}
        label="Enter Monthly Rent"
      />
      <div>
        <button type="submit" className="next">
          Next
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'wizard', // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormFirstPage)