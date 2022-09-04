import styled from 'styled-components'

const CashflowMutatorStyle = styled.li`
  list-style: none;
  width: 30rem;
  background-color: transparent;
  font-weight: 500;
  color: rgb(68,68,68);
  font-size: 1.4rem;
  padding: 1rem 1.5rem;
  border: 2px solid rgba(155, 80, 80, 0.35);
  border-radius: 0.5rem;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
  box-shadow: rgb(144, 64, 64) 0.5rem 0.5rem 1rem,rgb(186, 97, 97) -0.5rem -0.5rem 1rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -moz-box-pack: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -moz-box-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 1rem 0px;
  
  .record__amount, .record__category, .record__details, .record__type{
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 700;
    color: #b9383e;
    text-align: center;
  }
`

export default CashflowMutatorStyle
