import React from "react";
import "../Model/index.css";
import CartIcon from "../../../assetes/Icons/cart.svg";
import { connect } from "react-redux";

class index extends React.Component {
  constructor(props) {
    super(props);
    this.modal = React.createRef();
    this.state = {
      isModalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState(() => ({
      isModalOpen: false,
    }));
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  render() {
    let data = this.props.cart;

    return (
      <div className="menu">
        <div className="cart" onClick={this.openModal}>
          <img src={CartIcon} alt="cart" height="25px" />
          <div className="cartItem">{data?.length}</div>
        </div>
        <div
          onClick={this.closeModal}
          className={this.state.isModalOpen ? "out" : ""}
        />
        {this.state.isModalOpen && (
          <div className="open">
            {this.props.children}

            {/* <Cart closeModal={this.closeModal} /> */}
          </div>
        )}
      </div>
    );
  }
}
const state = (state) => {
  return {
    cart: state.cart.cart.items,
  };
};
export default connect(state)(index);
