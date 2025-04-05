import Product from "../models/product.model.js";
import {
  addImages,
  deleteAnAsset,
  isAllFieldsEmpty,
  isAnItemExist,
  isImageFileEmpty,
  isPriceAndStockNumbers,
  updateAssets,
} from "../validation/product.validation.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const product = await Product.find();

    res.status(200).json({
      message: "Product successfully fetched",
      success: true,
      error: null,
      response: product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

// Add product
export const addProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      stock,
      discount,
      sizes,
      category,
    } = req.body;

    const data = {
      productName: productName,
      description: description,
      price: price,
      stock: stock,
      discount: discount,
      sizes: sizes,
      category: category,
    };

    const newProduct = new Product({
      productName,
      description,
      price,
      stock,
      discount,
      sizes,
      category,
      images: [],
    });

    // check if all fields are empty
    isAllFieldsEmpty(data);

    // check if price and stock are in number format
    isPriceAndStockNumbers(price, stock);

    // check if the images handled by multer is empty
    isImageFileEmpty(req.files);

    // waiting for the images being uploaded in the cloudiary platform
    const uploadPromises = addImages(req.files);

    // result from the images beign uploaded
    const results = await Promise.all(uploadPromises);

    newProduct.images = results.map((result) => ({
      url: result.secure_url,
      publicId: result.public_id,
    }));

    const response = await newProduct.save();

    return res.status(200).json({
      message: "Product addded Successfully",
      success: true,
      error: null,
      response: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

// get specific product
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await Product.findById(id);

    // checking if the item exist in the database before fetch it
    isAnItemExist(response);

    return res.status(200).json({
      message: "Product successfully fetched",
      success: true,
      error: null,
      response: response,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

// update product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      productName,
      description,
      price,
      stock,
      discount,
      sizes,
      category,
    } = req.body;

    const data = {
      productName: productName,
      description: description,
      price: price,
      stock: stock,
      discount: discount,
      sizes: sizes,
      category: category,
    };

    const existingImages = req.body.existingImages
      ? JSON.parse(req.body.existingImages)
      : [];

    const originalImages = req.body.originalImages
      ? JSON.parse(req.body.originalImages)
      : [];

    originalImages.forEach((image) => {
      console.log(`image ${image.publicId}`);
    });

    // checking if all fields are not empty
    isAllFieldsEmpty(data);

    // delete an asset from the cloudinary if the user changes the image
    deleteAnAsset(originalImages, existingImages);

    // checking if the price and stock are in numbers format
    isPriceAndStockNumbers(price, stock);

    const product = await Product.findById(id);

    // check if the product is truly exist in the database before update it
    isAnItemExist(product);

    // update assets from cloudinary and wait it after the successful operation
    let newImages = await updateAssets(req.files);

    const updatedImages = [...existingImages, ...newImages];

    product.productName = productName;
    product.description = description;
    product.price = price;
    product.stock = stock;
    (product.discount = discount), (product.images = updatedImages);
    product.sizes = sizes;
    product.category = category;

    const response = await product.save();

    return res.status(200).json({
      message: "Product updated successfully",
      success: true,
      error: null,
      response: response,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

// delete a specific product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product not found",
        success: false,
        error: null,
        response: null,
      });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      success: true,
      error: null,
      response: null,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};

// get specific product by category
export const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.params;

    if (!category) {
      return res.status(400).json({
        message: `Request is empty`,
        success: false,
        error: null,
        response: null,
      });
    }

    const productByCategory = await Product.find({ category: category });

    if (!productByCategory) {
      return res.status(404).json({
        message: `Product with category of ${category} is empty`,
        success: false,
        error: null,
        response: null,
      });
    }

    return res.status(200).json({
      message: `Product of category ${category} is fetched successfully`,
      success: true,
      error: null,
      response: productByCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
      response: null,
    });
  }
};
