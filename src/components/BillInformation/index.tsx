import { Field, ErrorMessage } from 'formik'
import '../../App.css'

const BillForm = () => {
  return (
    <>
      <div className="form-bill">
        <h2>Bill information</h2>

        <div className="input-container">
          <label htmlFor="name" className="form__label">
            Name:
          </label>
          <Field type="text" name="name" className="form__field" />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className="input-container">
          <label htmlFor="street" className="form__label">
            Street:
          </label>
          <Field type="text" name="street" className="form__field" />
          <ErrorMessage name="street" component="span" />
        </div>

        <div className="input-container">
          <label htmlFor="city" className="form__label">
            City:{' '}
          </label>

          <Field type="text" name="city" className="form__field" />
          <ErrorMessage name="city" component="span" />
        </div>

        <div className="input-container">
          <label htmlFor="zipCode" className="form__label">
            Zip code:
          </label>
          <Field type="text" name="zipCode" className="form__field" />
          <ErrorMessage name="zipCode" component="span" />
        </div>
      </div>
    </>
  )
}

export default BillForm
