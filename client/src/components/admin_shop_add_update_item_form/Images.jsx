import React from "react";
import productStore from "@/zustand/product/productStore";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useRef } from "react";
import { generalToast } from "@/utils/GeneralToast";

const Images = () => {
  const { images, setImages } = productStore();
  const fileInputRefs = useRef([]);

  const handleSelection = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    if (images.length + selectedFiles.length > 6) {
      generalToast({
        data: { status: 400, message: "You can't upload more than 6 images" },
      });
      return;
    }
    setImages(selectedFiles);
  };

  const handleChange = (e, index) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const updatedImage = {
        file: selectedFile,
        url: URL.createObjectURL(selectedFile),
      };
      setImages([updatedImage], index);
    }
  };

  const handleClick = (index) => {
    fileInputRefs.current[index].click();
  };

  return (
    <Flex wrap="wrap" gap={4}>
      {/* Display already selected images */}
      {images.map((file, index) => (
        <Box
          key={index}
          w="100px"
          h="100px"
          border="1px solid #ccc"
          borderRadius="md"
          overflow="hidden"
          position="relative"
        >
          <Image
            src={file.url}
            alt={`Image ${index}`}
            objectFit="cover"
            w="100%"
            h="100%"
          />
          <Box
            position="absolute"
            opacity={0}
            bg="rgba(0,0,0,0.5)"
            top={0}
            left={0}
            w="100%"
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            transition="opacity 0.3s"
            _hover={{ opacity: 1 }}
            cursor="pointer"
          >
            <Button onClick={() => handleClick(index)}>Choose photo</Button>
          </Box>
          <input
            type="file"
            accept="image/*"
            ref={(el) => (fileInputRefs.current[index] = el)}
            style={{ display: "none" }}
            onChange={(e) => handleChange(e, index)}
          />
        </Box>
      ))}

      {/* Image Picker Box */}
      <Box
        w="100px"
        h="100px"
        border="2px dashed #ccc"
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        cursor="pointer"
      >
        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          multiple
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
          }}
          onChange={handleSelection}
        />

        <Flex direction="column" align="center">
          <MdOutlineCloudUpload fontSize="24px !important" color="#FFF" />
          <Text fontSize="sm" color="gray.500">
            Upload
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Images;
