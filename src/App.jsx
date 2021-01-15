import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AppTemplate } from "./AppTemplate";
import BctechBrochure from "./components/services/BctechBrochure";
import InsightSubpage1 from "./components/insights/InsightSubPage1";
import InsightSubpage2 from "./components/insights/InsightSubPage2";
import Insights from "./components/insights/Insights";
import MainPage from "./MainPage";
import React from "react";

export const FONT_FAMILY = "Raleway";

export function App(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppTemplate>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/insights" component={Insights} />
          <Route
            exact
            path="/business-model"
            component={InsightSubpage1}
            {...props}
          />
          <Route
            exact
            path="/why-choose-ipc"
            component={InsightSubpage2}
            {...props}
          />
          <Route exact path="/bc-tech-brochure" component={BctechBrochure} />
        </Switch>
      </AppTemplate>
    </BrowserRouter>
  );
}

export default App;
