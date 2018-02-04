import React from 'react';
import {
  ListSpaceOuterContainer,
  ListSpaceWrapper,
  ListSpaceContainer,
  Title,
  SubTitle
} from './Common';
import StepBar from './StepBar';

const ListSpacePage = ({ children, currentStep, title }) => {
  return (
    <ListSpaceOuterContainer>
      <ListSpaceWrapper>
        <ListSpaceContainer>
          <StepBar stepCounts={5} currentStep={currentStep} />
          <Title>{title}</Title>
          {children}
        </ListSpaceContainer>
      </ListSpaceWrapper>
    </ListSpaceOuterContainer>
  );
};

export default ListSpacePage;
