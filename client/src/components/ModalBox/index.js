import React from "react";
import {
  BoxWrapper,
  BoxContainer,
  Prompt,
  OptionsBox,
  OptionsContainer,
  Option,
  CloseIcon,
} from "./ModalBoxElements";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "../../context";

const ModalBox = ({ showModal, setShowModal }) => {
  const { setItemToDelete, deleteItems, itemToDelete } = useGlobalContext();

  const deleteFunc = (ifDelete) => {
    setShowModal(false);
    if (ifDelete) {
      deleteItems();
    } else {
      setItemToDelete("");
    }
  };

  return (
    <>
      <BoxWrapper showModal={showModal}>
        <BoxContainer>
          <Prompt>
            Are you sure you want to delete '{itemToDelete.itemName}'?
          </Prompt>
          <OptionsContainer>
            <OptionsBox>
              <Option
                onClick={() => {
                  deleteFunc(true);
                }}
              >
                Yes
              </Option>
              <Option
                onClick={() => {
                  deleteFunc(false);
                }}
              >
                No
              </Option>
            </OptionsBox>
          </OptionsContainer>
          <CloseIcon
            onClick={() => {
              deleteFunc(false);
            }}
          >
            <IoClose />
          </CloseIcon>
        </BoxContainer>
      </BoxWrapper>
    </>
  );
};

export default ModalBox;
