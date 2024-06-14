import { Field, ErrorMessage } from 'formik'
import '../../App.css'

const RegistrationForm = () => {
  return (
    <>
      <h2>Registration</h2>

      <label htmlFor="email" className="form__label">
        E-mail:
      </label>
      <Field type="email" name="email" className="form__field" />
      <ErrorMessage name="email" component="span" />

      <label htmlFor="password" className="form__label">
        Password:
      </label>
      <Field type="password" name="password" className="form__field" />
      <ErrorMessage name="password" component="span" />

      <label htmlFor="confirmPassword" className="form__label">
        Confirm your password:{' '}
      </label>

      <Field type="password" name="confirmPassword" className="form__field" />
      <ErrorMessage name="confirmPassword" component="span" />

      <label htmlFor="phoneNumber" className="form__label">
        Phone number:
      </label>
      <Field type="tel" name="phoneNumber" className="form__field" />
      <ErrorMessage name="phoneNumber" component="span" />
    </>
  )
}

export default RegistrationForm
