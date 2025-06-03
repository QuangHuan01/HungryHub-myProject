import api from "./index";

export const loginApi = (data: any) => api.post("/login", data);
export const registerApi = (data: any) => api.post("/register", data);
export const getProfile = (userId: any) => api.get(`/profile/${userId}`);
