import React, { useState } from "react";
import CoronaHospNavbar from "./CoronaHospNavbar";

const CoronaHospDelete = () => {
  const [inputField, changeInputField] = useState({
    pathentId: "",
  });

  const inputHandler = (newEvent) => {
    changeInputField({
      ...inputField,
      [newEvent.target.name]: newEvent.target.value,
    });
  };

  const readValue = () => {
    console.log(inputField);
  };
  return (
    <div>
      <CoronaHospNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">
                  Patient Id:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="pathentId"
                  value={inputField.pathentId}
                  onChange={inputHandler}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={readValue} className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoronaHospDelete;
