const productApi = {
  product: (strUrl) => {
    console.log("strUrl", strUrl);
    return fetch(`http://cfd-reactjs.herokuapp.com/product?${strUrl}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  category: () => {
    return fetch(`http://cfd-reactjs.herokuapp.com/categories`).then((res) =>
      res.json()
    );
  },
};
export default productApi;
