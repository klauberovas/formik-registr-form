interface RegistrationForm {
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
  name: string
  street: string
  city: string
  zipCode: string
  preferCity: string
  comment: string
  agree: string
  newsletter: string
}

interface ErrorsForm {
  email?: string
  password?: string
  confirmPassword?: string
  phoneNumber?: string
  name?: string
  street?: string
  city?: string
  zipCode?: string
  preferCity?: string
  comment?: string
  agree?: string
  newsletter?: string
}

type FormKeys = keyof RegistrationForm
type ErrorKeys = keyof ErrorsForm

const validateLength = (field: string, maxLen: number) => {
  if (field && field.length > maxLen) {
    return `Musí být dlouhé maximálně ${maxLen} znaků`
  }
}

const checkPassword = (password: string, confirmPassword: string | null) => {
  if (password !== confirmPassword) {
    return 'Tvoje hesla se neshodují'
  }
}

export const validate = (values: RegistrationForm) => {
  const errors: ErrorsForm = {}

  //Povinná pole
  const requieredFields: FormKeys[] = [
    'email',
    'password',
    'confirmPassword',
    'phoneNumber',
    'preferCity',
  ]

  requieredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '*Povinné pole'
    }
  })

  //Pole s max.délkou
  const fieldsWithMaxLength: { key: FormKeys; maxLen: number }[] = [
    { key: 'email', maxLen: 30 },
    { key: 'password', maxLen: 50 },
    { key: 'confirmPassword', maxLen: 50 },
    { key: 'phoneNumber', maxLen: 20 },
    { key: 'name', maxLen: 40 },
    { key: 'street', maxLen: 40 },
    { key: 'city', maxLen: 20 },
    { key: 'zipCode', maxLen: 6 },
    { key: 'preferCity', maxLen: 100 },
  ]

  fieldsWithMaxLength.forEach(({ key, maxLen }) => {
    const lengthError = validateLength(values[key], maxLen)
    if (lengthError) {
      errors[key as ErrorKeys] = lengthError
    }
  })

  //Kontrola hesla
  const passwordError = checkPassword(values.password, values.confirmPassword)
  if (passwordError) {
    errors.password = passwordError
    errors.confirmPassword = passwordError
  }

  return errors
}
