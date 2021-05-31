export default {
  login: (data) => {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
};
