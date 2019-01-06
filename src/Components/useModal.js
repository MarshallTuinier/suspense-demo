import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// Custom hook to use a Modal component
// Requires no input
// Exposes both the Modal component and the toggling function as follows
// const [modalComponent, modalToggle] = useModal()

const useModal = () => {
  const [open, toggleOpen] = useState(false);
  const ref = useRef();

  // Set the focus to the modal for keyDown effects to work
  useEffect(
    () => {
      if (open) {
        ref.current.focus();
      }
    },
    [open]
  );

  const handleToggle = () => {
    toggleOpen(!open);
  };

  const handleKeyDown = event => {
    if (event.key === "Escape") handleToggle();
  };

  const Modal = props => {
    if (open)
      return (
        <ModalContainer onKeyDown={handleKeyDown} tabIndex={1} ref={ref}>
          <StyledModal>
            {props.children}
            <CloseButton onClick={handleToggle}>&times;</CloseButton>
          </StyledModal>
        </ModalContainer>
      );
    return null;
  };

  return [Modal, handleToggle];
};

export default useModal;

//--------------styles------------------//

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 4;
`;

const StyledModal = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-width: 600px;
  min-height: 200px;
  background-color: white;
  z-index: 5;
  padding: 20px;
  box-shadow: 0px 10px 30px -5px rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  @media (max-width: 1200px) {
    min-width: 70vw;
    max-width: 70vw;
  }
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 40px;
`;
