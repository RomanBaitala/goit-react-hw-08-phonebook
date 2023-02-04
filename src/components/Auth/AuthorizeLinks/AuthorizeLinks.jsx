import { StyledNavLink } from 'components/Common';

export const AuthorizeLinks = () => {
  return (
    <div>
      <StyledNavLink to="/login">Login</StyledNavLink>
      <StyledNavLink to="/signup">Sign Up</StyledNavLink>
    </div>
  );
};
