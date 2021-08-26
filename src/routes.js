import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from 'react';

// Page Components Here
import Home from './components/pages/Home/home';
import Profile from './components/user/Profile';

class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route path="/profile" exact>
              <Profile db={this.props.db} />
            </Route>
            
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