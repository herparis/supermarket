import React, { useState } from 'react'

import AddModalWrapper from './addModalWrapper'
import AddModalContainer from './addModalContainer'
import AddModalTitle from './addModalTitle'
import AddModalInput from './addModalInput'
import AddModalButtons from './buttonActions/addModalButtons'

import { EMPTY, MODAL_TEXT } from '../../constants'

import { addProduct } from '../../api/apiHelper'

const AddModal = ({
  isModalOpen,
  onToggleModal,
  getProducts
}) => {
  const [textValue, setTextValue] = useState(EMPTY)

  const handleAddAction = () => addProduct(textValue)
    .then(getProducts)
    .then(handleCancelAction)
  
  const handleCancelAction = () => {
    setTextValue(EMPTY)
    onToggleModal()
  }

  return (
    isModalOpen && (
      <AddModalContainer>
        <AddModalWrapper>
          <AddModalTitle>{MODAL_TEXT.TITLE}</AddModalTitle>
          <AddModalInput
            value={textValue}
            onChange={e => setTextValue(e.target.value)}
          />
          <AddModalButtons
            handleCancelAction={handleCancelAction}
            isDisabledAddButton={!textValue}
            handleAddAction={handleAddAction}
          />
        </AddModalWrapper>
      </AddModalContainer>
    )
  )
}

export default AddModal