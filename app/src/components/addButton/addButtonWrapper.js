import styled from 'styled-components'

import { Button } from '../commons/button'

import { COLORS } from '../../constants'

const AddButtonWrapper = styled(Button)`
  width: 100%;
  background-color: ${COLORS.SKY};
  color: ${COLORS.WHITE};
  margin-top: 30px;
  box-shadow: 0px 0px 3px 0px ${COLORS.DARK_SKY};
`

export default AddButtonWrapper