import SideBar from "./component/SideBar";
import Slider from "./component/Silder";
import Head from "./component/Head";
import ProductItem from "./component/ProductItem";
import { useEffect } from "react";
import { fetchProduct, setLoading } from "../../redux/action/product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Paging from "../../components/Paging";

function getPage() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("page");
}

export default function Shop() {
  const dispatch = useDispatch();
  const { product, paging } = useSelector((state) => state.product);
  const page = getPage();

  useEffect(() => {
    dispatch(fetchProduct(page || 1));
  }, [page]);
  return (
    <>
      <section className="py-11">
        <div className="container">
          <div className="row">
            <SideBar />
            <div className="col-12 col-md-8 col-lg-9">
              <Slider />
              <Head />
              {/* Tags */}
              <div className="row mb-7">
                <div className="col-12">
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    Shift dresses{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    Summer{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    M{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    White{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    Red{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    Adidas{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    $10.00 - $49.00{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                  <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                    $50.00 - $99.00{" "}
                    <a className="text-reset ml-2" href="#!" role="button">
                      <i className="fe fe-x" />
                    </a>
                  </span>
                </div>
              </div>
              {/* Products */}
              <div className="row">
                {product?.data?.map((e, i) => (
                  <ProductItem key={i} {...e} />
                ))}
              </div>
              {/* Pagination */}
              <Paging {...paging} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
