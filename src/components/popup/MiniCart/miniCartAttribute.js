import React from "react";
class index extends React.Component {
  state = {};
  render() {
    return (
      <div className="attributes-holder">
        {this.props.items?.map((item) => (
          <span className="attributes-item">
            <span style={{ width: "max-content" }}>{item.name}</span>
            <div
              className="product-size-sm"
              style={{ background: item.type ? item.selected : "white" }}
            >
              {item.type === "text" ? item.selected : ""}
            </div>
          </span>
        ))}
      </div>
    );
  }
}

export default index;
