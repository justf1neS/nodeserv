import axios from "axios";

const api = axios.create({
  baseURL: "https://qatest.dev-test.pro/",
});

// export const insertMovie = (payload) => api.post(`/movie`, payload);
export const registerUser = (payload) => api.post("/user/register", payload);
export const loginUser = (payload) => api.post("/user/login", payload);

export const addMovie = (payload) => api.post(`/movie/addmovie`, payload);

export const getAllMovies = () => api.get(`/movie/movies`);

const apis = {
  registerUser,
  loginUser,
  getAllMovies,
  addMovie,
};

export default apis;
