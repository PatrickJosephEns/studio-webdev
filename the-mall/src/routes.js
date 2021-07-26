import  {Route, Switch, BrowserRouter} from 'react-router-dom';
import home from './components/pages/home';
import React from 'react';


const Routes = () =>  {
  return (   
    <BrowserRouter>   
    <Switch>   
      <div className = "App">       
        <Route path="/" component = {home} exact />
      </div>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;