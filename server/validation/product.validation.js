import cloudinary from "../config/cloudinary.js";
import { Readable } from "stream";

export const isAllFieldsEmpty = (data) => {
  if (
    !data.productName ||
    !data.description ||
    !data.price ||
    !data.stock ||
    !data.discount ||
    !data.sizes ||
    !data.category
  ) {
    return res.status(400).json({
      message: "All fields must not be empty",
      success: false,
      error: null,
      response: null,
    });
  }
};

export const isPriceAndStockNumbers = (price, stock) => {
  if (isNaN(price) || isNaN(stock)) {
    return res.status(400).json({
      message: "Price and stock fields must be in numbers",
      success: false,
      error: null,
      response: null,
    });
  }
};

export const isImageFileEmpty = (files) => {
  if (!files || files.length === 0) {
    return res.status(400).json({
      message: "No images uploaded",
      success: false,
      error: "No files were found in the request",
      response: null,
    });
  }
};

export const addImages = (files) => {
  return files.map((file) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "UCONEWEB", resource_type: "auto" },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );

      const readableStream = new Readable();
      readableStream.push(file.buffer);
      readableStream.push(null);
      readableStream.pipe(stream);
    });
  });
};

export const isAnItemExist = (response) => {
  if (!response) {
    return res.status(404).json({
      message: "Product not found",
      success: false,
      error: null,
      response: null,
    });
  }
};

export const deleteAnAsset = (originalImages, existingImages) => {
  if (originalImages.length > 0) {
    originalImages.forEach((origImage) => {
      if (
        !existingImages.some((image) => image.publicId === origImage.publicId)
      ) {
        cloudinary.uploader.destroy(
          origImage.publicId,
          { resource_type: "image" },
          (error, result) => {
            if (error) {
              console.error("Error deleting asset:", error);
            } else if (result.result === "ok") {
              console.log("Asset successfully deleted:", result);
            } else {
              console.log("Deletion response:", result);
            }
          }
        );
      }
    });
  }
};

export const updateAssets = async (files) => {
  if (files && files.length > 0) {
    const uploadPromises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "UCONEWEB", resource_type: "auto" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );

        const readableStream = new Readable();
        readableStream.push(file.buffer);
        readableStream.push(null);
        readableStream.pipe(stream);
      });
    });

    const results = await Promise.all(uploadPromises);
    return results.map((result) => ({
      url: result.secure_url,
      publicId: result.public_id,
    }));
  }
};
