import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginComponent = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:1337/login", {
        email,
        password,
      });

      if (response.status === 200) {
        console.log(response.data.message); // Authentication successful message
        console.log(response.data.token);
        navigate("/carhire");
      }
    } catch (err) {
      console.log("Error:", err);
      alert("Error: Try Again");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div
              className="card blurred-form-background"
              style={{ margin: "40px", height: "600px" }}
            >
              <div className="card-body">
                <ul className="nav nav-underline nav-justified mt-3">
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      data-toggle="pill"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link"
                      data-toggle="pill"
                      to="/registration"
                    >
                      Register Yourself
                    </Link>
                  </li>
                </ul>
                <div className="tab-content mt-4">
                  {/* Login Option */}
                  <div id="flights" className="tab-pane fade show active">

                    <form className="form-group" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                          type="email"
                          className="form-control blurred-button"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                          type="text"
                          className="form-control blurred-button"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <br />
                      <button type="submit" className="btn btn-dark btn-block">
                        Login
                      </button>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
