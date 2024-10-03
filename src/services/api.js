import axios from 'axios';

// Set the base URL for your API
const API_BASE_URL = 'http://192.168.68.118:8000/';  // Base API URL

// GET all products
export const getAllProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}product/api/v1/product/all/`);
  return response.data;
};

// GET product by ID
export const getProductById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}product/api/v1/product/${id}/`);
  return response.data;
};

// CREATE a new product
export const createProduct = async (data) => {
  const response = await axios.post(`${API_BASE_URL}product/api/v1/product/create/`, data);
  return response.data;
};

// UPDATE a product by ID
export const updateProduct = async (id, data) => {
  const response = await axios.put(`${API_BASE_URL}product/api/v1/product/${id}/update/`, data);
  return response.data;
};

// DELETE a product by ID
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}product/api/v1/product/${id}/delete/`);
  return response.data;
};
