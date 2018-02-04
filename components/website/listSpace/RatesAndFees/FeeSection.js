import React from 'react';
import { connect } from 'react-redux';

import {
  ConfigureContainer,
  ConfigureContent,
  Row,
  Type,
  RowLabel
} from 'components/website/listSpace/Common';
import {
  Div,
  SpaceBetween,
  Select,
  FeeInput,
  RadioButtonGroup
} from 'components/common';

const FeeSelectorContainer = Div.extend`
  width: 192px;
  height: 40px;
`;

const customStyles = {
  height: '40px',
  width: '192px',
  border: '1px solid #b2b2b2',
  borderRadius: '2px'
};

const FeeProperty = ({ feeTypes, onChange, fee }) => {
  const { feeType, amount, chargeType } = fee;
  const chargeTypeOptions = [
    { value: 'night', label: 'Night' },
    { value: 'flat', label: 'Flat' }
  ];

  return (
    <ConfigureContainer>
      <ConfigureContent>
        <SpaceBetween>
          <Row>
            <RowLabel>Fee Type</RowLabel>
            <FeeSelectorContainer>
              <Select
                placeholder={'Choose'}
                options={feeTypes}
                value={feeType}
                onChange={onChange.bind(null, 'feeType')}
              />
            </FeeSelectorContainer>
          </Row>
          <Row>
            <RowLabel>Amount</RowLabel>
            <FeeInput
              onChange={onChange.bind(null, 'amount')}
              value={amount}
              style={customStyles}
              amountInput
              height={'40px'}
            />
          </Row>
          <Row>
            <RowLabel>Charge Per</RowLabel>
            <Type>
              <RadioButtonGroup
                value={chargeType}
                options={chargeTypeOptions}
                onChange={onChange.bind(null, 'chargeType')}
              />
            </Type>
          </Row>
        </SpaceBetween>
      </ConfigureContent>
    </ConfigureContainer>
  );
};

const mapStateToProps = state => ({
  feeTypes: state.feeTypes
});

export default connect(mapStateToProps)(FeeProperty);
