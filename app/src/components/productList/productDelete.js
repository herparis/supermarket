import styled from 'styled-components'
import { DeleteBin } from 'styled-icons/remix-line/DeleteBin'

import { COLORS } from '../../constants'

const ProductDelete = styled(DeleteBin)`
  margin: 5%;
  color: ${COLORS.DARK_GREY};
  width: 1.5rem;
  cursor: pointer;

  &:active {
    color: ${COLORS.BLACK};
  }
`

export default ProductDelete