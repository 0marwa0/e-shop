import React from "react";
import { connect } from "react-redux";
import { fetchProduct } from "../../store/productSlice";
import { addProduct, removeProduct } from "../../store/cartSlice";
import { setCurrency } from "../../store/currencySlice";
import ProductCard from "../../components/prorductCard";
import "./index.css";
class Products extends React.Component {
  //  constructor(props) {
  //   super(props);
  //  }

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    let categories = this.props.products.products["categories"] || [];
    let loading = this.props.products.loading;
    this.add = (item) => {
      this.dispatch(addProduct(item));
    };
    let products = this.props.category["category"].products || [];
    return (
      <div>
        <div className="cards-holder">
          {products.map((item) => (
            <ProductCard product={item} />
          ))}
        </div>
      </div>
    );
  }
}
const data = function (state) {
  return {
    products: state.products,
    currencies: state.currencies,
    category: state.category,
    cart: state.cart,
  };
};

const dispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchProduct()),
    setCurrentCurrency: (data) => dispatch(setCurrency(data)),
  };
};

export default connect(data, dispatch)(Products);
