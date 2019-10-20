import { LoaderAlt } from 'styled-icons/boxicons-regular/LoaderAlt'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  } to {
    transform: rotate(360deg)
  }
`

const Loader = styled(LoaderAlt)`
  width: 40px;
  height: 40px;
  text-align: center;
  animation: ${rotate} 1s infinite linear;
`

export default Loader