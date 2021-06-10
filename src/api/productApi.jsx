const productApi = {
  product: (strUrl) => {
    return fetch(
      `http://cfd-reactjs.herokuapp.com/product?${strUrl}`
    ).then((res) => res.json());
  },
  category: () => {
    return fetch(`http://cfd-reactjs.herokuapp.com/categories`).then((res) =>
      res.json()
    );
  },

  productDetail: (slug) => {
    return fetch(
      `http://cfd-reactjs.herokuapp.com/product?slug=${slug}`
    ).then((res) => res.json());
  },
};
export default productApi;
