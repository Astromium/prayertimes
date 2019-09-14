import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wilayas from "./components/Wilayas";
import PrayerTimes from "./components/PrayerTimes";
import About from "./components/About";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookShareCount
} from "react-share";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Wilayas} />
            <Route exact path="/times/:name/:name2" component={PrayerTimes} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
        {/*<FacebookShareButton url="astromium.github.io/GitFolio/" size={32}>
          share
        </FacebookShareButton>
        <FacebookIcon size={32} round={true} />
        <FacebookShareCount url="astromium.github.io/BlogIT/">
          {shareCount => (
            <span className="myShareCountWrapper">{shareCount}</span>
          )}
          </FacebookShareCount>*/}
      </div>
    </Router>
  );
}

export default App;
