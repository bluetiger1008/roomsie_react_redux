import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Div,
  Column,
  Select,
  RadioButtonGroup,
  FeeInput,
  dropShadow,
  SpaceBetween
} from 'components/common';
import {
  Row,
  RowLabel,
  Type,
  FeeInputLabel
} from 'components/website/listSpace/Common';

const BedContainer = Div.extend`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 2px;
  background-color: #fff;
  padding: 15px;
  margin-bottom: 15px;
  position: relative;
  &.hasShadow {
    ${dropShadow(124, 9, 0, 18, 0.1, '#000')};
  }
`;

const BedImageContainer = Column.extend`
  width: 107px;
  height: 97px;
  border: 1px solid #ece5cc;
  border-radius: 2px;
  background-color: #fffcf0;
  align-items: center;
  justify-content: center;
`;

const TextPlus = Div.extend`
  font-size: 60px;
  line-height: 0.5;
  color: #dcd5be;
  margin-bottom: 15px;
`;

const TextAddPhoto = Div.extend`
  font-size: 13px;
  color: #545454;
`;

const BedPropertyContainer = Column.extend`
  margin-left: 23px;
  flex: auto;
`;

const BedStructureContainer = SpaceBetween.extend`
  margin-top: 13px;
  margin-bottom: 20px;
`;

const BedStyleSelectorContainer = Div.extend`
  width: 133px;
  height: 40px;
`;

const BedFeeContainer = Div.extend`
  align-items: center;
`;

class BedSettings extends Component {
  constructor() {
    super();

    this.AddPhoto = this.AddPhoto.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  AddPhoto() {
    this.upload.click();
  }

  uploadFile(event) {
    console.log('file', event.target.files[0]);
    const file = event.target.files[0];
  }

  render() {
    const { bedTypes, bedSizes, occupancyIndex, onChange, bed } = this.props;
    const { bedSize, rate, linensProvided, bedType, index } = bed;
    const linensProvidedOptions = [
      { value: true, label: 'Yes' },
      { value: false, label: 'No' }
    ];

    return (
      <BedContainer className={'hasShadow'}>
        <BedImageContainer onClick={this.AddPhoto}>
          <input
            type="file"
            id={`photoUpload-${index}-${occupancyIndex}`}
            ref={ref => (this.upload = ref)}
            style={{ display: 'none' }}
            onChange={this.uploadFile}
          />
          <TextPlus>+</TextPlus>
          <TextAddPhoto>Add Bed Photo</TextAddPhoto>
        </BedImageContainer>
        <BedPropertyContainer>
          <BedStructureContainer>
            <Row>
              <RowLabel>Bed Size</RowLabel>
              <BedStyleSelectorContainer>
                <Select
                  placeholder={'Choose'}
                  options={bedSizes}
                  value={bedSize}
                  onChange={onChange.bind(null, 'bedSize')}
                />
              </BedStyleSelectorContainer>
            </Row>
            <Row>
              <RowLabel>Bed Type</RowLabel>
              <BedStyleSelectorContainer>
                <Select
                  placeholder={'Choose'}
                  value={bedType}
                  options={bedTypes}
                  onChange={onChange.bind(null, 'bedType')}
                />
              </BedStyleSelectorContainer>
            </Row>
            <Row>
              <RowLabel>Linens Provided</RowLabel>
              <Div>
                <Type>
                  <RadioButtonGroup
                    value={linensProvided}
                    onChange={onChange.bind(null, 'linensProvided')}
                    options={linensProvidedOptions}
                  />
                </Type>
              </Div>
            </Row>
          </BedStructureContainer>
          <BedFeeContainer>
            <FeeInput
              onChange={onChange.bind(null, 'rate')}
              value={rate}
              height={'35px'}
            />
            <FeeInputLabel>per night</FeeInputLabel>
          </BedFeeContainer>
        </BedPropertyContainer>
      </BedContainer>
    );
  }
}

const mapStateToProps = state => ({
  bedSizes: state.bedSizes,
  bedTypes: state.bedTypes
});

export default connect(mapStateToProps)(BedSettings);
