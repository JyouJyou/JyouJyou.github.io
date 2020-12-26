import React, { Component } from 'react'

import About from './components/about';
import Contact from './components/contact';
import Features from './components/features';
import Gallery from './components/gallery';
import Header from './components/header';
import JsonData from './data/data.json';
import Navigation from './components/navigation';
import Services from './components/services';
import Team from './components/Team';
import Testimonials from './components/testimonials';

export class App extends Component {
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
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
  }
}

export default App;
