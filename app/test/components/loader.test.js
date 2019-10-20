import React from 'react'
import { shallow } from 'enzyme'

import Loader from '../../src/components/commons/loader/loader'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('Loader components rendeding', () => {
  const loader = shallow(<Loader />)
  it('loader renders', () => {
    checkRender(loader)
  })
})
