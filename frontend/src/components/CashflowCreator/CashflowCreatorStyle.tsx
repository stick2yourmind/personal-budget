import styled from 'styled-components'

const CashflowCreatorStyle = styled.div`
  min-height: 25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .add__title{
    padding: 2rem;
  }
  .add__btn{
    height: 100%;
    background: transparent;
  }
  .add__img{
    width: 30%;
  }
  .form__body{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
  }
  .form__select{
    text-align: center;
    text-align-last: center;
    width: 100%;
    padding: 1rem;
    margin: 0.5rem;
  }
  .form__input{
    padding: 1rem;
    font-size: 2rem;
    margin: 0.5rem;
  }
  .form__submit-btn{
    width: 100%;
    background-color: #ceff1a;
    margin: 1rem 0;
    color: #414066;
    font-size: 1.8rem;
    padding: 0.5rem;
    border-radius: 0.4rem;
    font-weight: 600;
  }
  
  @media screen and (min-width: 768px) {
    .form__body{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 30rem;
    }
    .form__input{
      padding: 1rem;
      font-size: 2rem;
      margin: 0.5rem;
      width: 30rem;
    }
  }
`
export default CashflowCreatorStyle
