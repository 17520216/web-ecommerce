const userApi = {
  async refreshToken() {
    let { refreshToken } = JSON.parse(localStorage.getItem("tokenUser"));
    let res = await fetch(
      "http://cfd-reactjs.herokuapp.com/elearning/v4/refresh-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: refreshToken,
        }),
      }
    ).then((res) => res.json());
    if (res?.data) {
      localStorage.setItem("tokenUser", JSON.stringify(res.data));
    }
    return true;
  },

  login: (data) => {
    return fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  register: (data) => {
    return fetch("http://cfd-reactjs.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },
  async updateInfo(data) {
    let { accessToken } = JSON.parse(localStorage.getItem("tokenUser"));
    let res = await fetch("http://cfd-reactjs.herokuapp.com/update-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      return res.json();
    } else if (res.status === 403) {
      await userApi.refreshToken();
      let { accessToken } = JSON.parse(localStorage.getItem("tokenUser"));
      return fetch("http://cfd-reactjs.herokuapp.com/update-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      }).then((res) => res.json());
    }
  },
};
export default userApi;
