import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';

import MovieRoutes from '../../Movies/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/> 
      <UserRoutes/>
      <AuthenticationRoutes/>
      <MovieRoutes/>
    </>
  );
}
 
export default Routes;