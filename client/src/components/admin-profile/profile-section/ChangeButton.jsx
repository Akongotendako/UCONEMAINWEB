import userStore from "@/zustand/user/userStore";
import { Button, Input } from "@chakra-ui/react";
import React, { useRef } from "react";

const ChangeButton = () => {

  const {setImage} = userStore();
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImage = {
        file: file,
        url: URL.createObjectURL(file)
      }
      setImage(updatedImage);
    }
  };

  return (
    <>
      <Button
        w="100%"
        bg="#2985E5"
        _hover={{ bg: "#121A21", borderColor: "#FFF" }}
        onClick={handleClick}
      >
        Change Photo
      </Button>
      <Input
        type="file"
        accept="image/*"
        ref={inputRef}
        display="none"
        onChange={handleChange}
      />
    </>
  );
};

export default ChangeButton;
