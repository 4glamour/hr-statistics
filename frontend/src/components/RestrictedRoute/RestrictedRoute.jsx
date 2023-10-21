import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component, restrictedTo = '/', isLoggedIn }) => {
  return isLoggedIn ? <Navigate to={restrictedTo} /> : component;
};
