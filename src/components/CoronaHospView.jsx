import React, { useEffect, useState } from "react";
import axios from "axios";
import CoronaHospNavbar from "./CoronaHospNavbar";

const CoronaHospView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://api.rootnet.in/covid19-in/hospitals/beds")
      .then((response) => {
        changeData(response.data.data.regional);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <CoronaHospNavbar />
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Rural Hospital</th>
                        <th scope="col">State</th>
                        <th scope="col">Rural Beds</th>
                        <th scope="col">Urban Beds</th>
                        <th scope="col">Urban Hospital</th>
                        <th scope="col">Total Beds</th>
                        <th scope="col">Total Hospital</th>
                        <th scope="col">As On</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((value, index) => {
                        return (
                          <tr>
                            <td>{value.ruralHospitals}</td>
                            <td>{value.state}</td>
                            <td>{value.ruralBeds}</td>
                            <td>{value.urbanBeds}</td>
                            <td>{value.urbanHospitals}</td>
                            <td>{value.totalBeds}</td>
                            <td>{value.totalHospitals}</td>
                            <td>{value.asOn}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoronaHospView;
