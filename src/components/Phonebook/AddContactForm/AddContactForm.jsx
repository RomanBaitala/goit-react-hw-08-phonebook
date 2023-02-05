import { StyledButton, StyledForm, StyledInput, StyledLabel } from 'components/Common';
import { CONST } from 'redux/constants';

export const AddContactForm = ({ isLoading, handleSubmit }) => {
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name:
        <StyledInput name="name" type="text" />
      </StyledLabel>
      <StyledLabel>
        Number:
        <StyledInput name="number" type="text" />
      </StyledLabel>
      <StyledButton type="submit" disabled={isLoading}>
        {isLoading ? CONST.icon.working : 'Add Contact'}
      </StyledButton>
    </StyledForm>
  );
};
