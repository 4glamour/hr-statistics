import { lazy, useEffect, useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { load } from './utils/helpers/localStorage';
import { LOCAL_STORAGE_KEY } from './utils/constants/localStorage';
import { getUserInfo, setAuthHeader } from './services/statistics-api';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const LoginPage = lazy(() => import('./pages/Login'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const token = await load(LOCAL_STORAGE_KEY);
        setAuthHeader(token);

        if (!token) {
          return;
        }

        const res = await getUserInfo(token);

        setIsLoggedIn(!!res.user.email);
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);

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
