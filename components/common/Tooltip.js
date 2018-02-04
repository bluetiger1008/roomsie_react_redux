import React from 'react';
import ReactToolTip from 'react-tooltip';
import BulbIcon from 'assets/icons/BulbIcon';
import { Div } from 'components/common';
import styled from 'styled-components';
import { uniqueId } from 'lodash';

const ToolTip = Div.extend`
  .toolTip {
    padding: 0;
    width: 250px;
    opacity: 1 !important;
    background-color: #1e376f !important;
    pointer-events: auto !important;
    .place-right:after {
      border-right-color: #1e376f !important;
    }
    .place-left:after {
      border-left-color: #1e376f !important;
    }
    .place-top:after {
      border-top-color: #1e376f !important;
    }
    .place-bottom:after {
      border-bottom-color: #1e376f !important;
    }
  }
`;

const TipButton = Div.extend`
  ${props =>
    props.rightAligned
      ? `position: absolute;
     right: 0;
    `
      : `display: inline-block;
     margin-left: 5px;
     margin-top: 5px;
    `};
`;

const TipTextContainer = Div.extend`
  flex-direction: column;
  padding: 15px;
`;

const TipText = styled.span`
  color: white;
  font-size: 14px;
  margin: 0;
`;

const TipTitle = Div.extend`
  color: white;
  font-size: 18px;
  margin-bottom: 15px;
`;

const Tooltip = ({ title, place, children, rightAligned }) => {
  const tooltipId = uniqueId('tooltip_');

  return (
    <div>
      <TipButton data-tip data-for={tooltipId} rightAligned={rightAligned}>
        <BulbIcon />
      </TipButton>
      <ToolTip>
        <ReactToolTip
          class="toolTip"
          id={tooltipId}
          place={place || 'right'}
          effect="solid"
        >
          <TipTextContainer>
            {title ? <TipTitle>{title}</TipTitle> : null}
            <TipText>{children}</TipText>
          </TipTextContainer>
        </ReactToolTip>
      </ToolTip>
    </div>
  );
};

export default Tooltip;
