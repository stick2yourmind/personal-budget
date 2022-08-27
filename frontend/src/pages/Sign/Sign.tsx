import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SignStyle from './SignStyle'
import { Register, Login } from '../component.reference'
import { RootState } from '../store.reference'
import { PublicRoutes } from '../../routes'

const Sign = () => {
  const location = useLocation()
  const user = useSelector((state:RootState) => state.user)
  return (
    <SignStyle>
      {user?.accessToken
        ? <Navigate to ="/" replace={true} />
        : (
          <>
            {location?.pathname?.toLowerCase() === PublicRoutes.REGISTER && <Register/>}
            {location?.pathname?.toLowerCase() === PublicRoutes.LOGIN && <Login/>}
          </>
          )}
    </SignStyle>
  )
}

export default Sign
