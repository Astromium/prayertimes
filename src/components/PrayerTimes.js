import React, { Component } from "react";
import Spinner from "./Spinner";
import "../css/spinner.css";
import { Link } from "react-router-dom";

class PrayerTimes extends Component {
  state = {
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: "",
    name2: ""
  };

  componentDidMount(props) {
    const date = new Date();
    const year = date.getFullYear(),
      month = date.getUTCMonth() + 1,
      day = date.getUTCDate();

    const { name, name2 } = this.props.match.params;

    const api = `https://api.aladhan.com/v1/calendarByCity?city=${name}&country=Algeria&method=4&month=${month}&year=${year}`;

    const res = fetch(api)
      .then(response => response.json())
      .then(response => {
        const prayerOfThisDay = response.data.filter(
          obj => obj.date.gregorian.day === day.toString()
        );

        const { Fajr, Dhuhr, Asr, Maghrib, Isha } = prayerOfThisDay[0].timings;

        this.setState({
          Fajr,
          Dhuhr,
          Asr,
          Maghrib,
          Isha,
          name2
        });
      });
  }

  render() {
    const { Fajr, Dhuhr, Asr, Maghrib, Isha, name2 } = this.state;
    if (Fajr && Dhuhr && Asr && Maghrib && Isha) {
      return (
        <div className="container">
          <br />
          <h3 className="text-light" style={{ textAlign: "center" }}>
            مواقيت الصلاة في ولاية <span className="text-primary">{name2}</span>
          </h3>
          <table
            className="table table-dark table-striped table-bordered mt-4"
            style={{
              width: "80%",
              margin: "auto",
              textAlign: "center"
            }}
          >
            <thead>
              <tr>
                <th scope="row">الوقت</th>
                <th scope="row">الصلاة</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Fajr}</td>
                <td>الفجر</td>
              </tr>
              <tr>
                <td>{Dhuhr}</td>
                <td>الظهر</td>
              </tr>
              <tr>
                <td>{Asr}</td>
                <td>العصر</td>
              </tr>
              <tr>
                <td>{Maghrib}</td>
                <td>المغرب</td>
              </tr>
              <tr>
                <td>{Isha}</td>
                <td>العشاء</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <Link to="/">
            <button
              className="btn btn-primary"
              style={{ display: "flex", alignItems: "center", margin: "auto" }}
            >
              <i className="fas fa-arrow-left"></i>&nbsp;&nbsp;الرجوع
            </button>
          </Link>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

export default PrayerTimes;
