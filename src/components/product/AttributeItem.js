import React from "react";
class index extends React.Component {
  render() {
    let type = this.props.type;
    let value = this.props.value;
    let name = this.props.name;
    return (
      <div
        onClick={() => {
          this.props.onSelect(name, value);
        }}
        style={{
          //   border:
          //     this.state.selected === value.value || item.selected === value.value
          //       ? "4px solid green"
          //       : "4px solid white",
          backgroundColor: type === "swatch" ? value : "white",
        }}
        className="product-size"
      >
        {type === "text" ? value : ""}
      </div>
    );
  }
}
export default index;
