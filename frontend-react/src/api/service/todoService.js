import api from "../axiosInstance";
export const addTodo = async (data, userId) => {
  return await api.post(`/api/todos/${userId}`, data);
};

export const getAllTodos = async (userId) => {
  return await api.get(`/api/todos/${userId}`);
};

export const editTodo = async (data, todoId) => {
  return await api.put(`/api/todos/${todoId}`, data);
};

export const deleteTodo = async (todoId) => {
  return await api.delete(`/api/todos/${todoId}`);
};