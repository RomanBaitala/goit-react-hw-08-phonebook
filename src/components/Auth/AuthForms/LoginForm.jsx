import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(
      logIn({
        email: evt.currentTarget.elements.email.value,
        password: evt.currentTarget.elements.password.value,
      })
    );

    evt.currentTarget.reset();

    return (
      <section>
        <form onSubmit={handleSubmit} autoComplete="on">
          <label>
            Email:
            <input type="email" name="email" autoComplete="email" />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="pasword"
              autoComplete="current-password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  };
};
