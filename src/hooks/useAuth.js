import { useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/selectors';

export const useAuth = () => {
  const token = useSelector(selectToken);
  const user = useSelector(selectUser);
  const isLoggedIn = token !== null && user.name !== null;
  const isRefreshing = token !== null && user.name === null;

  return {
    isLoggedIn,
    isRefreshing,
    token,
    user,
  };
};
