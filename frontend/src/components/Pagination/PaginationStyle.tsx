import styled from 'styled-components'

const PaginationStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .record__item{
    padding: 0.5rem;
    list-style: none;
  }
  .record__amount, .record__category, .record__details, .record__type{
    font-size: 1.4rem;
  }
`
export default PaginationStyle
