import { SectionCenter, StyledHeading } from './StyledComponents';

export const Loading = ({ text = 'Loading...' }) => {
  return (
    <SectionCenter>
      <StyledHeading>{text}</StyledHeading>
    </SectionCenter>
  );
};
