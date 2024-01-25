import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../context/user-context';
import {Audio} from 'react-loader-spinner'
import { useContext } from 'react';

const useAuth = () => {
    const {userAuth} = useContext(UserContext);
    if (userAuth === null) {
        return <Audio/>
      }
      return userAuth;
  };
  
  const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signin" />;
  };
  
  export default ProtectedRoutes;