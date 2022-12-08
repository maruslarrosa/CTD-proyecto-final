import axios from "axios";

const baseUrl = "http://ec2-3-140-200-1.us-east-2.compute.amazonaws.com:8080/backend/";

export const getProducts = async () => {
  const endpoint   =  `${baseUrl}productos`
  const response   =  await axios.get(endpoint);
  const products =  response.data;

  return products;
}

export const getProductsByCategory = async (categoryId) => {
  const endpoint = `${baseUrl}productos/categorias/${categoryId}`
  const response = await axios.get(endpoint);
  const products = response.data

  return products
}

export const getProductsByCity = async (cityId) => {
  const endpoint = `${baseUrl}productos/ciudades/${cityId}`
  const response = await axios.get(endpoint);
  const products = response.data

  return products
}

export const getProductById = async (productId) => {
  const endpoint = `${baseUrl}productos/${productId}`
  const response = await axios.get(endpoint);
  const product = response.data

  return product
}

export const getCategories = async () => {
  const endpoint = `${baseUrl}categorias`
  const response = await axios.get(endpoint)
  const categories = response.data

  return categories
}

export const getCities = async () => {
  const endpoint = `${baseUrl}ciudades`
  const response = await axios.get(endpoint)
  const cities = response.data

  return cities
}

export const getCharacteristics = async () => {
  const endpoint = `${baseUrl}caracteristicas`
  const response = await axios.get(endpoint)
  const characteristics = response.data
  return characteristics
}

export const postUser = async (data) => {
  const endpoint = `${baseUrl}usuarios`
  const response = await axios.post(endpoint, data)
  return response;
}

export const postAuth = async (data) => {
  const endpoint = `${baseUrl}auth/auth`
  const response = await axios.post(endpoint, data, headers)
  return response
}

const headers = {
  "Content-Type": "application/json",
}

