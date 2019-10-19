import React from 'react'
import { shallow } from 'enzyme'

import Title from '../../src/components/title/title'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('Title components rendeding', () => {
  const title = shallow(<Title />)
  it('title renders', () => {
    checkRender(title)
  })
})