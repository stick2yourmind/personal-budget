import { Link, Navigate } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import { useMutation } from 'react-query'
import LoginStyle from './LoginStyle'
import { Textfield } from '../component.reference'
import { loginInit, LoginSchema } from '../utils.reference'
import { LoginForm, DataLogUserRequest } from '../ts.reference'
import { login } from '../../api'
import { useEffect, useState } from 'react'
import { PublicRoutes } from '../../routes'

const Login = () => {
  const [controller, setController] = useState<AbortController>()
  const { mutate: loginRequest, isLoading, error, isSuccess } = useMutation((data:LoginForm) => {
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
  // it only is triggered after successful validation
  const onSubmitRegister = (regValues:LoginForm) => {
    const data: DataLogUserRequest = {
      email: regValues.email,
      password: regValues.password
    }
    loginRequest(data)
  }

  return (
    <LoginStyle>
      {isSuccess && <Navigate to={PublicRoutes.HOME} replace={true} />}
      <h3 className='form__title'>Ingresa</h3>
      <Formik
        initialValues={loginInit}
        validationSchema={LoginSchema}
        onSubmit={onSubmitRegister}
      >
        <FormikForm className='form__body'>
          <>
            <Textfield label='Email' name='email' type='email' placeholder="Correo electronico"/>
            <Textfield label='Password' name='password' type='password' placeholder="Password"/>
            <button className='form__submit-btn' type='submit'>Ingresar</button>
            {!isLoading && error &&
              <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${error}`}</p>
            }
          </>
        </FormikForm>
      </Formik>
      <Link className='form__sign-other' to={PublicRoutes.REGISTER}>
        Registrarse
      </Link>
    </LoginStyle>
  )
}

export default Login
