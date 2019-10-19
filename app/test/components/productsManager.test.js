import React from 'react'
import { shallow } from 'enzyme'

import ProductsManager from '../../src/components/productsManager/productsManager'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('ProductsManager components rendeding', () => {
  const products = []
  const productsManager = shallow(<ProductsManager products={products} />)
  it('productsManager renders', () => {
    checkRender(productsManager)
  })
})