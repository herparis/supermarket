import React from 'react'
import { shallow } from 'enzyme'

import ProductCounter from '../../src/components/productCounter/productCounter'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('ProductCounter components rendeding', () => {
  const productCounter = shallow(<ProductCounter />)
  it('ProductCounter renders', () => {
    checkRender(productCounter)
  })
})