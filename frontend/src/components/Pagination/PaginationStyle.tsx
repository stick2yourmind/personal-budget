import styled from 'styled-components'

const PaginationStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .record__item{
    list-style: none;
    width: 30rem;
    background-color: transparent;
    font-weight: 500;
    color: rgb(68, 68, 68);
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
    border: 2px solid rgb(238, 238, 238);
    border-radius: 0.5rem;
    /* cursor: pointer; */
    transition: all 0.5s ease 0s;
    box-shadow: rgb(204, 204, 204) 0.5rem 0.5rem 1rem, rgb(255, 255, 255) -0.5rem -0.5rem 1rem;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0px;
  }
  .record__amount, .record__category, .record__details, .record__type{
    font-size: 2rem;
    line-height: 2.5rem;
  }
`
export default PaginationStyle
