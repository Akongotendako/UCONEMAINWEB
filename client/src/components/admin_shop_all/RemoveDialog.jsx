import React from "react";
import { Button, Dialog, Portal } from "@chakra-ui/react";
import { useRef } from "react";

const RemoveDialog = ({ isOpen, onConfirm, onCancel }) => {
  const cancelRef = useRef();

  return (
    <Dialog.Root open={isOpen} onOpenChange={oncancel} role="alertdialog">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content bg="#243647">
            <Dialog.Header>
              <Dialog.Title color="#FFF">Delete Product</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body color="#FFFFFF80">
              Are you sure you want to delete this product?
            </Dialog.Body>
            <Dialog.Footer pt="5">
              <Dialog.ActionTrigger asChild>
                <Button
                  ref={cancelRef}
                  onClick={onCancel}
                  px="5"
                  bg="#243647"
                  borderColor="#FFF"
                >
                  No
                </Button>
              </Dialog.ActionTrigger>
              <Button colorPalette="red" onClick={onConfirm} px="5">
                Yes
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default RemoveDialog;
