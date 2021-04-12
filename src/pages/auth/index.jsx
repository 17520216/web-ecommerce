import LoginCus from "./components/LoginCus";
import NewCus from "./components/NewCus";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Auth() {
  const { login } = useSelector((state) => state.user);
  if (login) return <Redirect to="/account/person" />;
  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <LoginCus />
          <NewCus />
        </div>
      </div>
    </section>
  );
}
