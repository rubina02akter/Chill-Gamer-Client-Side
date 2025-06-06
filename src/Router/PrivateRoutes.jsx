import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const{user,loading} = useContext(AuthContext);
  const location = useLocation();
  console.log(location)

  if(loading){
    return <span className="loading loading-dots loading-sm"></span>
  }

  if(!user){
    return <Navigate state={location.pathname} to='/login'></Navigate>
  }
  return children;
};

export default PrivateRoutes;