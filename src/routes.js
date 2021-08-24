import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';

// Page Components Here
import login from './components/pages/Login/login'
import Home from './components/pages/Home/home';

class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route path="/login" component={login} exact />

            <Route path="/" exact>
              <Home db={this.props.db} />
            </Route>
          </div>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes;