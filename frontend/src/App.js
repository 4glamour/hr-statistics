import { lazy, useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { load } from './utils/helpers/localStorage';
import { LOCAL_STORAGE_KEY } from './utils/constants/localStorage';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const LoginPage = lazy(() => import('./pages/Login'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => !!load(LOCAL_STORAGE_KEY));

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute
                component={<Dashboard />}
                restrictedTo="/login"
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
                restrictedTo="/"
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
