import React from "react";
import "./index.css";
class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal-holder"
        style={{
          display: this.props.isModalOpen ? "block" : "none",
        }}
      >
        <div className="overlay" onClick={this.props.closeModal} />
        <div onClick={this.props.closeModal} />
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}

// overwrite style
const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0,0.5)",
  },
};

class PopupModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({
      isModalOpen: false,
    });
  }

  openModal() {
    this.setState({
      isModalOpen: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open modal</button>

        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          style={modalStyle}
        >
          <button
            style={{
              margin: 0,
              width: "auto",
              marginTop: 10,
            }}
            onClick={this.closeModal}
          >
            Close
          </button>
        </Modal>
      </div>
    );
  }
}
export default PopupModal;
