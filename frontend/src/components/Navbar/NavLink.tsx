import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
interface NavlinkProps {
  title: string,
  to: string
}

const Navlink:React.FC<NavlinkProps> = ({ to, title }) => {
  const location = useLocation()
  return (
    <>
    <Link to={to} className='navbarlist__link'>{title}</Link>
    {(location.pathname.toLowerCase() === to) &&
        <motion.div layoutId="navlink__underline" className='navlink__underline'></motion.div>
    }
    </>
  )
}

export default Navlink
