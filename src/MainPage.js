import React, { Component } from 'react'

import About from './components/About';
import Contact from './components/contact';
import Gallery from './components/gallery';
import Header from './components/Header';
import JsonData from './data/data.json';
import Services from './components/services';
import Team from './components/Team';

export class MainPage extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default MainPage;
