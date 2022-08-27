import { Link, Navigate } from 'react-router-dom'
import { Formik, Form as FormikForm } from 'formik'
import { useMutation } from 'react-query'
import RegisterStyle from './RegisterStyle'
import { Textfield } from '../component.reference'
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
      <h3 className='form__title'>Crea tu cuenta</h3>
      <Formik
        initialValues={registerInit}
        validationSchema={RegisterSchema}
        onSubmit={onSubmitRegister}
      >
        <FormikForm className='form__body'>
          <>
            <Textfield label='Nombre' name='name' type='text' placeholder="Nombre"/>
            <Textfield label='Email' name='email' type='email' placeholder="Correo electronico"/>
            <Textfield label='Password' name='password' type='password' placeholder="Password"/>
            <Textfield label='passwordConfirmation' name='passwordConfirmation' type='Password'
            placeholder="Password"/>
            <button className='form__submit-btn' type='submit'>Registrarse</button>
            {!isLoading && error &&
              <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${error}`}</p>
            }
          </>
        </FormikForm>
      </Formik>
      <Link className='form__sign-other' to={PublicRoutes.LOGIN}>
        Ingresar
      </Link>
    </RegisterStyle>
  )
}

export default Register
