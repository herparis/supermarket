import React from 'react'
import { shallow } from 'enzyme'

import { Button } from '../../src/components/commons/button'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('Button components rendeding', () => {
  const button = shallow(<Button />)
  it('Button renders', () => {
    checkRender(button)
  })
})