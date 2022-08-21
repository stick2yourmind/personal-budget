import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, Roles } from '../utils'
import { AppStore } from '../redux/store'

interface Props {
  rol: Roles;
}

const privateValidated = () => <Outlet />
const privatedNotValidated = () => <Navigate replace to={PrivateRoutes.PRIVATE} />

function RoleGuard ({ rol }: Props) {
  const userState = useSelector((store: AppStore) => store.user)
  return userState.rol === rol ? privateValidated : privatedNotValidated
}
export default RoleGuard
