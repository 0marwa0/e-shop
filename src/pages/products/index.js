import React from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../store/categoriesSlice";
import { fetchCurrency } from "../../store/currencySlice";
import ProductCard from "../../components/product/card";
import "./index.css";
class Products extends React.Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getCurrency();
  }
  render() {
    return (
      <div>
        <h1 className="product-title">Category Name </h1>
        <div className="cards-holder">
          {this.props.products?.map((item) => (
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
const state = function (state) {
  return {
    products: state.categories.currentCategory.products,
    currencies: state.currencies,
  };
};

const dispatch = (dispatch) => {
  return {
    getCategories: () => dispatch(fetchCategory()),
    getCurrency: () => dispatch(fetchCurrency()),
  };
};

export default connect(state, dispatch)(Products);
