import api from "../axiosInstance"

export const getAllUsers = async ()=>{
    const response=await api.get("/api/v1/users")
    return response.data;
}

export const searchUserById=async(id)=>{
    const response = await api.get("/api/v1/loadUser/"+id)
    return response;
}

export const editUser=async(id,user)=>{
    return await api.put("/api/v1/updateUser/"+id,user)
}

export const deleteUser= async (id)=>{
    const response=await api.delete("/api/v1/deleteUser/"+id)
    return response;
}