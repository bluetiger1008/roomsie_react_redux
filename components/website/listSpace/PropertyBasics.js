import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeNewProperty } from 'actions/listSpace';
import { SubTitle, Label } from './Common';
import {
  Div,
  RadioButtonBoxGroup,
  Counter,
  Select,
  Tooltip,
  BaseComponent,
  UnderlinedInput,
  UnderlinedTextarea
} from 'components/common';
import { TipImage } from 'assets';
import ListSpacePage from './listSpacePage';
import Footer from './footer';
import { pick, get } from 'lodash';
import PropertyBasicsValidator from 'validators/PropertyBasicsValidator';

const InputContainer = Div.extend`
  margin-bottom: 40px;
  width: 100%;
  position: relative;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
`;

const TypeSelectorContainer = Div.extend`
  flex-direction: column;
  margin-top: 20px;
`;

const TypeSelector = Div.extend`
  flex-direction: column;
  margin-bottom: 40px;
  display: ${props => (props.visible ? 'flex' : 'none')};
`;

const CounterContainer = Div.extend`
  margin: 15px 0;
`;

const CounterLabel = Label.extend`
  width: 250px;
  margin-bottom: 0;
`;

const TipTitle = Div.extend`
  color: white;
  font-size: 18px;
  margin-bottom: 15px;
`;

const TipExampleText = Div.extend`
  color: #202122;
  font-size: 14px;
  margin-bottom: 13px;
`;

const TipSmallText = Div.extend`
  color: #717273;
  font-size: 12px;
`;

const TipExampleContainer = Div.extend`
  background-color: white;
  padding: 15px 18px;
  border-radius: 3px;
  flex-direction: column;
`;

const TipExampleImage = Div.withComponent('img').extend`
  width: 100%;
  border-radius: 2px;
  margin-bottom: 20px;
`;

const SelectPropertyContainer = Div.extend`
  height: 46px;
  width: 328px;
`;

