import { Field } from 'formik'

const Textarea = () => {
  return (
    <div className="form-textarea">
      <p>Comment:</p>
      <Field name="comment" as="textarea" />
    </div>
  )
}
export default Textarea
