import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const SignupForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(
      register({
        name: e.currentTarget.elements.name.value,
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      })
    );

    evt.currentTarget.reset();

    return (
      <section>
        <form onSubmit={handleSubmit} autoComplete="on">
          <label>
            Name:
            <input autoComplete="username" type="text" name="name" />
          </label>
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
          <button type="submit">Register</button>
        </form>
      </section>
    );
  };
};
