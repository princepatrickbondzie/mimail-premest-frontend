import React, { useState, useEffect } from "react";
import "../index.css";
import { useNavigate, Link } from "react-router-dom";
import { useUserState } from "../../../state/store";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Signin = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const setUser = useUserState((state) => state.setUser);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { user } = await fetchQuery({
      uri: "http://localhost:9000/api/login",
      method: "POST",
      body: { ...state },
    });
    setUser({ user });
    
    navigate("/");
  };

  return (
    <div className="signin">
      <form className="signin-form" action="" onSubmit={handleSubmit}>
        <h2>Signin</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">Signin</button>
        <div className="txt">
          <h4>
            Don't have an account? <Link to="/signup">Sigup here</Link>
          </h4>
        </div>
      </form>
    </div>
  );
};

export default Signin;
