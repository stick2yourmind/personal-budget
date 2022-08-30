import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useRoleGuard from '../../hooks/useRoleGuard'
import { RoleGuardProps } from '../ts.reference'

const RoleGuard:React.FC<RoleGuardProps> = ({ allowedRoles }) => {
  const location = useLocation()
  const authState = useRoleGuard({ allowedRoles })
  return (
    authState
      // user has required role
      ? <Outlet />
      : authState === false
        // user has not required role
        ? <Navigate to="/unauthorized" state={{ from: location }} replace />
        // user has not signed in
        : <Navigate to="/login" state={{ from: location }} replace />
  )
}

export default RoleGuard
