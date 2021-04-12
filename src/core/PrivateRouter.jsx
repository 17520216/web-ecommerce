import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRouter(props) {
  const { login } = useSelector((state) => state.user);
  console.log("login private", login);

  return login ? <Route {...props} /> : <Redirect to="/auth" />;
}
