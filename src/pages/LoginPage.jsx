import { Navigate } from 'react-router-dom';
import { SectionCenter } from 'components/Common/StyledComponents';
import { LoginForm } from 'components/Auth';
import { useAuth } from 'hooks/useAuth';

export const LoginPage = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = isLoggedIn && !isRefreshing;

  return <SectionCenter>{shouldRedirect ? <Navigate to="/phonebook" replace /> : <LoginForm />}</SectionCenter>;
};

export default LoginPage;
