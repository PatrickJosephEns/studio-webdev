import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';

// Page Components Here
import home from './components/pages/Home/home';
import login from './components/pages/Login/login'

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route path="/" component={home} exact />
            <Route path="/login" component={login} exact />
          </div>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;