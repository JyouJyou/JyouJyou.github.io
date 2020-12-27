import React, { Component } from 'react'

import $ from 'jquery';
import About from './About';
import Contact from './contact';
import Features from './features';
import Gallery from './gallery';
import Header from './Header';
import Navigation from './navigation';
import Services from './services';
import Team from './Team';
import Testimonials from './testimonials';

export class App extends Component {
  state = {
    webPageData : {},
  }
  getWebPageData(){
    $.ajax({
      url:'/data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({webPageData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getWebPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.webPageData.Header}/>
        <Features data={this.state.webPageData.Features}/>
        <About  data={this.state.webPageData.About}/>
        <Services  data={this.state.webPageData.Services}/>
        <Gallery />
        <Testimonials  data={this.state.webPageData.Testimonials}/>
        <Team  data={this.state.webPageData.Team}/>
        <Contact  data={this.state.webPageData.Contact}/>
      </div>
    )
  }
}

export default App
