import styled from 'styled-components'

const RegisterStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .form__title{
    font-size: 2.5rem;
  }
  .form__body{
    padding: 1rem 0;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 32.5rem;
  }
  .inp-field{
    line-height: 3rem;
    width: 100%;
    color: rgb(0, 105, 92);
    font-weight: 700;
    font-size: 1.3rem;
    -webkit-text-fill-color: rgb(88, 182, 173);
  }
  .form__submit-btn{  
    font-size: 1.4rem;
    font-weight: 600;
    font-family: 'Work Sans',sans-serif;
    background-color: var(--bg-dark);
    color: var(--cl-text);
    padding: 1.5rem;
    border-radius: 0.8rem;
  }
  .form__sign-other{
    font-size: 1.2rem;
    font-weight: 700;
    font-family: 'Roboto',sans-serif;
    color: var(--bg-dark);
    background-color: transparent;
  }
`
export default RegisterStyle
