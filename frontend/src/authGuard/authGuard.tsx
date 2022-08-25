import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../utils'
import { AppStore } from '../redux/store'

interface Props {
  allowedRoles: string[];
}

const privateValidated = () => <Outlet />
const privatedNotValidated = () => <Navigate replace to={PrivateRoutes.PRIVATE} />

export const AuthGuard = ({ allowedRoles }: Props) => {
  const userState = useSelector((store: AppStore) => store.user)
  return (
    allowedRoles?.includes(user.role)
    ? <Outlet />
    : auth?.user
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
);
  )
}

export default AuthGuard
