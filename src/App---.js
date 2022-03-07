import React from "react";
import "./components/dropdown/Model/index.css";
import Products from "./pages/products";
class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { isOpen: false };
  setIsOpen = (value) => {
    this.setState(() => ({
      isOpen: value,
    }));
  };
  render() {
    const [head, ...tail] = React.Children.toArray(this.props.children);
    return (
      <div
        className="menu"
        onMouseEnter={() => this.setIsOpen(true)}
        onMouseLeave={() => this.setIsOpen(false)}
      >
        {head}
        <div className={this.state.isOpen ? "out" : ""} />
        {this.state.isOpen && <div className="open">{tail}</div>}
      </div>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="item" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}
class App extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Menu>
          <Item onClick={() => alert("Link one clicked!")}>Link One</Item>
          <Item onClick={() => alert("Link two clicked!")}>Link Two</Item>
          <Item onClick={() => alert("Link three clicked!")}>Link Three</Item>
        </Menu>
        <Products />
      </div>
    );
  }
}

export default App;
