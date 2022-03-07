import React from "react";
import "./Model/index.css";
import Cart from "../../assetes/Icons/cart.svg";
class Menu extends React.Component {
  render() {
    //const [head, ...tail] = React.Children.toArray(this.props.children);
    return (
      <div className="menu">
        {/* [head] */}
        <div className="cart" onClick={this.props.openModal}>
          <img src={Cart} alt="cart" height="25px" />
          <div className="cartItem">2</div>
        </div>
        <div
          onClick={this.props.closeModal}
          className={this.props.isModalOpen ? "out" : ""}
        />{" "}
        <div onClick={this.props.closeModal} />
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
    return (
      <Menu
        isModalOpen={this.state.isModalOpen}
        openModal={this.openModal}
        closeModal={this.closeModal}
      >
        <div className="item">list</div>
        <div className="item">list</div>
        <div className="item">list</div>
      </Menu>
    );
  }
}

export default CartModal;
