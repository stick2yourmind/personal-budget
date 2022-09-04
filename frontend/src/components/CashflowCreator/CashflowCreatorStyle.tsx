import styled from 'styled-components'

const CashflowCreatorStyle = styled.div`
  height: 25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .add__btn{
    height: 100%;
    background: transparent;
  }
  .add__img{
    height: 100%;
  }
  .form__body{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .form__select{
    text-align: center;
    text-align-last: center;
    width: 100%;
    height: 2rem;
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
`
export default CashflowCreatorStyle
