import "./Login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from "../userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userRedux = useSelector(userData);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Handler
  const inputHandler = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // Life-Cycle Methods
  useEffect(() => {
    console.log(userRedux);

    if (userRedux?.credentials.token !== undefined) {
      navigate('/')
    }
  });

  const logMe = () => {
    // Create fake token
    let fakeToken = {
      token: "wololo",
      name: "Abel",
      email: "Abel@test.com",
      phone: "666555444",
    };

    dispatch(login({credentials:fakeToken}));

    setTimeout(() => {
      navigate('/');
    }, 1500)

  };

  return (
    <div className="login-container">
      <div className="login-box">
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => inputHandler(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => inputHandler(e)}
        />
        <button onClick={() => logMe()}>Login</button>
      </div>
    </div>
  );
}

export default Login;
