import React from 'react'

import ProductName from './productName'
import ProductCardWrapper from './productCardWrapper'
import ProductDelete from './productDelete'

import { removeProduct } from '../../api/apiHelper';

const ProductCard = ({
  id,
  name,
  getProducts
}) => {
  
  const handleDeleteProduct = () => removeProduct(id).then(getProducts)

  return (
    <ProductCardWrapper>
      <ProductName>{name}</ProductName>
      <ProductDelete onClick={handleDeleteProduct}/>
    </ProductCardWrapper>
  )
}

export default ProductCard