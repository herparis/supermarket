import styled from 'styled-components'

import { Button } from '../../commons/button'

import { COLORS } from '../../../constants'

const AddModalButton = styled(Button)`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  width: 33%;
  border-style: solid;
  border-width: 1px;
  border-color: ${COLORS.DARK_GREY};

  :disabled {
    pointer-events: none;
    cursor: not-allowed;
    background-color: ${COLORS.LIGHT_GREY};
    color: ${COLORS.WHITE};
  }
`
export default AddModalButton