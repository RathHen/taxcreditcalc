import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'


const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props
  return (
    <form onSubmit={handleSubmit(validate)}>
      {/* <Field name="email" type="email" component={renderField} label="Email" /> */}
      <div>
        <label>Do you own your house?</label>
        <div>
          <label>
            <Field name="homeOwnership" component="input" type="radio" value="Yes" />{' '}
            Yes
          </label>
          <label>
            <Field name="homeOwnership" component="input" type="radio" value="No" />{' '}
            No
          </label>
          <Field name="homeOwnership" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
  })(WizardFormSecondPage)
  