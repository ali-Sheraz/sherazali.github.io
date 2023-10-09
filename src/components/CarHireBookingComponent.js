import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const CarHireBookingComponent = () => {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  
  const [priceCount, setPriceCount] = useState("");
  const [loginError, setLoginError] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length >= 3 && e.contact.length === 11) {

      axios
        .post("http://localhost:1337/carhire/add/", {
          username,
          contact,
          priceCount,
        })
        .then((result) => {
          console.log(result);
          alert("Car Added Successfully");
        })
        .catch((error) => {
          console.error("Error while sending data:", error);
        });
    }
    else {
      setLoginError("Min Length Required");
    }
  };

return (
  <>

    {/* <!-- Main Content Container --> */}
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div
            className="card blurred-form-background "
            style={{ margin: "20px", height: "600px" }}
          >
            <div className="card-body">
              <h3 className="card-title text-center">Choose Booking</h3>
              <ul className="nav nav-underline nav-justified mt-3 ">
            
                <li className="nav-item ">
                  <Link
                    className="nav-link active"
                    data-toggle="pill"
                    to="/carHire"
                  >
                    Car Hire
                  </Link>
                </li>
              </ul>
              <div className="tab-content mt-4">
        
                <div id="carHire" className="tab-pane fade show active">

                  <form className="form-group" onSubmit={onSubmit}>
                    <div className="form-group ">
                      <label htmlFor="name"> Car Model</label>
                      <input
                        type="text"
                        className="form-control blurred-button"
                        id="name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                      />
                      {loginError && (
                        <p style={{ color: 'blue', marginTop: '10px' }}>{loginError}</p>
                      )}

                      <label htmlFor="contact"> Contact</label>
                      <input
                        type="text"
                        className="form-control blurred-button"
                        id="contact"
                        onChange={(e) => setContact(e.target.value)}

                      />
                       {loginError && (
                        <p style={{ color: 'blue', marginTop: '10px' }}>{loginError}</p>
                      )}

                    </div>
                    <div className="form-row">
                     
                      <div className="form-group col-md-6">
                        <label htmlFor="Persons">Price</label>
                        <input
                          type="number"
                          className="blurred-button form-control"
                          id="Persons"
                          onChange={(e) => setPriceCount(e.target.value)}

                        />
                      </div>
                    </div>
                 
                    <button className="btn btn-dark   btn-block">
                      Confirm Booking
                    </button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* </div> */}
  </>
);
 };

export default CarHireBookingComponent;
