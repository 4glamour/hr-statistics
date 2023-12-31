import { lazy, useEffect, useState } from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRoute';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { load } from './utils/helpers/localStorage';
import { LOCAL_STORAGE_BG_PHOTO_KEY, LOCAL_STORAGE_KEY } from './utils/constants/localStorage';
import { getUserInfo, setAuthHeader } from './services/statistics-api';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const LoginPage = lazy(() => import('./pages/Login'));
const ScriptsPage = lazy(() => import('./pages/Scripts'));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bgPhoto, setBgPhoto] = useState(() => load(LOCAL_STORAGE_BG_PHOTO_KEY));

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
        <Route path="/" element={<Layout setBgPhoto={setBgPhoto} />}>
          <Route
            index
            element={
              <PrivateRoute
                component={<Dashboard photo={bgPhoto} />}
                restrictedTo="/login"
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            path="/scripts"
            element={
              <PrivateRoute
                component={<ScriptsPage photo={bgPhoto} />}
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
