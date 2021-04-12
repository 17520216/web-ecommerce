import { addCart } from "../../../redux/action/cart";
import { useDispatch } from "react-redux";

export default function ProductItem(props) {
  const dispatch = useDispatch();

  const { name, images, real_price } = props;
  let image1 = images?.[0]?.medium_url;

  let image2 = images?.[0]?.medium_url;
  function handleAddCart() {
    dispatch(addCart(props));
  }

  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="badge badge-white card-badge card-badge-left text-uppercase">
          New
        </div>
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          <a className="card-img-hover" href="product.html">
            {image1 && (
              <img
                className="card-img-top card-img-back"
                src={image1}
                alt="..."
              />
            )}
            {image2 ? (
              <img
                className="card-img-top card-img-front"
                src={image2}
                alt="..."
              />
            ) : (
              <img
                className="card-img-top card-img-back"
                src={image1}
                alt="..."
              />
            )}
          </a>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="modal"
                data-target="#modalProduct"
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
                onClick={handleAddCart}
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            <a className="text-muted" href="shop.html">
              {name}
            </a>
          </div>
          {/* Title */}
          <div className="font-weight-bold">
            <a className="text-body" href="product.html">
              Leather mid-heel Sandals
            </a>
          </div>
          {/* Price */}
          <div className="font-weight-bold text-muted">${real_price}</div>
        </div>
      </div>
    </div>
  );
}