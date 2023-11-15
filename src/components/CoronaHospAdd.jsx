import axios from "axios";
import React, { useState } from "react";
import CoronaHospNavbar from "./CoronaHospNavbar";

const CoronaHospAdd = () => {
  const [data, changeData] = useState({
    state: "",
    ruralHospitals: "",
    ruralBeds: "",
    urbanHospitals: "",
    urbanBeds: "",
    totalHospitals: "",
    totalBeds: "",
    asOn: "",
  });

  const inputHandler = (event) => {
    changeData({ ...data, [event.target.name]: event.target.value });
  };

  const readValue = () => {
    console.log(data);
  };

  return (
    <div>
      <div>
        <CoronaHospNavbar />

        <div class="container">
          <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">
                    State:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="state"
                    value={data.state}
                    onChange={inputHandler}
                  />
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">
                    Rural Hospitals:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="ruralHospitals"
                    value={data.ruralHospitals}
                    onChange={inputHandler}
                  />
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">
                    Rural Beds:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="ruralBeds"
                    value={data.ruralBeds}
                    onChange={inputHandler}
                  />
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">
                    Urban Hospitals:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="urbanHospitals"
                    value={data.urbanHospitals}
                    onChange={inputHandler}
                  />
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">
                    Urban Beds:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="urbanBeds"
                    value={data.urbanBeds}
                    onChange={inputHandler}
                  />
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">
                    Total Hospitals:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="totalHospitals"
                    value={data.totalHospitals}
                    onChange={inputHandler}
                  />
                </div>

                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">
                    Total Beds:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="totalBeds"
                    value={data.totalBeds}
                    onChange={inputHandler}
                  />
                </div>

                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={readValue} className="btn btn-success">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoronaHospAdd;
