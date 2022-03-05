import React from "react";
import withRouter from "./Hoc/index";
import { fetchProduct, getProductById } from "../../store/productSlice";
import { fetchCurrency } from "../../store/currencySlice";
import { connect } from "react-redux";
import Attributes from "./Attributes";
import img from "../../assetes/Icons/cart.svg";
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getProduct(this.props.id);
    this.props.getCurrency();
    //this.props.getProductById();
  }
  render() {
    let product = this.props.products;
    let { brand, name, gallery, prices, attributes, description } = product;
    let price = prices
      ? prices.filter(
          (price) => price["currency"]["symbol"] === this.props.selectedCurrency
        )[0].amount
      : "";
    console.log("router props", attributes);

    return (
      <div className="product-info-page">
        <div className="product-gallery">
          <div className="product-images">
            <div>
              <img src={gallery ? gallery[1] : ""} width="100%" height="100%" />
            </div>
            <div>
              <img src={gallery ? gallery[2] : ""} width="100%" height="100%" />
            </div>
            <div>
              <img src={gallery ? gallery[3] : ""} width="100%" height="100%" />
            </div>
          </div>
          <div className="main-image">
            <img width="100%" height="100%" src={gallery ? gallery[0] : ""} />
          </div>
        </div>
        <div className="product-info">
          <h1>{brand}</h1>
          <h1>{name}</h1>
          <Attributes values={attributes} />

          <div className="Attribute-holder">
            PRICE:
            <h1>{this.props.selectedCurrency + price}</h1>
          </div>
          <button className="AddToCart">ADD TO CART</button>

          <div
            className="product-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    );
  }
}
const data = (state) => {
  return {
    products: state.products.product,
    selectedCurrency: state.currencies.selectedCurrency,
    //product: state.product.product,
  };
};
const dispatch = (dispatch) => {
  return {
    getProduct: (data) => dispatch(fetchProduct(data)),
    getCurrency: () => dispatch(fetchCurrency()),
    //getProductById: (id) => dispatch(getProductById(id)),
  };
};
export default connect(data, dispatch)(withRouter(ProductInfo));
