import React, { useState, useEffect } from 'react'

import {
  Title, ProductsManager, AddModal,
} from './src/components'

import { TITLE } from './src/constants'

import { fetchProducts } from './src/api/apiHelper'

import AppWrapper from './appWrapper'

const App = () => {

    const[isLoading, setLoader] = useState(false)
    const[isModalOpen, setModal] = useState(false)
    const[products, setProducts] = useState([])

    const getProducts = () => {
      setLoader(true)
      fetchProducts()
      .then(setProducts)
      .then(() => setLoader(false))
    }

    useEffect(() => {
      getProducts()
    }, [])

    const onToggleModal = () => setModal(!isModalOpen)

    return (
      <AppWrapper>
        <Title text={TITLE} />
        <ProductsManager
          isLoading={isLoading}
          products={products}
          onClick={onToggleModal}
          getProducts={getProducts}
        />
        <AddModal
          isModalOpen={isModalOpen}
          onToggleModal={onToggleModal}
          getProducts={getProducts}
        />
      </AppWrapper>
  )
}

export default App