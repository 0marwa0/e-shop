import React from "react";
import "./cart.css";
import { connect } from "react-redux";
import Pagination from "../../..//components/pagination";
import EmptyCart from "../../../assetes/Icons/empty_cart.gif";
import CartItem from "./miniCartItem";
import CartControl from "./miniCartControl";
import { totalPrice } from "../../../utlizeFun";
import { closeDropdown } from "../../../store/dropdownSlice";
class MiniCart extends React.Component {
  state = { currentPage: 1, perPage: 2 };
  nextPage = () => {
    const totalPage = Math.round(this.props.cart.length / this.state.perPage);
    if (totalPage !== this.state.currentPage) {
      console.log(totalPage, this.state.currentPage);
      this.setState(() => ({
        currentPage: this.state.currentPage + 1,
      }));
    }
  };

  prevPage = () => {
    if (this.state.currentPage > 1)
      this.setState(() => ({
        currentPage: this.state.currentPage - 1,
      }));
  };

  render() {
    let items = this.props.cart;
    let currency = this.props.selectedCurrency;
    let lastIndex = this.state.currentPage * this.state.perPage;
    let firstIndex = lastIndex - this.state.perPage;
    let products = items?.slice(firstIndex, lastIndex);
    let totalPages = Math.ceil(this.props.cart?.length / this.state.perPage);
    let totalCost = currency + " " + totalPrice(items, currency);
    return (
      <>
        <div
          className="mini-cart"
          onClick={(e) => {
            e.stopPropagation();
            this.props.showMiniCart();
            this.props.hideDropDown();
          }}
        >
          <div className="mini-cart-title">
            My bag {items?.length || 0} item
          </div>
          {products.length !== 0 ? (
            products.map((item) => <CartItem data={item} />)
          ) : (
            <div className="center">
              <img src={EmptyCart} alt="empty cart" />
            </div>
          )}
        </div>
        <div className="mini-cart-total">
          <span>total :</span>
          {totalCost}
        </div>
        {totalPages > 1 ? (
          <div className="center">
            <Pagination
              totalPage={totalPages}
              currentPage={this.state.currentPage}
              onPrev={this.prevPage}
              onNext={this.nextPage}
            />
          </div>
        ) : (
          ""
        )}
        <CartControl items={items} closeModal={this.props.closeModal} />
      </>
    );
  }
}
const state = (state) => {
  return {
    selectedCurrency: state.currencies.selectedCurrency,
    cart: state.cart.items,
  };
};
const dispatch = (dispatch) => {
  return {
    hideDropDown: dispatch(closeDropdown()),
  };
};
export default connect(state, dispatch)(MiniCart);
