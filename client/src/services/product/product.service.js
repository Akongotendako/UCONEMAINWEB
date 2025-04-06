import axiosInstance from "../axios_instance/axios.service.instance";

const backEndURL = "https://friendly-slow-anorak.glitch.me/"

export const getProducts = async() => {
  const response = await axiosInstance.get(`${backEndURL}/products`);
  return response;
}

export const addProduct = async(data) => {
  const response = await axiosInstance.post(`${backEndURL}/products`, data, {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  });
  return response;
};


export const getProduct = async(id) => {
  const response = await axiosInstance.get(`${backEndURL}/products/${id}`);
  return response;
};

export const updateProduct = async(id, data) => {
  console.log(data)
  const response = await axiosInstance.put(`${backEndURL}/products/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

  return {data: response.data, status: response.status};
}

export const deleteProduct = async(id) => {
  const response = await axiosInstance.delete(`${backEndURL}/products/${id}`);
  return response;
};

export const getProductByCategory = async(category) => {
  const response = await axiosInstance.get(`${backEndURL}/products/${category}`);
  return response;
};