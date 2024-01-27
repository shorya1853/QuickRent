import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../context/user-context';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';

const useAuth = () => {
    const {userAuth} = useContext(UserContext);
    if (userAuth === null) {
        return <Spinner/>
      }
      return userAuth;
  };
  
  const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signin" />;
  };
  
  export default ProtectedRoutes;