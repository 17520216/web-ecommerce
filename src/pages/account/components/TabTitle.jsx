import { NavLink, useRouteMatch } from "react-router-dom";
import { logout } from "../../../redux/action/user";
import { useDispatch } from "react-redux";

export default function TabTitle() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  function test() {
    console.log("run");
  }
  return (
    <div className="col-12 col-md-3">
      {/* Nav */}
      <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to={`${url}/orders`}
          >
            Orders
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle"
            to={`${url}/wishlist`}
          >
            Widhlist
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to={`${url}/person`}
          >
            Personal Info
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to={`${url}/address`}
          >
            Addresses
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to={`${url}/payment`}
            onClick={test()}
          >
            Payment Methods
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle"
            to={`/auth`}
            onClick={() => dispatch(logout())}
          >
            Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
