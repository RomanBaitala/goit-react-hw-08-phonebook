import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/operations';
import { SectionCenter, StyledForm, StyledLabel, StyledInput, StyledButton } from 'components/Common';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(
      loginUser({
        email: e.currentTarget.elements.email.value,
        password: e.currentTarget.elements.password.value,
      })
    );

    e.currentTarget.reset();
  };

  return (
    <SectionCenter>
      <StyledForm onSubmit={handleFormSubmit} autoComplete="on">
        <StyledLabel>
          Email:
          <StyledInput autoComplete="email" type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password:
          <StyledInput autoComplete="current-password" type="password" name="password" />
        </StyledLabel>

        <StyledButton type="submit">Login</StyledButton>
      </StyledForm>
    </SectionCenter>
  );
};
