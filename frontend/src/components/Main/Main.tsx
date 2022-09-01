import MainStyle from './MainStyle'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../routes'
import { Faq, Sign, Home, Dashboard } from '../pages.reference'
import { RoleGuard } from '../RoleGuard'
import { Role } from '../ts.reference'

const Main = () => {
  return (
    <MainStyle>
      <Routes>
        {/* Public routes */}
        <Route path={PublicRoutes.HOME} element={<Home/>} />
        <Route path={PublicRoutes.LOGIN} element={<Sign/>} />
        <Route path={PublicRoutes.REGISTER} element={<Sign/>} />
        <Route path={PublicRoutes.FAQ} element={<Faq/>} />

        {/* Protected routes, available for both user and admin */}
        <Route element={<RoleGuard allowedRoles={[Role.USER, Role.ADMIN]} />}>
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </Route>

      </Routes>
    </MainStyle>
  )
}
export default Main
