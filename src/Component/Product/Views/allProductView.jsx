import { scrollBottom } from "./../../InfinityScroll/infinityScroll";
import CustomModal from "./../customModal";
import ProductCart from "./../cart/productCart";

const AllProductView = ({
  view,
  products,
  loading,
  page,
  setPage,
  modal,
  setModal,
  setCheck,
}) => {
  console.log("aADDDD", products);
  if (view === "mobile") {
    return (
      <div
        onScroll={(e) => (scrollBottom(e) ? setPage(page + 1) : "")}
        className="allProduct"
      >
        <div className="container">
          <div className="headerOne">All Products</div>
          {!loading && products && (
            <div className="row">
              <div className={modal.show ? "d-block" : "d-none"}>
                <CustomModal
                  setModal={setModal}
                  modal={modal}
                  item={modal.item}
                  setCheck={setCheck}
                />
              </div>
              {products.map((item) => (
                <div className="p-1 col-6">
                  <div onClick={() => setModal({ show: true, item: item })}>
                    <ProductCart item={item} />
                  </div>
                </div>
              ))}
            </div>
          )}
          {loading && <div>loading</div>}
        </div>
      </div>
    );
  }
  return (
    <div
      onScroll={(e) => (scrollBottom(e) ? setPage(page + 1) : "")}
      className="allProduct"
    >
      <div className="container">
        <div className="headerOne">All Products</div>
        {!loading && products && (
          <div className="row">
            <div className={modal.show ? "d-block" : "d-none"}>
              <CustomModal
                setModal={setModal}
                modal={modal}
                item={modal.item}
                setCheck={setCheck}
              />
            </div>
            {products.map((item) => (
              <div className="p-1 col-3">
                <div onClick={() => setModal({ show: true, item: item })}>
                  <ProductCart item={item} />
                </div>
              </div>
            ))}
          </div>
        )}
        {loading && <div>loading</div>}
      </div>
    </div>
  );
};

export default AllProductView;
