import React, {useContext} from 'react'
import {Route, Switch} from 'react-router-dom';
import {UserContext} from '../../Authentication/UserProvider';

import Index from './Index';
import New from './New';
import Edit from './Edit'

const Routes = () => {

    const {user} = useContext(UserContext);

    return (
        <Switch>
            <Route exact path = "/movies" component= {Index}/>
            
            {user && user.token ? (
                <>
                <Route exact path="/movies/new" component={New}/>
                <Route exact path="/movies/edit" component={Edit}/>
             </>
            ): null}
        </Switch>
    );
}

export default Routes;