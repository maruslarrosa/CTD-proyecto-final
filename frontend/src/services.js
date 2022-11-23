import axios from "axios";

const baseUrl = "http://ec2-3-140-200-1.us-east-2.compute.amazonaws.com:8080/backend/";


export const getProducts = async () => {
  const endpoint   =  `${baseUrl}productos`
  const response   =  await axios.get(endpoint);
  const products =  response.data;

  return products;
}

export const getCategories = async () => {
  const endpoint = `${baseUrl}categorias`
  const response = await axios.get(endpoint)
  const categories = response.data

  return categories
}