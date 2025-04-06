import axiosInstance from "../axios_instance/axios.service.instance";

const backEndURL = "https://friendly-slow-anorak.glitch.me/"

export const signUp = async ({ email, password, confirmPassword, role, profile }) => {
  const response = await axiosInstance.post(`${backEndURL}/users`, {
    email,
    password,
    confirmPassword,
    role,
    profile
  });
  return response;
};

export const signIn = async ({ email, password }) => {
  const response = await axiosInstance.post(`${backEndURL}/users/sign-in`, {
    email,
    password,
  });
  return response;
};


export const fetchProfile = async(id) => {
  const response = await axiosInstance.get(`${backEndURL}/users/${id}`)
  return response;
}

export const updateProfile = async(id, data) => {
  const response = await axiosInstance.post(`${backEndURL}/users/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return response;
}