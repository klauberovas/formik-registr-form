interface RegistrationForm {
  email: string
  password: string
  confirmPassword: string
  phoneNumber: string
}

interface ErrorsForm {
  email?: string
  password?: string
  confirmPassword?: string
  phoneNumber?: string
}

export const validate = (values: RegistrationForm) => {
  const errors: ErrorsForm = {}

  if (!values.email) {
    errors.email = '*Povinné pole'
  } else if (values.email.length > 30) {
    errors.email = 'Musí být dlouhé maximálně 30 znaků'
  }

  if (!values.password) {
    errors.password = '*Povinné pole'
  } else if (values.password.length > 50) {
    errors.password = 'Musí být dlouhé maximálně 50 znaků'
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = '*Povinné pole'
  } else if (values.confirmPassword.length > 50) {
    errors.confirmPassword = 'Musí být dlouhé maximálně 50 znaků'
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = '*Povinné pole'
  } else if (values.phoneNumber.length > 20) {
    errors.phoneNumber = 'Musí být dlouhé maximálně 20 znaků'
  }
  return errors
}
