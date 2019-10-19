import React from 'react'

import { BUTTON_TEXT } from '../../constants'

import AddButtonWrapper from './addButtonWrapper'

const AddButton = ({ onClick }) => (
  <AddButtonWrapper
    onClick={onClick}
  >
    {BUTTON_TEXT.ADD_BUTTON}
  </AddButtonWrapper>
)

export default AddButton