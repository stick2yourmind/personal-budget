import { useSelector } from 'react-redux'
import { RootState } from '../store'

export type UseRoleGuardProps = (params:{allowedRoles: number[]}) => boolean | undefined

/**
 * Returns true if user role is part of allowedRoles.
 * If not it returns false if the user has not the required role, and returns undefined if
 * has no role (user has not signed in).
 * @param {Object} params - object parameters
 * @param {number[]} params.allowedRoles - Array of roles
 * @return {boolean | undefined} Authentication state
 */
const useRoleGuard:UseRoleGuardProps = ({ allowedRoles }) => {
  const user = useSelector((state:RootState) => state.user)
  const authState = allowedRoles.some(role => Number(role) === user?.role)
    ? true
    : user?.accessToken
      ? false
      : undefined
  return authState
}

export default useRoleGuard
