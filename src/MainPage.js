import React, { Component } from "react";

import About from "./components/About";
import Contact from "./components/contact";
import Header from "./components/Header";
import JsonData from "./data/data.json";
import NewsAndEvents from "./components/news-and-events/NewsAndEvents";
import Services from "./components/services/services";
import Team from "./components/team/Team";

export class MainPage extends Component {
  state = {
    landingPageData: {},
  };
  getlandingPageData() {
    this.setState({ landingPageData: JsonData });
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services />
        <NewsAndEvents />
        <Team />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    );
  }
}

export default MainPage;
