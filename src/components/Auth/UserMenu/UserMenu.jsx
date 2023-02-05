import { StyledNavLink } from 'components/Common';
import { useAuth } from 'hooks/useAuth';

export const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      {`Welcome, ${user?.name} | `}
      <StyledNavLink to="/logout">Log out</StyledNavLink>
    </div>
  );
};
