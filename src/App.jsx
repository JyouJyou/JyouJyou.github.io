import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AppTemplate } from "./AppTemplate";
import InsightSubpage1 from "./components/insights/InsightSubPage1";
import Insights from "./components/insights/Insights";
import MainPage from "./MainPage";
import React from "react";

export function App(props) {
  return (
    <BrowserRouter>
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
        </Switch>
      </AppTemplate>
    </BrowserRouter>
  );
}

export default App;
