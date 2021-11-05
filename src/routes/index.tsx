import React from 'react';
import { Switch } from 'react-router-dom';
import EditButton from '../screens/EditButton';
import AddButton from '../screens/AddButton';
import Home from '../screens/Home';

import Route from './Route';

const Routes: React.FC = () => {
    
  return (<Switch>
    <Route exact path="/" component={Home} />
    <Route path="/adicionar" component={AddButton} />
    <Route path="/editar" component={EditButton} />
    
  </Switch>)
}
;

export default Routes;