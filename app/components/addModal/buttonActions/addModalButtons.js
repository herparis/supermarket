import React from 'react'

import AddModalButton from './addModalButton'
import AddModalButtonsWrapper from './addModalButtonsWrapper'

import { COLORS, MODAL_TEXT } from '../../../constants'

const AddModalButtons = ({
  isDisabledAddButton,
  handleAddAction,
  handleCancelAction,
}) => (
  <AddModalButtonsWrapper>
    <AddModalButton
      onClick={handleCancelAction}
    >
      {MODAL_TEXT.BUTTONS.CANCEL}
    </AddModalButton>
    <AddModalButton
      disabled={isDisabledAddButton}
      backgroundColor={COLORS.SKY}
      textColor={COLORS.WHITE}
      onClick={handleAddAction}
    >
      {MODAL_TEXT.BUTTONS.ADD}
    </AddModalButton>
  </AddModalButtonsWrapper>
)

export default AddModalButtons