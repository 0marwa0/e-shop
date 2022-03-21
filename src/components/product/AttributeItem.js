import React from "react";
class index extends React.Component {
  render() {
    let value = this.props.value;
    let { name, type, selected } = this.props.item;
    let isSwatch = type === "swatch" ? true : false;
    console.log(selected);
    return (
      <div
        onClick={() => {
          this.props.onSelect(name, value);
        }}
        className={
          selected === value
            ? "product-size-lg selected-item"
            : "product-size-lg"
        }
        style={{
          border: selected === value ? "6px solid gray" : "",
          backgroundColor: isSwatch ? value : "white",
        }}
      >
        {!isSwatch ? value : ""}
      </div>
    );
  }
}
export default index;
