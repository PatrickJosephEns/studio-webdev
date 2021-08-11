import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';

// Page Components Here
import home from './components/pages/Home/home';
import login from './components/pages/Login/login'
import Display_shops from './components/pages/Home/display_shops';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route path="/" component={home} exact />
            <Route path="/login" component={login} exact />
            <Route path="/shops" component={Display_shops} exact />
          </div>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;