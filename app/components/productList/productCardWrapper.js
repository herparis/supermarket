import styled from 'styled-components'

import { COLORS } from '../../constants'

const ProductCardWrapper = styled.div`
  background-color: ${COLORS.WHITE};
  display: flex;
  margin-bottom: 2%;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 0px ${COLORS.DARK_GREY};
  justify-content: space-between;
  width: 100%;
`

export default ProductCardWrapper