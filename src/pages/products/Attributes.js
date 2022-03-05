import React from "react";

class Attributes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let attributes = this.props.values;
    return (
      <div>
        {attributes
          ? attributes.map((item) => (
              <div className="Attribute-holder">
                <p>{item.name + " :"}</p>
                {item.name === "Color" ? (
                  <div className="flex">
                    {item.items.map((value) => (
                      <div
                        style={{ backgroundColor: `${value.value}` }}
                        className="product-size"
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="flex">
                    {item.items.map((value) => (
                      <div className="product-size">{value.value}</div>
                    ))}
                  </div>
                )}
              </div>
            ))
          : ""}
      </div>
    );
  }
}

export default Attributes;
