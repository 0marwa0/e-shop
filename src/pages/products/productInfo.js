import React from "react";
import withRouter from "../../components/Hoc/index";
import { fetchProduct } from "../../store/productSlice";
import { fetchCurrency } from "../../store/currencySlice";
import { addProduct, getCart, removeProduct } from "../../store/cartSlice";
import { connect } from "react-redux";
import Attributes from "../../components/product/Attributes";
import ProductGallery from "../../components/product/ProductGallery";
import { getPrice, updatedSelectedValue } from "../../utlizeFun";
class ProductInfo extends React.Component {
  state = {
    validItem: false,
    attributes: [],
  };
  componentDidMount() {
    this.props.getProduct(this.props.id);
    this.props.getCurrency();
    this.props.getCart();
  }

  validItems = (items) => {
    let attributes = this.props.products.attributes;
    this.setState(() => ({
      attributes: updatedSelectedValue(attributes, items),
    }));
  };
  addItem = (item) => {
    let { name, id, brand, prices, gallery } = item;
    let attributes = this.props.products.attributes;
    let currentAttributes = this.state.attributes;
    let product = {
      name,
      id,
      brand,
      prices,
      gallery,
      count: 1,
      attributes: currentAttributes,
    };
    if (attributes.length > 0) {
      if (currentAttributes.length === attributes.length) {
        this.props.addProduct(product);
        //clear currentAttributes state
      } else {
        alert("please select attributes");
      }
    } else {
      this.props.addProduct(product);
      //clear currentAttributes state
    }
  };
  render() {
    let product = this.props.products;
    let { id, brand, name, gallery, prices, description } = product;
    let price = getPrice(prices, this.props.selectedCurrency);
    let inCart = this.props.cart?.some((item) => item.id === id);

    return (
      <div className="product-info-page">
        <ProductGallery gallery={gallery} />
        <div className="product-info">
          <h1>{brand}</h1>
          <h1>{name}</h1>
          <Attributes validItems={this.validItems} product={product} />
          <small>
            Note: the fist attribute will be chosen, if you didn't choose any
          </small>
          <div className="Attribute-holder">
            PRICE:
            <h1>{this.props.selectedCurrency + price}</h1>
          </div>

          <button
            className="AddToCart"
            onClick={() =>
              inCart
                ? this.props.removeProduct(id)
                : this.addItem(this.props.products)
            }
          >
            {inCart ? "REMOVE FROM CART" : "ADD TO CART"}
          </button>
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
    cart: state.cart.items,
    selectedCurrency: state.currencies.selectedCurrency,
  };
};
const dispatch = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchProduct(id)),
    getCurrency: () => dispatch(fetchCurrency()),
    addProduct: (item) => dispatch(addProduct(item)),
    getCart: () => dispatch(getCart()),
    removeProduct: (id) => dispatch(removeProduct(id)),
  };
};
export default connect(data, dispatch)(withRouter(ProductInfo));
