import React from "react";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";

function ProductTile(props) {

  return (
    <div
      className={
        props.purpose === "cartDisplay"
          ? "col-md-4 col-sm-6 col-lg-2"
          : "col-md-6 col-sm-12 col-lg-3"
      }
    >
      <div className="card shadow shadow-sm mb-4">
        <img
          alt="product_image"
          className="card-img-top"
          src={props.product.image}
        />
        <div className="card-body ">
          <small
            className="text-justify"
            style={{
              fontWeight: "bold"
            }}
          >
            {props.product.name.substring(0, 30)}...
          </small>

          <h6 className="text-left font-weight-bold">{props.product.brand}</h6>

          <p className="text-danger font-weight-bold">
            <span className="font-weight-bold mr-2 text-success">
              ₹{props.product.price}
            </span>
            <small className="font-weight-bold">
              <s>₹{props.product.price + (props.product.price - 300)}</s>
            </small>
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 p-0">
              <AddToCart
                product={props.product}
                key={props.product_id + 123}
                product_id={props.product.product_id}
                cart={props.cart}
              />
            </div>
            <div className="col-6 p-0">
              {/* <AddToCart
                key={props.product_id + 123}
                product_id={props.product.product_id}
                cart={props.cart}
              /> */}

              {/* wishlist  */}
              <AddToWishlist
                product_id={props.product.product_id}
                wishlist={props.wishlist}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
