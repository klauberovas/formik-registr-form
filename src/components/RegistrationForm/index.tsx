import { Field, ErrorMessage } from 'formik'
import '../../App.css'

const RegistrationForm = () => {
  return (
    <>
      <div className="form-registration">
        <h2>Registration</h2>
        <div className="input-container">
          <label htmlFor="email" className="form__label">
            E-mail:
          </label>
          <Field type="email" name="email" className="form__field" />
          <ErrorMessage name="email" component="span" />
        </div>

        <div className="input-container">
          <label htmlFor="password" className="form__label">
            Password:
          </label>
          <Field type="password" name="password" className="form__field" />
          <ErrorMessage name="password" component="span" />
        </div>

        <div className="input-container">
          <label htmlFor="confirmPassword" className="form__label">
            Confirm your password:{' '}
          </label>
          <Field
            type="password"
            name="confirmPassword"
            className="form__field"
          />
          <ErrorMessage name="confirmPassword" component="span" />
        </div>

        <div className="input-container">
          <label htmlFor="phoneNumber" className="form__label">
            Phone number:
          </label>
          <Field type="tel" name="phoneNumber" className="form__field" />
          <ErrorMessage name="phoneNumber" component="span" />
        </div>
      </div>
    </>
  )
}

export default RegistrationForm
