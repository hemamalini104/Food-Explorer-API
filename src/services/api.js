import axios from "axios";

const BASE_URL = "https://world.openfoodfacts.org";

export const searchProductsByName = async (query, page = 1) => {
  return axios.get(`${BASE_URL}/cgi/search.pl`, {
    params: {
      search_terms: query,
      page,
      json: true
    }
  });
};

export const getProductsByCategory = async (category) => {
  return axios.get(`${BASE_URL}/category/${category}.json`);
};

export const getProductByBarcode = async (barcode) => {
  return axios.get(`${BASE_URL}/api/v0/product/${barcode}.json`);
};

export const getCategories = async () => {
  return axios.get(`${BASE_URL}/categories.json`);
};
