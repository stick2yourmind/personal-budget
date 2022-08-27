import styled from 'styled-components'

const TextField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem 0;
  .error-field-container{
    display: flex;
  }
  .error-field{
    color: #e91e63;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.5rem 0;
    background-color: rgba(255,255,255,0.7)
  }
`

export default TextField
