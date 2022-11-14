import "./Register.css";
import { useState } from "react";
import { errorCheck } from '../../services/inputUseful'

function Register() {

    const [user, setUser] = useState({
        name:'',
        surname:'',
        email:'',
        password1:'',
        password2:'',
    })

    const [userError, setUserError] = useState({
        nameError:'',
        surnameError:'',
        emailError:'',
        password1Error:'',
        password2Error:'',
    })

    const inputHandler = (e) => {
        setUser((prevState) => ({...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const errorHandler = (field, value, type) => {
       
        let error = '';
        error = errorCheck(value, type);

        setUserError((prevState) => ({...prevState,
            [field + 'Error']: error
        }))
    }

  return (
    <div className="register-container">

        <h2>Register</h2>

      <input
        className="input-box"
        type="text"
        placeholder="Nombre"
        name="name"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e.target.name, e.target.value, e.target.type)}
      />
      <div className="input-error">{userError.nameError}</div>
      <input
        className="input-box"
        type="text"
        placeholder="Apellidos"
        name="surname"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e.target.name, e.target.value, e.target.type)}
      />
      <div className="input-error">{userError.surnameError}</div>
      <input
        className="input-box"
        type="email"
        placeholder="Email"
        name="email"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e.target.name, e.target.value, e.target.type)}
      />
      <div className="input-error">{userError.emailError}</div>
      <input
        className="input-box"
        type="password"
        placeholder="Password"
        name="password1"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e.target.name, e.target.value, e.target.type)}
      />
      <div className="input-error">{userError.password1Error}</div>
      <input
        className="input-box"
        type="password"
        placeholder="Repeat your password"
        name="password2"
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => errorHandler(e.target.name, e.target.value, e.target.type)}
      />
      <div className="input-error">{userError.password2Error}</div>
      <button className="btn-register">Send</button>
    </div>
  );
}

export default Register;
