import { Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart, increase, decrease } from "../redux/action/cart";
import { numberWithCommas } from "../utils/format";

export default function ModalCart() {
  const { listCart, num, amount } = useSelector((state) => state.cart);

  return ReactDOM.createPortal(
    <div
      className="modal fixed-right fade"
      id="modalShoppingCart"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-vertical" role="document">
        {/* Full cart (add `.d-none` to disable it) */}
        <div className="modal-content">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Header*/}
          <div className="modal-header line-height-fixed font-size-lg">
            <strong className="mx-auto">Your Cart ({num})</strong>
          </div>
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush">
            {num <= 0 ? (
              <div class="modal-body flex-grow-0 my-auto">
                <h6 class="mb-7 text-center">Your cart is empty 😞</h6>

                <Link class="btn btn-block btn-outline-dark" to="/shop">
                  Continue Shopping
                </Link>
              </div>
            ) : (
              listCart.map((e) => <CartItem key={e._id} {...e} />)
            )}
          </ul>
          {/* Footer */}
          <div className="modal-footer line-height-fixed font-size-sm bg-light mt-auto">
            <strong>Subtotal</strong>{" "}
            <strong className="ml-auto">{numberWithCommas(amount)}</strong>
          </div>
          {/* Buttons */}
          <div className="modal-body">
            <Link className="btn btn-block btn-dark" to="/ship">
              Continue to Checkout
            </Link>
            <a
              className="btn btn-block btn-outline-dark"
              href="./shopping-cart.html"
            >
              View Cart
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root1")
  );
}

export function CartItem(props) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="./product.html">
            <img
              className="img-fluid"
              src={props.images[0].medium_url}
              alt="..."
            />
          </a>
        </div>
        <div className="col-8">
          {/* Title */}
          <p className="font-size-sm font-weight-bold mb-6">
            <a className="text-body" href="./product.html">
              {props.name}
            </a>{" "}
            <br />
            <span className="text-muted">
              {numberWithCommas(props.real_price)} VND
            </span>
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            <div className="add">
              <button
                className="plus"
                onClick={() => {
                  dispatch(decrease(props._id));
                }}
              >
                -
              </button>
              <input
                type="text"
                className="cartItem-num"
                value={props.numCart}
              />
              <button
                className="minus"
                onClick={() => {
                  dispatch(increase(props._id));
                }}
              >
                +
              </button>
            </div>
            {/* <select className="custom-select custom-select-xxs w-auto">
              <option value={1}>1</option>
              <option value={1}>2</option>
              <option value={1}>3</option>
            </select> */}
            {/* Remove */}
            <a
              className="font-size-xs text-gray-400 ml-auto"
              href="#!"
              onClick={() => dispatch(removeCart(props._id))}
            >
              <i className="fe fe-x" /> Remove
            </a>
          </div>
        </div>
      </div>
    </li>
  );
}
