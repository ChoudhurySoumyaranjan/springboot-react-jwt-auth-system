import api from "../axiosInstance"

export const loginUser=async (credentials)=>{
    const response= await api.post("/api/auth/login",credentials);
    return response;
}

export const logoutUser = async () => {
  try {
    const response= await api.post("/api/auth/logout");
    return response.data;
  } catch (error) {
    console.warn("Logout request failed", error.response);
  }
};

export const registerUser=async(userData)=>{
    const response= await api.post("/api/auth/register",userData)
    return response.data;
}