import React from "react";
import Products from "./pages/products";

import Navbar from "./components/navbar";
class App extends React.Component {
  //  constructor(props) {
  //   super(props);
  //  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <Navbar />
        <Products />
      </div>
    );
  }
}

export default App;
