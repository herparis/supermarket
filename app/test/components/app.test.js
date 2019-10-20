import React from 'react'
import { shallow } from 'enzyme'

import {
  Title, ProductsManager, AddModal,
} from '../../src/components'
import App from '../../app'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('App components rendeding', () => {
  const app = shallow(<App />)
  it('AppWrapper renders', () => {
    checkRender(app)
  })
  it('Title renders', () => {
    const title = app.find(Title)
    checkRender(title)
  })
  it('ProductsManager renders', () => {
    const productsManager = app.find(ProductsManager)
    checkRender(productsManager)
  })
  it('AddModal renders', () => {
    const addModal = app.find(AddModal)
    checkRender(addModal)
  })
})
