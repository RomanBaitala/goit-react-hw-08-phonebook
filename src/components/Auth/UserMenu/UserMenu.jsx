import { useAuth } from 'hooks';
import { StyledNavLink } from 'components/Common/StyledComponents/Link.styled';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      {`Welcome, ${user.name} |`}
      <StyledNavLink to="/logout">Log out</StyledNavLink>
    </div>
  );
};
