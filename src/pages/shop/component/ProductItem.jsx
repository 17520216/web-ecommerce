import { addCart } from "../../../redux/action/cart";
import { Skeleton } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas } from "../../../utils/format";

export default function ProductItem(props) {
  let { loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { name, images, real_price, rating_average } = props;
  let image1 = images?.[0]?.medium_url;

  let image2 = images?.[0]?.medium_url;
  let tiki = "/img/products/product-7.jpg";

  function handleAddCart() {
    dispatch(addCart({ ...props }));
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
            {loading === true ? (
              <Skeleton variant="rect" width="100%" height={252} />
            ) : (
              <>
                {image1 && (
                  <img
                    className="card-img-top card-img-back"
                    src={
                      image1 === "https://salt.tikicdn.com/assets/img/image.svg"
                        ? tiki
                        : image1
                    }
                    alt="..."
                  />
                )}
                {image2 ? (
                  <img
                    className="card-img-top card-img-front"
                    style={{ height: "100%" }}
                    src={
                      image2 === "https://salt.tikicdn.com/assets/img/image.svg"
                        ? tiki
                        : image2
                    }
                    alt="..."
                  />
                ) : (
                  <img
                    className="card-img-top card-img-back"
                    src={
                      image1 === "https://salt.tikicdn.com/assets/img/image.svg"
                        ? tiki
                        : image1
                    }
                    alt="..."
                  />
                )}
              </>
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
            {/* <a className="text-muted" href="shop.html">
              {loading ? (
                <Skeleton variant="rect" width="100%" height={20} />
              ) : (
                { name }
              )}
            </a> */}
          </div>
          {/* Title */}
          <div class="font-weight-bold">
            <a class="text-body" href="product.html">
              {loading === true ? (
                <Skeleton variant="rect" width="100%" height={20} />
              ) : (
                <>{name}</>
              )}
            </a>
          </div>

          {loading === true ? (
            <Skeleton variant="rect" width="100%" height={20} />
          ) : (
            <div
              class="rating font-size-sm text-dark"
              data-value={rating_average}
            >
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
            </div>
          )}
          {/* Price */}
          <div className="font-weight-bold text-muted">
            {loading === true ? (
              <Skeleton variant="rect" width="100%" height={20} />
            ) : (
              <>{numberWithCommas(real_price)} VND</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
