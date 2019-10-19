import React from 'react'
import { shallow } from 'enzyme'

import AddModal from '../../src/components/addModal/addModal'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('AddModal components rendeding', () => {
  const addModal = shallow(<AddModal />)
  it('addModal renders', () => {
    checkRender(addModal)
  })
})