// import { useEffect } from 'react'
// import LoginStyle from './LoginStyle'
// import { Formik, Form as FormikForm } from 'formik'
// import LoginSchema, { initLogin, LoginForm } from '../../app/schema/login.schema'
// import useAxiosFunction from '../../hooks/useAXiosFn'
// import axiosInstance from '../../app/api/axios'
// import TextField from '../TextField/Textfield'
// import { useNavigate, Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { setUser } from '../../app/features/userSlice'

// export interface RESDataLoginUser{
//   _id: string
//   accessToken: string
//   address: string
//   email: string
//   logged: boolean
//   name: string
//   phone: number
//   role: number
// }

// export interface REQDataLoginUser{
//   email: string
//   password: string
// }
// export interface LocationState{
//   from:{
//     pathname: string
//   }
// }
// const Login = () => {
//   const [res, err, loading, axiosFn] = useAxiosFunction<RESDataLoginUser, REQDataLoginUser>()
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   // it only is triggered after succesful validation
//   const onSubmitLogin = (regValues:LoginForm) => {
//     const data: REQDataLoginUser = {
//       email: regValues.email,
//       password: regValues.password
//     }

//     axiosFn({
//       axiosInstance,
//       method: 'post',
//       requestConfig: { data },
//       url: import.meta.env.VITE_POST_LOGIN_EP
//     })
//   }
//   useEffect(() => {
//     if (res.data) {
//       dispatch(setUser({
//         _id: res.data?._id,
//         accessToken: res.data?.accessToken,
//         address: res.data.address,
//         email: res.data.email,
//         name: res.data.name,
//         phone: res.data.phone,
//         role: res.data.role
//       }))
//       navigate('/', { replace: true })
//     }
//   }
//   , [res])
//   return (
//     <LoginStyle>
//       <h3 className='form__title'>Ingresa con tu cuenta</h3>
//       <Formik
//         initialValues={initLogin}
//         validationSchema={LoginSchema}
//         onSubmit={onSubmitLogin}
//       >
//         <FormikForm className='form__body'>
//           <TextField label='Email' name='email' type='email' placeholder="Email"/>
//           <TextField label='Password' name='password' type='password' placeholder="Password"/>
//           <button className='form__submit-btn' type='submit'>Ingresar</button>
//           {!loading && err && !(err as string).includes('401') &&
//             <p className='errMsg'>{`Un error ha ocurrido, reintente nuevamente: ${err}`}</p>
//           }
//           {!loading && err && (err as string).includes('401') &&
//             <p className='errMsg'>
//               {'Usuario o contraseña incorrecta, si no posee una cuenta debe registrarse primero'}
//             </p>
//           }
//         </FormikForm>
//       </Formik>
//       <Link className='form__sign-other' to='/sign/register'>
//         Registrarse
//       </Link>
//     </LoginStyle>
//   )
// }

// export default Login
