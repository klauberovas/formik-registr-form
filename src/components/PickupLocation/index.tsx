import { Field } from 'formik'

const PickupLocation = () => {
  return (
    <div className="form-location">
      <label htmlFor="preferCity" className="margin--right">
        Choose your collection point:
      </label>
      <Field name="preferCity" as="select">
        <option value="Plzeň">Plzeň</option>
        <option value="Praha">Praha</option>
        <option value="Brno">Brno</option>
        <option value="České Budějovice">České Budějovice</option>
        <option value="Karlovy Vary">Karlovy Vary</option>
      </Field>
    </div>
  )
}
export default PickupLocation
