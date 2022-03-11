import React from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../store/categoriesSlice";
import { fetchCurrency } from "../../store/currencySlice";
import ProductCard from "../../components/prorductCard";
import "./index.css";
class Products extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getCategories();
    this.props.getCurrency();
  }

  render() {
    let products = this.props.products.products || [];
    return (
      <div>
        <h1 className="product-title">Category Name </h1>
        <div className="cards-holder">
          {products.map((item) => (
            <ProductCard
              product={item}
              selectedCurrency={this.props.currencies.selectedCurrency}
            />
          ))}
        </div>
      </div>
    );
  }
}
const data = function (state) {
  return {
    products: state.categories.currentCategory,
    currencies: state.currencies,
    cart: state.cart,
  };
};

const dispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategory()),
    getCurrency: () => dispatch(fetchCurrency()),
  };
};

export default connect(data, dispatch)(Products);
