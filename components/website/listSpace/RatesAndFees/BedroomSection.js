import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'react-collapse';

import { UpCollapseIcon, DownCollapseIcon, BedIcon } from 'assets/icons';
import { Div, Column, RadioButtonGroup, Select } from 'components/common';
import {
  ConfigureContainer,
  ConfigureContent,
  Type,
  PropertyLabel
} from 'components/website/listSpace/Common';
import BedSection from './BedSection';

const ConfigureHeader = Div.extend`
  height: 55px;
  padding: 0 30px;
  align-items: center;
  border-bottom: 1px solid #ddd;
  position: relative;
  cursor: pointer;
`;

const CollapseButton = Div.extend`
  margin-right: 15px;
`;

const HeaderLabel = Div.extend`
  font-size: 20px;
  color: #1b1b1b;
`;

const TypeContainer = Column.extend`
  margin-bottom: 30px;
`;

const OccupancyContainer = Column.extend`
  margin-bottom: 25px;
`;

const OccupancyPropertyContainer = Div.extend`
  align-items: center;
`;

const OccupancySelectorContainer = Div.extend`
  height: 46px;
`;

const BedIcons = Div.extend`
  margin-left: 13px;
  svg {
    margin: 0 3px;
  }
`;

class RoomConfigure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: props.bedroom.index > 0
    };

    this.collapseBedroom = this.collapseBedroom.bind(this);
    this.onChangeBedCount = this.onChangeBedCount.bind(this);
  }

  onChangeBedCount(target) {
    let { beds } = this.props.bedroom;
    const oldCount = beds.length;
    const newCount = target.value;

    if (newCount > oldCount) {
      while (newCount > beds.length) {
        beds.push({
          bedSize: '',
          bedType: '',
          linensProvided: '',
          rate: '',
          copyOf: ''
        });
      }
    } else {
      while (newCount < beds.length) {
        beds.pop();
      }
    }
    this.props.onChange('beds', beds);
  }

  collapseBedroom() {
    this.setState(({ collapsed }) => ({
      collapsed: !collapsed
    }));
  }

  render() {
    const { collapsed } = this.state;
    const { onChange, bedroom } = this.props;
    const { bathroomType, beds, index } = bedroom;
    const bedroomTypes = [
      { value: 1, label: 'Private Bedroom' },
      { value: 2, label: 'Double Bedroom' },
      { value: 3, label: 'Triple Bedroom' },
      { value: 4, label: 'Quad Bedroom' }
    ];

    const bathroomTypeOptions = [
      { value: 'attached', label: 'Attached' },
      { value: 'detached', label: 'Detached' }
    ];

    return (
      <ConfigureContainer>
        <ConfigureHeader onClick={this.collapseBedroom}>
          <CollapseButton>
            {collapsed ? <DownCollapseIcon /> : <UpCollapseIcon />}
          </CollapseButton>
          <HeaderLabel>Bedroom {index + 1}</HeaderLabel>
        </ConfigureHeader>
        <Collapse isOpened={!collapsed}>
          <ConfigureContent>
            <TypeContainer>
              <PropertyLabel>Type of bathroom</PropertyLabel>
              <Div>
                <Type>
                  <RadioButtonGroup
                    value={bathroomType}
                    onChange={onChange.bind(null, 'bathroomType')}
                    options={bathroomTypeOptions}
                  />
                </Type>
              </Div>
            </TypeContainer>
            <OccupancyContainer>
              <PropertyLabel>Bedroom Occupancy</PropertyLabel>
              <OccupancyPropertyContainer>
                <OccupancySelectorContainer>
                  <Select
                    placeholder={'Choose'}
                    value={beds.length}
                    options={bedroomTypes}
                    onChange={this.onChangeBedCount}
                  />
                </OccupancySelectorContainer>
                <BedIcons>
                  {beds.map((_, idx) => <BedIcon key={idx} />)}
                </BedIcons>
              </OccupancyPropertyContainer>
            </OccupancyContainer>
            {beds.map((bed, idx) => (
              <BedSection
                key={idx}
                occupancyIndex={idx}
                bed={bed}
                onChange={onChange.bind(null, 'beds', idx)}
              />
            ))}
          </ConfigureContent>
        </Collapse>
      </ConfigureContainer>
    );
  }
}

const mapStateToProps = state => ({
  bedroomProperty: state.bedroomProperty
});

export default connect(mapStateToProps)(RoomConfigure);
