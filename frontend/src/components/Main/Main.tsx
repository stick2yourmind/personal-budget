import MainStyle from './MainStyle'
import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../../routes'
import { Faq, Sign, Home } from '../pages.reference'

const Main = () => {
  return (
    <MainStyle>
      <Routes>
        <Route path={PublicRoutes.HOME} element={<Home/>} />
        <Route path={PublicRoutes.LOGIN} element={<Sign/>} />
        <Route path={PublicRoutes.REGISTER} element={<Sign/>} />
        <Route path={PublicRoutes.FAQ} element={<Faq/>} />
      </Routes>
    </MainStyle>
  )
}
export default Main
