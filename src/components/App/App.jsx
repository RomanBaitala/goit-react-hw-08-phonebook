import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Loading } from 'components/Common/LoadingPage';
import { refreshUser } from 'redux/operations';
import { useAuth } from 'hooks/useAuth';

const HomePage = lazy(() => import('pages/HomePage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const SignupPage = lazy(() => import('pages/SignupPage'));
const CommonLayout = lazy(() => import('pages/CommonLayout'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const Logout = lazy(() => import('pages/Logout'));

export const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isRefreshing) return;

    dispatch(refreshUser());
  }, [dispatch, isRefreshing]);

  return (
    !isRefreshing && (
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Loading text="Loading interface..." />}>
              <CommonLayout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loading text="Welcome to your phonebook manager" />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="phonebook"
            element={
              <Suspense fallback={<Loading text="Loading phonebook..." />}>
                <Phonebook />
              </Suspense>
            }
          />
          <Route path="phonebook/addContact" element={<Navigate to="phonebook" />} />
          <Route
            path="signup"
            element={
              <Suspense fallback={<Loading text="Loading Signup form..." />}>
                <SignupPage />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback="">
                <LoginPage />
              </Suspense>
            }
          />
          <Route
            path="logout"
            element={
              <Suspense fallback={<Loading text="Logging out..." />}>
                <Logout />
              </Suspense>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    )
  );
};
