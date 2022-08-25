import styled from 'styled-components'

const NavbarStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .nav__primary{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;
    height: 12rem;
  }
  .nav__menu{
    width: 100%;
    display: flex;
    z-index: 10;
    height: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    z-index: 10;
    height: calc(100vh - 12rem);    
    backdrop-filter: blur(1px);
    background-color: rgb(0 0 0 /0.6);
  }
  .nav__logo{
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav__logo--title{
    color: whitesmoke;
    padding-left: 1rem;
    font-size: 2rem;
    font-family: 'Aboreto', cursive;
  }
  .nav__logo--img{
    aspect-ratio: 1 / 1;
    height: 100%;
    filter: invert(78%) sepia(94%) saturate(1%) hue-rotate(45deg) brightness(102%) contrast(102%);
  }
  .nav__btn{
    aspect-ratio: 1 / 1;
    width: 5rem;
    background-color: transparent;
  }
  .nav__img{
    aspect-ratio: 1 / 1;
    width: 100%;
    filter: invert(78%) sepia(94%) saturate(1%) hue-rotate(45deg) brightness(102%) contrast(102%);
  }
  .nav__list{
    padding: 1rem 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .nav__item{
    color: whitesmoke;
    list-style: none;
    font-size: 1.5rem;
  }
`

export default NavbarStyle
