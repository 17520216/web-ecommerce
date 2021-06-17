import Api from "../core/ClassApi";
const userApi = {
  login: (data) => {
    return Api.post("login", data);
  },
  register: (data) => {
    return Api.post("register", data);
  },
  async updateInfo(data) {
    return Api.token().post("update-profile", data);
  },
};
export default userApi;
