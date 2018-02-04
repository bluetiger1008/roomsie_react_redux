import React, { Component } from 'react';
import { Div } from 'components/common';
import { TickIcon } from 'assets/images';

const Bar = Div.extend`
  width: 100%;
  height: 3px;
  background-color: #c3d0d6;
  position: relative;
  margin-bottom: 48px;
`;

const StepIcon = Div.extend`
  width: 12px;
  height: 12px;
  position: absolute;
  left: ${props => props.left};
  top: 0;
  border-radius: 50%;
  border: ${props =>
    props.enabled ? '2px solid #48b985' : '2px solid #c3d0d6'};
  top: 50%;
  transform: translate(0, -50%);
  background-color: white;
`;

const StepCheckIcon = StepIcon.extend`
  width: 18px;
  height: 18px;
  border: none;
  background-color: #23c087;
  justify-content: center;
  align-items: center;
  img {
    width: 10px;
  }
`;

const PassedBar = Div.extend`
  width: ${props => props.Width};
  height: 3px;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #48b985;
`;

class StepBar extends Component {
  render() {
    const { currentStep, stepCounts } = this.props;
    const StepIcons = [];

    for (var i = 1; i <= stepCounts; i++) {
      if (i == currentStep) {
        StepIcons.push(<StepIcon key={i} left={`${i * 20}%`} enabled={true} />);
      } else if (i < currentStep) {
        StepIcons.push(
          <StepCheckIcon key={i} left={`${i * 20}%`}>
            <img src={TickIcon} />
          </StepCheckIcon>
        );
      } else {
        StepIcons.push(
          <StepIcon key={i} left={`${i * 20}%`} enabled={false} />
        );
      }
    }

    return (
      <Bar>
        <PassedBar Width={`${currentStep * 20}%`} />
        {StepIcons}
      </Bar>
    );
  }
}

export default StepBar;
