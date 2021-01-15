import About from "./components/About";
import Contact from "./components/contact";
import Header from "./components/Header";
import NewsAndEvents from "./components/news-and-events/NewsAndEvents";
import React from "react";
import Services from "./components/services/services";
import Team from "./components/team/Team";

function MainPage() {
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

export default MainPage;
