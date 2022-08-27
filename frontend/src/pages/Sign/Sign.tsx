import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SignStyle from './SignStyle'
import { Register } from '../component.reference'
import { RootState } from '../store.reference'
import { PublicRoutes } from '../../routes'

const Sign = () => {
  const location = useLocation()
  console.log('🚀 ~ file: Sign.tsx ~ line 9 ~ Sign ~ params', location)
  const user = useSelector((state:RootState) => state.user)
  console.log('sign')
  return (
    <SignStyle>
      {user?.accessToken
        ? <Navigate to ="/" replace={true} />
        : (
          <>
            {location?.pathname?.toLowerCase() === PublicRoutes.REGISTER && <Register/>}
            {/* {params?.toLowerCase() === 'login' && <Login/>} */}
          </>
          )}
    </SignStyle>
  )
}

export default Sign
