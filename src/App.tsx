import './App.css'
import { Formik, Form } from 'formik'
import { validate } from './validate'
import RegistrationForm from './components/RegistrationForm'
import BillForm from './components/BillInformation'
import PickupLocation from './components/PickupLocation'
import Textarea from './components/Textarea'
import CheckboxAgree from './components/CheckboxAgree'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
          name: '',
          street: '',
          city: '',
          zipCode: '',
          preferCity: '',
          comment: '',
          agree: '',
          newsletter: '',
        }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        <Form className="form-container">
          <RegistrationForm />
          <BillForm />
          <PickupLocation />
          <Textarea />
          <CheckboxAgree />
          <Newsletter />
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default App
