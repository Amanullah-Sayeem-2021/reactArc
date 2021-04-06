import { useEffect, useState } from "react";

export default function useFetch(fn) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  async function load() {
    setLoading(true);
    const res = await fn();
    setData(res.data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return {
    loading,
    data,
  };
}
