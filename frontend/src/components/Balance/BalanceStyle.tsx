import styled from 'styled-components'

const BalanceStyle = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .balance__title {
    font-size: 3rem;
    color: navajowhite;
  }
  .balance__amount {
    font-size: 2.5rem;
    color: whitesmoke;
    padding: 1rem;
  }
  .balance__income,.balance__expense {
    font-size: 2rem;
    color: navajowhite;
  }
  .balance__income {
    margin-top: 1.5rem;
    background-color: black;
    min-width: 25rem;
    text-align: center;
    padding: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .balance__expense {
    margin-bottom: 1.5rem;
    background-color: black;
    text-align: center;
    min-width: 25rem;
    padding: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`
export default BalanceStyle
