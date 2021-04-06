import { getData } from "../requestMethod";

const url = "/api/product/";

export const productApi = {
  getAllData: (page = 1, limit = 50) => {
    return getData(`${url}?page=${page}&limit=${limit}`);
  },
  getSingleData: (id) => {
    return getData(`${url}${id}`);
  },
};
