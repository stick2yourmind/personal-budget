import * as Yup from 'yup'

const onlyText = /^[A-Za-z ]*$/

/* -------------------------------------------------------------------------- */
/*                                REGISTER USER                               */
/* -------------------------------------------------------------------------- */

export const RegisterSchema = Yup.object({
  email: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Email is required')
    .email('Email is invalid'),
  name: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Name is required')
    .matches(
      onlyText,
      "Name can only contains alphabet's letters and spaces"
    ),
  password: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Password is required')
    .min(8, 'Password must contains at least 8 characters')
    .max(16, 'Password must contains up to 16 characters'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must be the same')
})

export const registerInit = {
  email: '',
  name: '',
  password: ''
}
