import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { AppTemplate } from './AppTemplate';
import Insights from './components/insights/Insights';
import MainPage from './MainPage';
import React from 'react'

export function App() {

  return (
    <BrowserRouter>
      <AppTemplate>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/insights" component={Insights} />
        </Switch>
      </AppTemplate>
    </BrowserRouter>
  )
}

export default App;
