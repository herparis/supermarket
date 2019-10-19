import styled from 'styled-components'

import { COLORS } from '../../constants'

const AddModalWrapper = styled.div`
  border-radius: 6px;
  padding: 25px;
  width: 30%;
  background-color: ${COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  flex-direction: column;
`

export default AddModalWrapper