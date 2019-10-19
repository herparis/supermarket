import React from 'react'

import ProductCounterWrapper from './productCounterWrapper'

import { PRODUCTS } from '../../constants'

const ProductCounter = ({ count, isLoading }) => (
  !isLoading && (
    <ProductCounterWrapper>
      {count ? PRODUCTS.COUNT_ITEMS.replace('n', count) : PRODUCTS.LIST_EMPTY}
    </ProductCounterWrapper>
  )
)

export default ProductCounter