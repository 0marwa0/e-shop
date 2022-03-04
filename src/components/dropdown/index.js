import React from "react";
import { connect } from "react-redux";
import { fetchCurrency, setCurrency } from "../../store/currencySlice";
import { ReactComponent as DropIcon } from "../../assetes/Icons/dropIcon.svg";
import "./index.css";
class DropDown extends React.Component {
  state = {
    selectedCurrency: this.props.currencies.selectedCurrency,
    currencies: this.props.currencies,
    items: this.props.currencies.currencies,
    showItems: false,
  };
  dropDown = () => {
    this.setState((prevState) => ({
      showItems: !prevState.showItems,
    }));
  };

  selectItem = (item) => {
    this.props.changeCurrency(item);
    this.setState({
      showItems: false,
      selectedCurrency: item,
    });
  };
  componentDidMount() {
    this.props.getCurrencies();
  }
  render() {
    return (
      <div className="select-box--box">
        <div className="select-box--container">
          <div className="select-box--arrow" onClick={this.dropDown}>
            {this.state.selectedCurrency} <DropIcon />
          </div>

          <div
            style={{ display: this.state.showItems ? "block" : "none" }}
            className={"select-box--items"}
          >
            {this.props.currencies.currencies.map((item) => (
              <div key={item.id} onClick={() => this.selectItem(item.symbol)}>
                {item.symbol}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const data = function (state) {
  return {
    currencies: state.currencies,
  };
};

const dispatch = (dispatch) => {
  return {
    getCurrencies: () => dispatch(fetchCurrency()),
    changeCurrency: (data) => dispatch(setCurrency(data)),
  };
};

export default connect(data, dispatch)(DropDown);
