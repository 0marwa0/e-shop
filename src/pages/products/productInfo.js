import React from "react";
import withRouter from "./Hoc/index";
import { fetchProduct } from "../../store/productSlice";
import { fetchCurrency } from "../../store/currencySlice";
import { addProduct } from "../../store/cartSlice";
import { connect } from "react-redux";
import Attributes from "./Attributes";
import ProductGallery from "./ProductGallery";
class ProductInfo extends React.Component {
  state = {
    validItem: false,
    attributes: [],
  };
  componentDidMount() {
    this.props.getProduct(this.props.id);
    this.props.getCurrency();
  }

  validItems = (items) => {
    let attributes = this.props.products.attributes;
    let updatedAttributes = [];
    for (let i = 0; i < attributes.length; i++) {
      const attribute = attributes[i];
      for (let j = 0; j < items.length; j++) {
        const element = items[j];
        if (attribute.name === element.name) {
          updatedAttributes.push({
            name: attribute.name,
            selected: element.item,
            items: [...attribute.items],
          });
        }
      }
    }
    this.setState(() => ({
      attributes: updatedAttributes,
    }));
  };
  addItem = (item) => {
    let { name, id, brand, prices, description, gallery } = item;
    let product = {
      name,
      id,
      brand,
      prices,
      description,
      gallery,
      count: 1,
      attributes: this.state.attributes,
    };
    if (this.props.products.attributes.length > 0) {
      if (
        this.state.attributes.length === this.props.products.attributes.length
      ) {
        this.props.addProduct(product);
      } else {
        alert("please select attributes");
      }
    } else {
      this.props.addProduct(product);
    }

    console.log("done");
  };
  render() {
    let product = this.props.products;
    let { brand, name, gallery, prices, attributes, description } = product;
    let price = prices
      ? prices.filter(
          (price) => price["currency"]["symbol"] === this.props.selectedCurrency
        )[0].amount
      : "";

    return (
      <div className="product-info-page">
        <ProductGallery gallery={gallery} />
        <div className="product-info">
          <h1>{brand}</h1>
          <h1>{name}</h1>
          <Attributes values={attributes} validItems={this.validItems} />
          <div className="Attribute-holder">
            PRICE:
            <h1>{this.props.selectedCurrency + price}</h1>
          </div>

          <button
            className="AddToCart"
            onClick={() => this.addItem(this.props.products)}
          >
            ADD TO CART
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
    selectedCurrency: state.currencies.selectedCurrency,
  };
};
const dispatch = (dispatch) => {
  return {
    getProduct: (id) => dispatch(fetchProduct(id)),
    getCurrency: () => dispatch(fetchCurrency()),
    addProduct: (item) => dispatch(addProduct(item)),
  };
};
export default connect(data, dispatch)(withRouter(ProductInfo));
