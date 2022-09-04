import { Link, Navigate } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import { useMutation } from 'react-query'
import LoginStyle from './LoginStyle'
import { TextField } from '../component.reference'
import { loginInit, LoginSchema } from '../utils.reference'
import { LoginForm, DataLoginUserRequest, DataLoginUserResponse } from '../ts.reference'
import { login } from '../../api'
import { useEffect, useState } from 'react'
import { PublicRoutes } from '../../routes'
import { useDispatch } from 'react-redux'
import { createUser } from '../../store/features/user'

const Login = () => {
  const [controller, setController] = useState<AbortController>()
  const dispatch = useDispatch()
  const {
    mutate: loginRequest, isLoading, error, isSuccess,
    data
  } = useMutation<DataLoginUserResponse, unknown, LoginForm>((data) => {
    return login({
      controllerSignal: controller?.signal,
      email: data.email,
      password: data.password
    })
  })
  useEffect(() => {
    const ctlr = new AbortController()
    setController(ctlr)

    return () => { controller && controller.abort() }
  }, [])

  useEffect(() => {
    if (data)
      dispatch(createUser(data.data))
  }, [data])

  // it only is triggered after successful validation
  const onSubmitRegister = (regValues:LoginForm) => {
    const data: DataLoginUserRequest = {
      email: regValues.email,
      password: regValues.password
    }
    loginRequest(data)
  }
  return (
    <LoginStyle>
      {isSuccess && <Navigate to={PublicRoutes.HOME} replace={true} />}
      <h3 className='form__title'>Login</h3>
      <Formik
        initialValues={loginInit}
        validationSchema={LoginSchema}
        onSubmit={onSubmitRegister}
      >
        <FormikForm className='form__body'>
          <>
            <TextField label='Email' name='email' type='email' placeholder="Email"/>
            <TextField label='Password' name='password' type='password' placeholder="Password"/>
            <button className='form__submit-btn' type='submit'>Sign in</button>
            {!isLoading && error &&
              <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${error}`}</p>
            }
          </>
        </FormikForm>
      </Formik>
      <Link className='form__sign-other' to={PublicRoutes.REGISTER}>
        Sign up
      </Link>
    </LoginStyle>
  )
}

export default Login
