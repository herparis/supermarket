import React from 'react'
import { shallow } from 'enzyme'

import AppWrapper from '../../appWrapper'

function checkRender(wrapper) {
  expect(wrapper.isEmptyRender()).toBe(false)
  expect(wrapper).toMatchSnapshot()
}

describe('App components rendeding', () => {
  const appWrapper = shallow(<AppWrapper />)
  it('AppWrapper renders', () => {
    checkRender(appWrapper)
  })
  
})