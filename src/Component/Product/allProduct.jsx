import { useEffect, useState } from "react";
import "./product.css";
import ProductCart from "./cart/productCart";
import CustomModal from "./customModal";
import { useHistory } from "react-router";
import { scrollBottom } from "../InfinityScroll/infinityScroll";
import AllProductView from "./Views/allProductView";
import useFetch from "./../Hook/usefetch";
import { productApi } from "./../../API/Product/product";

const AllProduct = ({ view }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState();
  const [modal, setModal] = useState({ show: false, item: "" });
  const history = useHistory();
  const [check, setCheck] = useState(false);

  const path = window.localStorage.getItem("path");

  if (path && !modal.show && !check) {
    history.push(path);
  }

  useEffect(() => {
    const getAll = async () => {
      const data = await productApi.getAllData(page);
      setProducts((prev) => [...prev, ...data.data]);
      setLoading(false);
    };
    getAll();
  }, [page]);

  return (
    <AllProductView
      view={view}
      loading={loading}
      products={products}
      page={page}
      setPage={setPage}
      modal={modal}
      setModal={setModal}
      check={check}
      setCheck={setCheck}
    />
  );
};

export default AllProduct;
