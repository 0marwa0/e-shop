import React from "react";
class index extends React.Component {
  render() {
    let gallery = this.props.gallery;
    return (
      <div className="product-gallery">
        <div className="product-images">
          {gallery?.map((src, i) => (
            <div key={i}>
              <img src={src} width="100%" height="100%" alt="product" />
            </div>
          ))}
        </div>

        <div className="main-image">
          <img
            width="100%"
            height="100%"
            src={gallery ? gallery[0] : ""}
            alt="product"
          />
        </div>
      </div>
    );
  }
}

export default index;
