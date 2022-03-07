import React from "react";
import "./index.css";
class Modal extends React.Component {
  componentDidMount() {
    console.log(this.props.left, "leeeeeeeft");
  }
  render() {
    return (
      <div
        className="modal-holder"
        style={{
          left: "50%",
          //left: this.props.left + "px",
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
    this.modal = React.createRef();
    this.state = {
      isModalOpen: false,
      isInnerModalOpen: false,
      left: "",
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
  componentDidMount() {
    const modal = this.modal.current.getBoundingClientRect();
    this.setState(() => ({ left: modal.left }));
    console.log(modal);
  }
  render() {
    return (
      <div>
        <button onClick={this.openModal} ref={this.modal}>
          Open modal
        </button>
        <Modal
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          style={modalStyle}
          left="300"
        >
          <button
            style={{
              margin: 0,
              width: "auto",
              marginTop: 10,
            }}
            onClick={() => {
              this.closeModal();
              console.log(this.state.left);
            }}
          >
            Close
          </button>
        </Modal>
      </div>
    );
  }
}
export default PopupModal;
