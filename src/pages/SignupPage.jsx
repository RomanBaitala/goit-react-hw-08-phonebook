import { Navigate } from 'react-router-dom';
import { SectionCenter } from 'components/Common/StyledComponents';
import { SignupForm } from 'components/Auth';
import { useAuth } from 'hooks/useAuth';

export const SignupPage = () => {
  const { isLoggedIn } = useAuth();

  return <SectionCenter>{isLoggedIn ? <Navigate to="/phonebook" replace /> : <SignupForm />}</SectionCenter>;
};

export default SignupPage;
