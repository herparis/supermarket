import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

import {
  Title, ProductsManager, AddModal,
} from './components'

import { TITLE, APP } from './constants'

import { fetchProducts } from './api/apiHelper'

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

render(<App /> , document.getElementById(APP))