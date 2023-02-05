import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/operations';
import { SectionCenter, StyledForm, StyledLabel, StyledInput, StyledButton } from 'components/Common';

export const SignupForm = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = e => {
    e.preventDefault();

    dispatch(
      registerUser({
        name: e.currentTarget.elements.name.value,
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
          Username:
          <StyledInput autoComplete="username" type="text" name="name" />
        </StyledLabel>
        <StyledLabel>
          Email:
          <StyledInput autoComplete="email" type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password:
          <StyledInput autoComplete="current-password" type="password" name="password" />
        </StyledLabel>

        <StyledButton type="submit">Register</StyledButton>
      </StyledForm>
    </SectionCenter>
  );
};
