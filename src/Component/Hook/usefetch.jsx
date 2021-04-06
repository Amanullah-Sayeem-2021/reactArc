import { useEffect, useState } from "react";

// export default function useFetch(fn) {
//   const [loading, setLoading] = useState(false);
//   const [data, setData] = useState([]);

//   async function load() {
//     setLoading(true);
//     const res = await fn();
//     console.log(("asasasas", res));
//     // setData((prev) => [...prev, ...res.data]);
//     setLoading(false);
//   }
//   useEffect(() => {
//     load();
//   }, []);

//   return {
//     loading,
//     data,
//   };
// }

export default async function GetAll(fn) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState();
  const res = await fn();
  setData((prev) => [...prev, ...res.data]);
  setLoading(false);
  return {
    loading,
    data,
  };
}
