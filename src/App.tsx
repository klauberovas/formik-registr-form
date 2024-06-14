import './App.css'
import { Formik, Form } from 'formik'
import { validate } from './validate'
import RegistrationForm from './components/RegistrationForm'
import BillInformation from './components/BillInformation'

function App() {
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
        }}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setSubmitting(false)
        }}
      >
        <Form className="form-container">
          <RegistrationForm />
          {/* <BillInformation /> */}
          <button type="submit" className="button">
            Submit
          </button>
        </Form>
      </Formik>
    </>
  )
}

export default App
