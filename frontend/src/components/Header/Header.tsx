import HeaderStyle from './HeaderStyle'
import Navbar from '../Navbar/Navbar'
import { useEffect, useRef } from 'react'

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const scrollFn = () => {
      // if (headerRef?.current && window.pageYOffset > headerRef.current.offsetHeight)
      //   headerRef.current.style.backgroundColor = 'rgb(0,0,0,0.5)'
      // else if (headerRef?.current) headerRef.current.style.backgroundColor = 'rgb(0,0,0,0)'
      if (headerRef.current)
        if (window.pageYOffset) {
          headerRef.current.style.backgroundColor = 'rgb(0,0,0,0.7)'
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          headerRef.current.style.backdropFilter = 'blur(0.5rem)'
        } else {
          headerRef.current.style.backgroundColor = 'rgb(0,0,0,0)'
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          headerRef.current.style.backdropFilter = ''
        }
    }
    window.addEventListener('scroll', scrollFn, { passive: true })
    return () => window.removeEventListener('scroll', scrollFn)
  }
  , [])
  return (
    <HeaderStyle ref={headerRef}>
      <Navbar/>
    </HeaderStyle>
  )
}
export default Header
