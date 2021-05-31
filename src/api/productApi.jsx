const productApi = {
  product: (page) => {
    return fetch(`https://cfd-reactjs.herokuapp.com/product?page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
};
export default productApi;
