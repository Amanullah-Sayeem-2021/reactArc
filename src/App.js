import Sidebar from "./Component/Sidebar/sidebar";
import { Route, Switch } from "react-router";
import AllProduct from "./Component/Product/allProduct";
import "./App.css";
import ProductByCategory from "./Component/Product/productByCategory";
import SingleProduct from "./Component/Product/singleProduct";

const App = () => {
  let view;
  if (window.innerWidth < 900) {
    view = "mobile";
  } else {
    view = "web";
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>

        <div style={{ backgroundColor: "#f6f7f9" }} className="col-9">
          <Switch>
            <Route
              path="/product/view/:id/"
              render={(props) => <SingleProduct view={view} {...props} />}
            />
            <Route
              exact
              path="/"
              render={(props) => <AllProduct view={view} {...props} />}
            />
            <Route
              path="/product/by/category/:id/:name/"
              component={ProductByCategory}
            />

            {/* <Route path="/profile/:id?/" component={Profile} />
          <Route path="/request/:id?/" component={RequestPage} />
          <Route path="/notification/:id?/" component={Notification} />
          <Route path="/request/:id?/" component={RequestPage} /> */}

            {/* <Route path="/home/" component={Home} /> */}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
