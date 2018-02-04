import React from 'react';
import { Div, theme, Tooltip } from 'components/common';

const Container = Div.extend`
  flex-flow: column;
  margin-top: 25px;
`;

const SectionTitle = Div.extend`
  color: ${theme.colors.darkGrey};
  font-size: 18px;
  font-weight: bold;
  align-items: center;
`;

const SectionSubtitle = Div.extend`
  font-size: 16px;
  color: #545454;
  margin: 5px 0 15px;
`;

const Section = ({ title, subtitle, children, tooltip }) => {
  return (
    <Container>
      <SectionTitle>
        {title}
        {tooltip ? <Tooltip>{tooltip}</Tooltip> : null}
      </SectionTitle>
      {subtitle ? <SectionSubtitle>{subtitle}</SectionSubtitle> : null}
      {children}
    </Container>
  );
};

export default Section;
