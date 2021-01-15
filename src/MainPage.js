import React, { Component } from "react";

import About from "./components/About";
import Contact from "./components/contact";
import Header from "./components/Header";
import NewsAndEvents from "./components/news-and-events/NewsAndEvents";
import Services from "./components/services/services";
import Team from "./components/team/Team";

export class MainPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Services />
        <NewsAndEvents />
        <Team />
        <Contact />
      </div>
    );
  }
}

export default MainPage;
