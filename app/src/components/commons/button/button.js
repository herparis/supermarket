import styled from 'styled-components'

import { COLORS } from '../../../constants'

const Button = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  padding: 10px 0 10px 0;
  font-size: 1rem;
  border-radius: 6px;
  font-family: sans-serif;
  cursor: pointer;
  
  &:hover {
    background-color: ${COLORS.PALEVIOLETRED};
  }
`

export default Button