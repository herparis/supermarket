import React from 'react'

import TitleWrapper from './titleWrapper'
import TitleText from './titleText'

const Title = ({ text }) => (
  <TitleWrapper>
    <TitleText>{text}</TitleText>
  </TitleWrapper>
)

export default Title