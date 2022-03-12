import React from "react";

class Attributes extends React.Component {
  state = {
    selectedItems: [],
    savedAttributes: this.props.savedAttributes
      ? this.props.savedAttributes[0]?.attributes
      : this.props.values,
    selected: "",
  };

  selectedItem = (name, item) => {
    let selectedItem = this.state.selectedItems ? this.state.selectedItems : [];
    let newItems = selectedItem.filter(function (item) {
      return item.name !== name;
    });
    this.setState(
      () => ({
        selectedItems: [...newItems, { name, item }],
      }),
      () => {
        this.props.validItems(this.state.selectedItems);
      }
    );
  };
  render() {
    let attributes = this.state.savedAttributes;

    console.log(this.props.savedAttributes, "Selected");
    return (
      <div>
        {attributes
          ? attributes.map((item) => (
              <div className="Attribute-holder">
                <p>{item.name + " :"}</p>
                {item.name === "Color" ? (
                  <div className="flex">
                    {console.log(item.selected, "hell yea")}
                    {item.items.map((value) => (
                      <div
                        onClick={() => {
                          this.setState(() => ({ selected: value.value }));
                          this.selectedItem(item.name, value.value);
                        }}
                        style={{
                          border:
                            this.state.selected === value.value ||
                            item.selected === value.value
                              ? "4px solid green"
                              : "4px solid white",
                          backgroundColor: `${value.value}`,
                        }}
                        className="product-size"
                      ></div>
                    ))}
                  </div>
                ) : (
                  <div className="flex">
                    {item.items.map((value) => (
                      <div
                        className="product-size"
                        onClick={() =>
                          this.selectedItem(item.name, value.value)
                        }
                      >
                        {value.value}
                      </div>
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
