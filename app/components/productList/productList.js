import React from 'react'

import ProductCard from './productCard'

import Loader from '../commons/loader/loader'

const ProductList = ({
  products,
  getProducts,
  isLoading
}) => (
  !isLoading ? products && products.map((product, index) => (
    <ProductCard
      getProducts={getProducts}
      key={index}
      {...product}
    />
  )) : <Loader />
)

export default ProductList