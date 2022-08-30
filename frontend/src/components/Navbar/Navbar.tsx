import NavbarStyle from './NavbarStyle'
import { logo, close, open } from '../img.reference'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Navlink from './NavLink'
import { PrivateRoutes, PublicRoutes } from '../../routes'
import useRoleGuard from '../../hooks/useRoleGuard'
import { Role } from '../ts.reference'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const authState = useRoleGuard({ allowedRoles: [Role.USER] })
  return (
    <NavbarStyle>
      <div className="nav__primary">
        <div className="nav__logo">
          <img src={logo} alt="Logo" className='nav__logo--img'/>
          <p className="nav__logo--title">Economicis</p>
        </div>
        <button onClick={() => { setIsNavOpen(prev => !prev); console.log('cambiado') } } className="nav__btn">
          { isNavOpen
            ? <motion.img src={close} alt="Close navigator sections" className='nav__img'
                key={logo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            : <motion.img src={open} alt="Open navigator sections" className='nav__img'
                key={open}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
          }
        </button>
      </div>
      <motion.nav className={isNavOpen ? 'nav__menu--expanded' : 'nav__menu'}
        key="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
          <ul className="nav__list">
            <li className="nav__item">
              <Navlink to={PublicRoutes.HOME} title='Home'/>
            </li>
            {!authState
              ? <li className="nav__item">
                  <Navlink to={PublicRoutes.LOGIN} title='Sign'/>
                </li>
              : <li className="nav__item">
                  <Navlink to={PrivateRoutes.DASHBOARD} title='Dashboard'/>
                </li>
            }
            <li className="nav__item">
              <Navlink to={PublicRoutes.FAQ} title="FAQ"/>
            </li>
          </ul>
        </motion.nav>
    </NavbarStyle>
  )
}
export default Navbar
