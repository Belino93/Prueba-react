import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData } from "../../containers/User/userSlice";

function Header() {
  const navigate = useNavigate();

  // Hooks

  const userRedux = useSelector(userData);
  const dispatch = useDispatch();

  //Handlers
  

  if (userRedux?.credentials?.token !== undefined) {
    // User token case

    return (
      <div className="header-container">
        <div className="link-header" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="link-header" onClick={() => navigate("/characters")}>
          Characters
        </div>
        <div className="link-header" onClick={() => navigate("/profile")}>
          Hola {userRedux.credentials.name}
        </div>
      </div>
    );
  }

  return (
    <div className="header-container">
      <div className="link-header" onClick={() => navigate("/")}>
        Home
      </div>
      <div className="link-header" onClick={() => navigate("/characters")}>
        Characters
      </div>
      <div className="link-header" onClick={() => navigate("/register")}>
        Register
      </div>
      <div className="link-header" onClick={() => navigate("/login")}>
        Login
      </div>
    </div>
  );
}

export default Header;
