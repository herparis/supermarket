import React from 'react'
import { shallow } from 'enzyme'

import AddButton from '../../src/components/addButton/addButton'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('AddButton components rendeding', () => {
  const addButton = shallow(<AddButton />)
  it('addButton renders', () => {
    checkRender(addButton)
  })
})