import { StyledToolbar, ToolbarCheckbox, ToolbarContents, ToolbarHandle } from './Toolbar.styled';

export const Toolbar = ({ children }) => {
  const handlePin = e => {
    console.log(e.target.checked);
  };

  return (
    <StyledToolbar>
      <ToolbarContents>{children}</ToolbarContents>
      <ToolbarHandle>
        <ToolbarCheckbox type="checkbox" onChange={handlePin} />
      </ToolbarHandle>
    </StyledToolbar>
  );
};
