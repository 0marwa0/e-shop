import React from "react";
import "./index.css";
import CartIcon from "../../../assetes/Icons/cart.svg";
import { connect } from "react-redux";
import MiniCart from "./miniCart";
import { showModal, closeModal } from "../../../store/modalSlice";
class index extends React.Component {
  render() {
    return (
      <div className="cart-modal">
        <div
          onClick={(e) => {
            window.scroll(0, 0);
            this.props.showModal();
            e.stopPropagation();
          }}
        >
          <img src={CartIcon} alt="cart" height="25px" />
          <div className="cart-num">{this.props.cart?.length || 0}</div>
        </div>
        <div
          onClick={this.props.closeModal}
          className={this.props.modal.showModal ? "overlay" : ""}
        />
        {this.props.modal.showModal && (
          <div className="modal-content">
            <MiniCart
              showMiniCart={this.props.showModal}
              closeModal={this.props.closeModal}
            />
          </div>
        )}
      </div>
    );
  }
}
const state = (state) => {
  return {
    cart: state.cart.items,
    modal: state.modal,
  };
};
const dispatch = (dispatch) => {
  return {
    showModal: () => dispatch(showModal()),
    closeModal: () => dispatch(closeModal()),
  };
};
export default connect(state, dispatch)(index);
