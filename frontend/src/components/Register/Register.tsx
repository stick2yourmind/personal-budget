import { Link, Navigate } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import { useMutation } from 'react-query'
import RegisterStyle from './RegisterStyle'
import { TextField } from '../component.reference'
import { registerInit, RegisterSchema } from '../utils.reference'
import { RegisterForm, DataRegUserRequest } from '../ts.reference'
import { register } from '../../api'
import { useEffect, useState } from 'react'
import { PublicRoutes } from '../../routes'

const Register = () => {
  const [controller, setController] = useState<AbortController>()
  const { mutate: registerRequest, isLoading, error, isSuccess } = useMutation((data:RegisterForm) => {
    return register({
      controllerSignal: controller?.signal,
      email: data.email,
      name: data.name,
      password: data.password
    })
  })
  useEffect(() => {
    const ctlr = new AbortController()
    setController(ctlr)

    return () => { controller && controller.abort() }
  }, [])
  // it only is triggered after successful validation
  const onSubmitRegister = (regValues:RegisterForm) => {
    const data: DataRegUserRequest = {
      email: regValues.email,
      name: regValues.name,
      password: regValues.password
    }
    registerRequest(data)
  }

  return (
    <RegisterStyle>
      {isSuccess && <Navigate to={PublicRoutes.HOME} replace={true} />}
      <h3 className='form__title'>Create your account</h3>
      <Formik
        initialValues={registerInit}
        validationSchema={RegisterSchema}
        onSubmit={onSubmitRegister}
      >
        <FormikForm className='form__body'>
          <>
            <TextField label='Nombre' name='name' type='text' placeholder="Name"/>
            <TextField label='Email' name='email' type='email' placeholder="Email"/>
            <TextField label='Password' name='password' type='password' placeholder="Password"/>
            <TextField label='passwordConfirmation' name='passwordConfirmation' type='Password'
            placeholder="Password confirmation"/>
            <button className='form__submit-btn' type='submit'>Sign up</button>
            {!isLoading && error &&
              <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${error}`}</p>
            }
          </>
        </FormikForm>
      </Formik>
      <Link className='form__sign-other' to={PublicRoutes.LOGIN}>
        Sign in
      </Link>
    </RegisterStyle>
  )
}

export default Register
