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
    display: none;
  }
  @-webkit-keyframes showNavList {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  @-moz-keyframes showNavList {
      0%   { opacity: 0; }
      100% { opacity: 1; }
  }
  @-o-keyframes showNavList {
      0%   { opacity: 0; }
      100% { opacity: 1; }
  }
  @keyframes showNavList {
      0%   { opacity: 0; }
      100% { opacity: 1; }
  }
  .nav__menu--expanded{
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
    display: block;
    -webkit-animation: showNavList 0.4s ease;
    -moz-animation: showNavList 0.4s ease;
    -o-animation: showNavList 0.4s ease;
    animation: showNavList 0.4s ease;
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
    padding: 2rem 0;
  }
  
  .navbarlist{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  }
  .navbarlist__item{
    list-style-type: none;
    padding: 0 0.8rem;
  }
  .navbarlist__link{
    text-decoration: none;
    font-family: 'Work Sans', sans-serif;
    font-weight: 700;
    font-size: 4rem;
  }
  .navbarlist__link--current{
    padding-bottom: 0.5rem;
    border-bottom: 0.2rem solid whitesmoke;
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    font-size: 1.8rem;
  }
  .navbarlist__link:visited{
    color: var(--cl-text);
    font-weight: 700;
    font-size: 4rem;
  }
  .navlink__underline{
    min-width: 100%;
    height: 0.3rem;
    background: white;
  }
  @media screen and (min-width: 768px) {
  flex-direction: row;
  justify-content: space-between;
  .nav__btn{
    display: none;
  }
  .nav__primary, .nav__menu--expanded, .nav__menu{
    width: auto;
  }
  .nav__menu--expanded{
    height: auto;
  }
  .nav__menu{
    height: auto;
    display: block;
  }
  .nav__list{
    flex-direction: row;
  }
  .nav__item{
    padding: 0 2rem;
  }
}
`

export default NavbarStyle
