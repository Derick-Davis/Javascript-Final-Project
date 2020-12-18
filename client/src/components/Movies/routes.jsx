import React, {useContext} from 'react';
import { Route, Switch } from 'react-router-dom';
import { UserContext } from '../Authentication/UserProvider';


import Index from './index';
import New from './New';
import Delete from './Delete';
import Edit from './Edit';


const Routes = () => {

  const {user} = useContext(UserContext);

  return (
    <Switch>
      <Route exact path="/movies" component={Index}/>

      {user && user.token ? (
        <>
          <Route exact path="/new" component={New}/>
          <Route exact path="/delete/:id" component={Delete}/>
          <Route exact path="/edit/:id" component={Edit}/>
          </>
      ) :null};
    </Switch>
  );
}
 
export default Routes;