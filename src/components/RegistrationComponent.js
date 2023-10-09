import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import HotelBookingComponent from './HotelBookingComponent';
const RegistrationComponent = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
     await axios
      .post("http://localhost:1337/users/add/", { username, password, email })
      .then((response) => {
        alert(response.data.message); // Registration successful message
        console.log(response.data.message); // Registration successful message
        console.log(response.data.token);

        navigate("/login");
      })
      .catch((err) => console.log("Error in Registration"));

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
                <h3 className="card-title text-center">Login</h3>
                <ul className="nav nav-underline nav-justified mt-3">
                  <li className="nav-item ">
                    <Link
                      className="nav-link  "
                      aria-current="page"
                      data-toggle="pill"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      data-toggle="pill"
                      to="/registration"
                    >
                      Register Yourself
                    </Link>
                  </li>
                </ul>
                <div className="tab-content mt-4">
                  {/* <!-- Login Option --> */}
                  <div id="flights" className="tab-pane fade show active">
             
                    <form className="form-group" onSubmit={handleSubmit}>
                      <label htmlFor="name"> Username</label>
                      <input
                        type="text"
                        className="form-control blurred-button"
                        id="username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label htmlFor="email"> E-mail</label>
                      <input
                        type="email"
                        className="form-control blurred-button"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <label htmlFor="contact"> Password</label>
                      <input
                        type="Password"
                        className="form-control blurred-button"
                        id="Password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <br />

                      <button className="btn btn-dark  btn-block ">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default RegistrationComponent;
