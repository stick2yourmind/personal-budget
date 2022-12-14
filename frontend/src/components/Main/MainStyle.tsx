import styled from 'styled-components'

const MainStyle = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem - 9rem); // 6rem --> App padding, 9rem --> Header and footer width
  padding: 0 10%;
  display: flex;
  justify-content: center;
  p {
    color: whitesmoke;
  }
`
export default MainStyle
