import React from "react";
import "./cart.css";
import { connect } from "react-redux";
import Pagination from "../../..//components/pagination";
import EmptyCart from "../../../assetes/Icons/empty_cart.gif";
import CartItem from "./miniCartItem";
import CartControl from "./miniCartControl";
import { totalPrice } from "../../../utlizeFun";
class Cart extends React.Component {
  state = { currentPage: 1, perPage: 3 };
  nextPage = () => {
    const totalPage = Math.ceil(this.props.items.length / this.state.perPage);
    if (totalPage !== this.state.currentPage) {
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
    items = items?.slice(firstIndex, lastIndex);
    let totalPages = Math.round(this.props.cart?.length / this.state.perPage);
    let totalCost = currency + " " + totalPrice(items, currency);
    return (
      <>
        <div
          className="mini-cart"
          onClick={(e) => {
            e.stopPropagation();
            this.props.showDropdown();
          }}
        >
          <div className="mini-cart-title">
            My bag {items?.length || 0} item
          </div>
          {items ? (
            items.map((item) => <CartItem data={item} />)
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
const data = (state) => {
  return {
    selectedCurrency: state.currencies.selectedCurrency,
    cart: state.cart.items,
  };
};
export default connect(data)(Cart);
