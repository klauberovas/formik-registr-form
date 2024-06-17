import { Field } from 'formik'

const Newsletter = () => {
  return (
    <div className="form-newsletter">
      <Field name="newsletter" type="checkbox" className="margin--right" />
      <label htmlFor="newsletter">
        Would you like to subscribe to the newsletter?
      </label>
    </div>
  )
}

export default Newsletter
