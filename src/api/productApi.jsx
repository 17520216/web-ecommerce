import Api from "../core/ClassApi";
const productApi = {
  product: (strUrl) => {
    return Api.get(`product?${strUrl}`);
  },
  category: () => {
    return Api.get(`categories`);
  },

  productDetail: (slug) => {
    return fetch(
      `http://cfd-reactjs.herokuapp.com/product?slug=${slug}`
    ).then((res) => res.json());
  },
  searchProduct: (slug) => {
    return Api.get(`product?title=${slug}`);
  },
};
export default productApi;
