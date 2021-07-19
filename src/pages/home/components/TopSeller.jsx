import { useState, useEffect } from "react";
import ProductItem from "../../shop/component/ProductItem";
import { useDispatch } from "react-redux";
import { actionLoading } from "../../../redux/action/product";
export default function TopSeller() {
  const [state, setState] = useState();
  const [dataRender, setDataRender] = useState();
  let dispatch = useDispatch();
  useEffect(async () => {
    dispatch(actionLoading());

    let res = await fetch(
      `https://cfd-reactjs.herokuapp.com/product?sort=real_price.-1&categories=1789&page=3`
    ).then((res) => res.json());
    let res1 = await fetch(
      `https://cfd-reactjs.herokuapp.com/product?categories=17166&sort=real_price.-1`
    ).then((res) => res.json());
    let res2 = await fetch(
      ` https://cfd-reactjs.herokuapp.com/product?categories=8594&sort=real_price.-1`
    ).then((res) => res.json());

    if (res.data) {
      dispatch({
        type: "loadingHome",
      });
    }
    setState({
      res: res.data,
      res1: res1.data,
      res2: res2.data,
    });
    setDataRender(res.data);
  }, []);

  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <h2 className="mb-4 text-center">Top month Sellers</h2>
            {/* Nav */}
            <div className="nav justify-content-center mb-10">
              <a
                className="nav-link active"
                href="#topSellersTab"
                data-toggle="tab"
                onClick={() => setDataRender(state.res)}
              >
                Smart Phone
              </a>
              <a
                className="nav-link"
                href="#topSellersTab"
                data-toggle="tab"
                onClick={() => setDataRender(state.res1)}
              >
                Hàng Quốc Tế
              </a>
              <a
                className="nav-link"
                href="#topSellersTab"
                data-toggle="tab"
                onClick={() => setDataRender(state.res2)}
              >
                Moto
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="topSellersTab">
            <div className="row">
              {dataRender &&
                dataRender.map((e) => <ProductItem home key={e._id} {...e} />)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Link  */}
            <div className="mt-7 text-center">
              <a className="link-underline" href="#!">
                Discover more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
