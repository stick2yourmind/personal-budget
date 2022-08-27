import MainStyle from './MainStyle'
import { Home } from '../../pages/Home'
import { Route, Routes } from 'react-router-dom'
import { PublicRoutes } from '../../routes'
import { Sign } from '../../pages/Sign'

const Main = () => {
  return (
    <MainStyle>
      <Routes>
        <Route path={PublicRoutes.HOME} element={<Home/>} />
        {/* <Route path={PublicRoutes.LOGIN} element={<Sign/>} /> */}
        <Route path={PublicRoutes.REGISTER} element={<Sign/>} />
      </Routes>
    </MainStyle>
  )
}
export default Main
