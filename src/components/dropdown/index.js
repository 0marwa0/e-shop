import React from "react";
import { connect } from "react-redux";
import { fetchCurrency, setCurrency } from "../../store/currencySlice";
import dropIcon from "../../assetes/Icons/dropIcon.svg";
import "./index.css";
import { showDropdown, closeDropdown } from "../../store/dropdownSlice";
class DropDown extends React.Component {
  state = {
    selectedCurrency: this.props.currencies.selectedCurrency,
    currencies: this.props.currencies,
    items: this.props.currencies.currencies,
  };

  selectItem = (item) => {
    this.props.changeCurrency(item);
    this.setState({
      showItems: false,
      selectedCurrency: item,
    });
    this.props.getCurrencies();
  };
  componentDidMount() {
    this.props.getCurrencies();
  }
  render() {
    return (
      <div className="select-box--box">
        <div className="select-box--container">
          <div
            className="select-box--arrow"
            onClick={(e) => {
              e.stopPropagation();
              this.props.showDropdown();
            }}
          >
            {this.state.selectedCurrency}{" "}
            <img src={dropIcon} alt="icon" height="6px" />
          </div>

          <div
            style={{ display: this.props.dropdown.show ? "block" : "none" }}
            className={"select-box--items"}
          >
            {this.props.currencies.currencies.map((item) => (
              <div key={item.id} onClick={() => this.selectItem(item.symbol)}>
                {item.symbol} {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const state = function (state) {
  return {
    currencies: state.currencies,
    dropdown: state.dropdown,
  };
};

const dispatch = (dispatch) => {
  return {
    getCurrencies: () => dispatch(fetchCurrency()),
    changeCurrency: (data) => dispatch(setCurrency(data)),
    showDropdown: () => dispatch(showDropdown()),
    closeDropdown: () => dispatch(closeDropdown()),
  };
};

export default connect(state, dispatch)(DropDown);
