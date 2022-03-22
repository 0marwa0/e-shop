import React from "react";
class index extends React.Component {
  state = { loading: true };
  componentWillReceiveProps(nextProps) {
    if (nextProps.item?.id !== this.props.item?.id) {
      this.setState({ loading: true });
    }
  }
  render() {
    let loading = this.state.loading;
    let src = loading
      ? require("../../assetes/Icons/Loading.gif")
      : this.props.src;

    return (
      <div style={{ overflow: "hidden" }}>
        <img
          src={src}
          alt=""
          width="100%"
          onLoadedDataCapture={() => this.setState({ loading: true })}
          onLoad={() => this.setState({ loading: false })}
        />
      </div>
    );
  }
}

export default index;
