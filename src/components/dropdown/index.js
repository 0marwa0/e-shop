import React from "react";
import { connect } from "react-redux";
import { fetchCurrency } from "../../store/currencySlice";
import { ReactComponent as DropIcon } from "../../assetes/Icons/dropIcon.svg";
import "./index.css";
class DropDown extends React.Component {
  state = {
    current: this.props.currencies.current,
    currencies: this.props.currencies,
  };
  componentDidMount() {
    this.props.getCurrencies();
  }
  render() {
    console.log(this.props.currencies, "currency");

    return (
      <div>
        <span>
          {this.state.current}
          <DropIcon />
        </span>

        <ul className="model">
          <li>$</li>

          <li>$</li>
        </ul>
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
    //setCurrentCurrency: (data) => dispatch(setCurrency(data)),
  };
};

export default connect(data, dispatch)(DropDown);
