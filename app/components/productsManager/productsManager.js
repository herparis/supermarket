import React from 'react'

import ProductList from '../productList/productList'
import ProductCounter from '../productCounter/productCounter'
import AddButton from '../addButton/addButton'

import ProductsWrapper from './productsWrapper'

const ProductsManager = ({
  products,
  onClick,
  getProducts,
  isLoading
}) => (
  <ProductsWrapper>
      <ProductCounter
        isLoading={isLoading}
        count={products.length}
      />
      <ProductList
        isLoading={isLoading}
        products={products}
        getProducts={getProducts}
      />
    <AddButton onClick={onClick} />
  </ProductsWrapper>
)

export default ProductsManager