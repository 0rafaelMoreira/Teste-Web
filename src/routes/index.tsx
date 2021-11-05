import React from 'react';
import { Switch } from 'react-router-dom';

import {AddButton} from '../screens/AddButton';
import {Home} from '../screens/Home';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route  path="/" component={Home} />
    <Route path="/Home" component={AddButton} />
  

   
  </Switch>
);

export default Routes;