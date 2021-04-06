import { baseUrl } from "./baseUrl";
import axios from "axios";

export async function getData(url) {
  const response = await axios.get(baseUrl + url);

  if (response.status === 200) {
    return response.data;
  } else {
    return {
      data: [],
    };
  }
}

// export async function getSingle(url) {
//   const { data } = await axios.get(baseUrl + url);
//   return data;
// }
