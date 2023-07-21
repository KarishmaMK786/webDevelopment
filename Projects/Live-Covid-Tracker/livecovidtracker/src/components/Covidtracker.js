import React, { useEffect, useState } from "react";
import "./Covidtracker.css";

const Covidtracker = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const response = await fetch("https://data.covid19india.org/data.json");
      const data = await response.json();
      console.log(data.statewise[0]);
      setData(data.statewise[0]);
    } catch (err) {
      console.log("err: ", err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <div className="container">
          <ul>
            <li className="card">
              <div className="card_main">
                <div className="card_inner">
                  <p className="card_name">
                    <span> Our </span>
                    COUNTRY
                  </p>
                  <p className="card_total card_small">INDIA</p>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="card">
              <div className="card_main">
                <div className="card_inner">
                  <p className="card_name">
                    <span> Total </span>
                    RECOVERED
                  </p>
                  <p className="card_total card_small">{data.deltarecovered}</p>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="card">
              <div className="card_main">
                <div className="card_inner">
                  <p className="card_name">
                    <span> Total </span>
                    CONFIRMED
                  </p>
                  <p className="card_total card_small">{data.deltaconfirmed}</p>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="card">
              <div className="card_main">
                <div className="card_inner">
                  <p className="card_name">
                    <span> Total </span>
                    DEATHS
                  </p>
                  <p className="card_total card_small">{data.deaths}</p>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="card">
              <div className="card_main">
                <div className="card_inner">
                  <p className="card_name">
                    <span> Total </span>
                    ACTIVE
                  </p>
                  <p className="card_total card_small">{data.active}</p>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li className="card">
              <div className="card_main">
                <div className="card_inner">
                  <p className="card_name">
                    <span> Last </span>
                    UPDATED
                  </p>
                  <p className="card_total card_small">{data.lastupdatedtime}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Covidtracker;
