import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logoutUser } from 'redux/operations';

export const Logout = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  if (isLoggedIn) dispatch(logoutUser());
  return <Navigate to="/login" replace />;
};

export default Logout;
