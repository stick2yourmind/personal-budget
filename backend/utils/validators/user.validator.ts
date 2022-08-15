import * as Yup from 'yup'

const onlyText = /^[A-Za-z]*$/

const RegisterUserSchemaValidator = Yup.object({
  email: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Email is required')
    .email('Email is invalid'),
  name: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Name is required')
    .matches(
      onlyText,
      "Name can only contains alphabet's letters"
    ),
  password: Yup.string()
    .typeError('Name must be an string of characters')
    .required('Password is required')
    .min(8, 'Password must contains at least 8 characters')
    .max(16, 'Password must contains up to 16 characters')
})

export const RegisterUserInit = {
  email: '',
  name: '',
  password: ''
}

// RegisterUserSchema.validate(
//   { name: "11", age: 11 },
//   { abortEarly: false }
// ).catch(function (err) {
//   console.log(err.name); // => 'ValidationError'
//   console.log(err.errors); // => ["Name can only contains alphabet's letters", "Email is required", "Password is required"]
// });
export default RegisterUserSchemaValidator
