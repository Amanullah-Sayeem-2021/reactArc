import { getData } from "../requestMethod";
const url = "/api/category/";

export const categoryApi = {
  getAllData: () => {
    return getData(`${url}`);
  },
  getSingleData: (id) => {
    return getData(`${url}${id}`);
  },
  getProductsUnderCategory: (id, page, limit) => {
    return getData(`${url}${id}/product/?page=${page}&limit=${limit}`);
  },
};

//ful from

/* get:(id)=>{
const data=getData(`${url}?${id}`)
return data
}
*/

// Can be written as

/* const get:getData

function getData (id){
    const data=getData(`${url}?${id}`)
 return data
}
*/
