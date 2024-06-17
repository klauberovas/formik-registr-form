import { Field } from 'formik'

const CheckboxAgree = () => {
  return (
    <div className="form-checkbox">
      <Field name="agree" type="checkbox" className="margin--right" />
      <label htmlFor="agree">*Consent to the processing of personal data</label>
    </div>
  )
}

export default CheckboxAgree
