import React from "react";
import "./Model/index.css";
import CartIcon from "../../assetes/Icons/cart.svg";
import { connect } from "react-redux";
import Cart from "./miniCart";
class Menu extends React.Component {
  render() {
    //const [head, ...tail] = React.Children.toArray(this.props.children);
    return (
      <div className="menu">
        {/* [head] */}
        <div className="cart" onClick={this.props.openModal}>
          <img src={CartIcon} alt="cart" height="25px" />
          <div className="cartItem">{this.props.data?.length}</div>
        </div>
        <div
          onClick={this.props.closeModal}
          className={this.props.isModalOpen ? "out" : ""}
        />
        {/* <div onClick={this.props.closeModal} /> */}
        {this.props.isModalOpen && (
          <div className="open">
            {this.props.children}
            {/* {tail} */}
          </div>
        )}
      </div>
    );
  }
}

class CartModal extends React.Component {
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
    console.log(this.props.cart);
    return (
      <Menu
        isModalOpen={this.state.isModalOpen}
        openModal={this.openModal}
        closeModal={this.closeModal}
        data={this.props.cart}
      >
        <Cart closeModal={this.closeModal} />
      </Menu>
    );
  }
}
const data = (state) => {
  return {
    cart: state.cart.cart.items,
  };
};
export default connect(data)(CartModal);
