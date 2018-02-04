import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeNewProperty } from 'actions/listSpace';
import { SubTitle, ConfigureContent } from '../Common';
import {
  Div,
  Column,
  UnderlinedFeeInput,
  theme,
  Tooltip,
  BaseComponent
} from 'components/common';
import ListSpacePage from '../listSpacePage';
import BedroomSection from './BedroomSection';
import FeeSection from './FeeSection';
import Footer from '../footer';

const ConfigureLabel = Div.extend`
  font-size: 20px;
  color: #1b1b1b;
  margin-top: -10px;
  align-items: flex-end;
  p {
    font-size: 16px;
    color: #6e6e6e;
    margin: 0 0 0 12px;
  }
`;

const AdditionalFeeContainer = Column.extend`
  margin-top: 50px;
  margin-bottom: 35px;
  ${ConfigureLabel} {
    margin-top: 0px;
  }
  ${ConfigureContent} {
    padding-bottom: 25px;
  }
`;

const AddFeeButton = Div.withComponent('button').extend`
  margin-top: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.green};
  font-size: 18px;
  color: ${theme.colors.inputBlack};
  background-color: white;
  border-radius: 2px;
  height: 56px;
  outline: none;
  cursor: pointer;
`;

const GreenText = Div.extend`
  font-size: 32px;
  margin-right: 10px;
  color: ${theme.colors.green};
`;

const NightlyRateContainer = Div.extend`
  position: relative;
  width: 100%;
  margin-bottom: 15px;
  margin-top: -14px;
`;

class RatesAndFees extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      sameBedStyle: false,
      fees: props.newProperty.fees,
      listing: this.getListing(props),
      bedrooms: props.newProperty.bedrooms
    };

    this.onClickNext = this.onClickNext.bind(this);
    this.addFee = this.addFee.bind(this);
  }

  getListing(props) {
    const listingType = props.newProperty.listingType;
    if (listingType == 'entire_space') {
      return (
        props.newProperty.listing || {
          rate: ''
        }
      );
    }
  }

  addFee() {
    const fee = {
      feeType: '',
      amount: '',
      chargeType: ''
    };

    this.setState(oldState => {
      let fees = oldState.fees;
      oldState.fees.push(fee);
      return { fees };
    });
  }

  onClickNext() {
    const newPropertyProps = this.state;
    const nextUrl = '/list-space/amenities-and-rules';

    this.props.storeNewProperty({ newPropertyProps, nextUrl });
  }

  render() {
    const { newProperty } = this.props;
    const { bedrooms, fees, listing } = this.state;

    return (
      <div>
        <ListSpacePage
          title={
            newProperty.listingType === 'entire_space'
              ? 'Rates & Fee Information'
              : `Bedroom Builder for ${newProperty.listingType}`
          }
          currentStep="2"
        >
          {listing ? (
            <div>
              <SubTitle>No. of beds, bed size, nightly rate and more</SubTitle>
              <NightlyRateContainer>
                <UnderlinedFeeInput
                  onChange={this.onChange.bind(null, 'listing', 'rate')}
                  value={listing.rate}
                  placeholder={'Nightly rate'}
                />
                <Tooltip rightAligned={true}>
                  One, flat nightly rate to rent your entire property regardless
                  of the number of beds provided.
                </Tooltip>
              </NightlyRateContainer>
            </div>
          ) : (
            <div>
              <SubTitle>No. of beds, bed size, nightly rate and more</SubTitle>
              <ConfigureLabel>Configure your Bedroom(s)</ConfigureLabel>
              {bedrooms.map((bedroom, idx) => {
                return (
                  <BedroomSection
                    key={idx}
                    bedroom={bedroom}
                    onChange={this.onChange.bind(null, 'bedrooms', idx)}
                  />
                );
              })}
            </div>
          )}
          <AdditionalFeeContainer>
            <ConfigureLabel>
              Additional Fees
              <p>
                Extra fees could include those for parking, cleanings, pets or
                security deposits
              </p>
            </ConfigureLabel>
            {fees.map((fee, idx) => (
              <FeeSection
                key={idx}
                fee={fee}
                onChange={this.onChange.bind(null, 'fees', idx)}
              />
            ))}
            <AddFeeButton onClick={this.addFee}>
              <GreenText>+</GreenText> Add Fees
            </AddFeeButton>
          </AdditionalFeeContainer>
        </ListSpacePage>
        <Footer
          onClickNext={this.onClickNext}
          nextEnabled={true}
          backPath="/list-space/property-basics"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newProperty: state.newProperty,
  bedroomProperty: state.bedroomProperty
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ storeNewProperty }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RatesAndFees);
