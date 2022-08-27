import * as Yup from 'yup'

/* -------------------------------------------------------------------------- */
/*                                 LOGIN USER                                 */
/* -------------------------------------------------------------------------- */

const LoginValidator = Yup.object({
  email: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Password is required')
    .min(8, 'Password must contains at least 8 characters')
    .max(16, 'Password must contains up to 16 characters')
})

export const loginInit = {
  email: '',
  password: ''
}

export default LoginValidator
