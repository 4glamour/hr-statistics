import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component, restrictedTo = '/', isLoggedIn }) => {
  return !isLoggedIn ? <Navigate to={restrictedTo} /> : component;
};