class PropertyBasics extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = pick(props.newProperty, [
      'propertyTitle',
      'propertyDescription',
      'listingType',
      'placementType',
      'propertyType',
      'bedrooms',
      'bathroomCount',
      'accommodates'
    ]);

    this.onClickNext = this.onClickNext.bind(this);
    this.onListingTypeChange = this.onListingTypeChange.bind(this);
    this.onPropertyTypeChange = this.onPropertyTypeChange.bind(this);
    this.onChangeBedrooms = this.onChangeBedrooms.bind(this);
  }

  validate() {
    const validator = new PropertyBasicsValidator(this.state);
    if (validator.call()) {
      return true;
    }

    this.setState(() => {
      const errors = validator.errors;
      return { errors };
    });
    return false;
  }

  onListingTypeChange(evt) {
    const listingType = evt.target.value;
    const placementType = listingType == 'entire_space' ? 'unisex' : '';
    this.setState({ listingType, placementType });
  }

  modifyBedrooms(bedrooms, count) {
    while (count > bedrooms.length) {
      bedrooms.push({
        index: bedrooms.length,
        bathroomType: '',
        settings: [],
        beds: []
      });
    }

    while (count < bedrooms.length) {
      bedrooms.pop();
    }

    return bedrooms;
  }

  onPropertyTypeChange({ value }) {
    this.setState(({ bedrooms }) => {
      const propertyType = value;
      const isStudio = propertyType === 'studio_apartment';
      const count = isStudio ? 0 : Math.max(bedrooms.length, 1);
      bedrooms = this.modifyBedrooms(bedrooms, count);
      return { propertyType, bedrooms };
    });
  }

  onChangeBedrooms(count) {
    this.setState(({ bedrooms }) => {
      bedrooms = this.modifyBedrooms(bedrooms, count);
      return { bedrooms };
    });
  }

  onClickNext() {
    if (this.validate()) {
      const newPropertyProps = this.state;
      const nextUrl = '/list-space/rates-and-fees';

      this.props.storeNewProperty({ newPropertyProps, nextUrl });
    }
  }

  render() {
    const {
      propertyTypes,
      listingTypeOptions,
      placementTypeOptions
    } = this.props;
    const {
      propertyTitle,
      propertyDescription,
      listingType,
      placementType,
      propertyType,
      bedrooms,
      bathroomCount,
      accommodates,
      errors
    } = this.state;

    return (
      <div>
        <ListSpacePage title="Property Basics" currentStep="1">
          <SubTitle>Property title, description, type and more</SubTitle>
          <InputContainer>
            <UnderlinedInput
              placeholder="Property Title"
              label="property title"
              value={propertyTitle}
              onChange={this.onChange.bind(null, 'propertyTitle')}
              error={get(errors, ['propertyTitle'])}
            />
            <Tooltip place="bottom" rightAligned={true}>
              <TipTitle>Here are a few example listings</TipTitle>
              <TipExampleContainer>
                <TipExampleImage src={TipImage} />
                <TipExampleText>
                  Awesome Intern Home Perfect for Hill Staff
                </TipExampleText>
                <TipSmallText>
                  123 Main St., apt 420,Washington, USA 12345
                </TipSmallText>
              </TipExampleContainer>
            </Tooltip>
          </InputContainer>
          <InputContainer>
            <UnderlinedTextarea
              placeholder="Property Description"
              value={propertyDescription}
              onChange={this.onChange.bind(null, 'propertyDescription')}
            />
            <Tooltip rightAligned={true}>
              Describe your neighborhood, proximity to public transport, super
              markets or anything you’d like your prospective guest to know
              about your home Guests love learning about your property so be as
              detailed as possible
            </Tooltip>
          </InputContainer>
          <TypeSelectorContainer>
            <TypeSelector visible>
              <Label>Listing Type</Label>
              <RadioButtonBoxGroup
                name="listingType"
                label="Listing Type"
                options={listingTypeOptions}
                value={listingType}
                onChange={this.onListingTypeChange}
                error={get(errors, ['listingType'])}
              />
            </TypeSelector>
            <TypeSelector
              visible={listingType !== 'entire_space' && listingType !== null}
            >
              <Label>
                Placement Type
                <Tooltip>
                  In cases where you are hosting a Roomsie guest, you may have a
                  preference for you applicants gender. Your listing will not
                  show in search results for your non-designated preference. If
                  you wish to have your home shown to all genders then please
                  choose 'Unisex' as your placement type.
                </Tooltip>
              </Label>
              <RadioButtonBoxGroup
                name="placementType"
                options={placementTypeOptions}
                value={placementType}
                label="Placement Type"
                error={get(errors, 'placementType')}
                onChange={this.onChange.bind(null, 'placementType')}
              />
            </TypeSelector>
          </TypeSelectorContainer>
          <InputContainer column>
            <Label>
              What type of property is this?
              <Tooltip>
                Classify your listing as single family home, upscale apartment,
                condo unit or basement apartment.
              </Tooltip>
            </Label>
            <SelectPropertyContainer>
              <Select
                placeholder={'Property Type'}
                value={propertyType}
                options={propertyTypes}
                onChange={this.onPropertyTypeChange}
                error={get(errors, ['propertyType'])}
              />
            </SelectPropertyContainer>
          </InputContainer>
          <CounterContainer>
            <CounterLabel>Bedrooms</CounterLabel>
            <Counter
              value={bedrooms.length}
              onChange={this.onChangeBedrooms}
              minimum={propertyType === 'studio_apartment' ? 0 : 1}
              maximum={propertyType === 'studio_apartment' ? 0 : null}
            />
          </CounterContainer>
          <CounterContainer>
            <CounterLabel>Bathrooms</CounterLabel>
            <Counter
              value={bathroomCount}
              onChange={this.onChange.bind(null, 'bathroomCount')}
            />
          </CounterContainer>
          <CounterContainer>
            <CounterLabel>
              Property accommodates
              <Tooltip>
                The total number of guests that your property may house among
                all beds (calculated at 1 person per bed maximum)
              </Tooltip>
            </CounterLabel>
            <Counter
              value={accommodates}
              onChange={this.onChange.bind(null, 'accommodates')}
            />
          </CounterContainer>
        </ListSpacePage>
        <Footer onClickNext={this.onClickNext} nextEnabled={true} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newProperty: state.newProperty,
  propertyTypes: state.propertyTypes,
  listingTypeOptions: state.listingTypes,
  placementTypeOptions: state.placementTypes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ storeNewProperty }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PropertyBasics);
