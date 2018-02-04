import React from 'react';
import ListSpacePage from './listSpacePage';
import Footer from './footer';
import AddLink from './AddLink';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeNewProperty } from 'actions/listSpace';
import Section from './section';
import {
  Select,
  BaseComponent,
  DateRange,
  Div,
  ErrorAlert,
  Tooltip
} from 'components/common';
import { TrashIcon } from 'assets';
import moment from 'moment-timezone';
import { get } from 'lodash';
import DatesAvailabilityValidator from 'validators/DatesAvailabiltyValidator';
import { DarkLabel } from './Common';

const Child = Div.extend`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  a {
    margin-top: 10px;
    margin-left: 5px;
    cursor: pointer;
  }
`;

const SelectContainer = Div.extend`
  width: 200px;
  margin-right: 10px;
`;

const AddLinkContainer = Div.extend`
  width: 410px;
  position: relative;
`;

const TooltipPositionAbsolute = Div.extend`
  position: absolute;
  right: -35px;
  top: 10px;
`;

class DatesAvailability extends BaseComponent {
  constructor(props) {
    super(props);

    const { sessions, blackoutDates } = props.newProperty;
    const errors = {};

    if (sessions.length == 0) {
      sessions.push({
        minimumStayWeeks: null,
        startDate: moment(),
        endDate: moment().add(1, 'year')
      });
    }

    this.state = { sessions, blackoutDates, errors };

    this.onClickNext = this.onClickNext.bind(this);
    this.addBlackoutDates = this.addBlackoutDates.bind(this);
    this.addSessions = this.addSessions.bind(this);
    this.removeChild = this.removeChild.bind(this);
  }

  minimumStayOptions() {
    return [
      { value: 1, label: '1 Week' },
      { value: 6, label: '6 Weeks' },
      { value: 12, label: '12 Weeks' },
      { value: 16, label: '16 Weeks' }
    ];
  }

  onClickNext() {
    if (this.validate()) {
      const { sessions, blackoutDates } = this.state;
      const newPropertyProps = { sessions, blackoutDates };
      const nextUrl = '/list-space/location-and-photos';
      this.props.storeNewProperty({ newPropertyProps, nextUrl });
    }
  }

  validate() {
    const validator = new DatesAvailabilityValidator(this.state);
    if (validator.call()) {
      return true;
    }

    this.setState(() => {
      const errors = validator.errors;
      return { errors };
    });
    return false;
  }

  addBlackoutDates() {
    this.setState(({ blackoutDates }) => {
      blackoutDates.push({ startDate: null, endDate: null });
      return blackoutDates;
    });
  }

  addSessions() {
    this.setState(({ sessions }) => {
      sessions.push({ minimumStayWeeks: null, startDate: null, endDate: null });
      return sessions;
    });
  }

  removeChild(array, index) {
    this.setState(oldState => {
      const changed = oldState[array];
      changed.splice(index, 1);
      return { [array]: changed };
    });
  }

  render() {
    const { sessions, blackoutDates, errors } = this.state;

    return (
      <div>
        <ListSpacePage
          title="Dates of Availability"
          subTitle="By default our system assumes your home is available 52 weeks unless otherwise specified."
          currentStep="4"
        >
          <ErrorAlert text="Guest booking stays 90 days or less are subject to the District of Columbia's 14.5% hotel tax." />
          <Section>
            <Div>
              <DarkLabel style={{ width: '420px' }}>
                Current Availability
                <Tooltip>
                  Select the dates for which you'd like to rent your property.
                  Our system assumes your home is available for rent year-round
                  unless otherwise specified
                </Tooltip>
              </DarkLabel>

              <DarkLabel>
                Minimum Stay
                <Tooltip>
                  Set the minimum number of consecutive weeks for which you will
                  accept a reservation. This will be optimized by our system to
                  maximize your occupancy.
                </Tooltip>
              </DarkLabel>
            </Div>

            {sessions.map((instance, idx) => {
              return (
                <Child key={idx}>
                  <DateRange
                    startPlaceholder="Start Date"
                    onChangeStart={this.onChange.bind(
                      null,
                      'sessions',
                      idx,
                      'startDate'
                    )}
                    startValue={instance.startDate}
                    startError={get(errors, ['sessions', idx, 'startDate'])}
                    endPlaceholder={'End date'}
                    onChangeEnd={this.onChange.bind(
                      null,
                      'sessions',
                      idx,
                      'endDate'
                    )}
                    endValue={instance.endDate}
                    endError={get(errors, ['sessions', idx, 'endDate'])}
                  />

                  <SelectContainer>
                    <Select
                      options={this.minimumStayOptions()}
                      value={instance.minimumStayWeeks}
                      onChange={this.onChange.bind(
                        null,
                        'sessions',
                        idx,
                        'minimumStayWeeks'
                      )}
                      placeholder={'Minimum Stay'}
                      error={get(errors, ['sessions', idx, 'minimumStayWeeks'])}
                    />
                  </SelectContainer>

                  {idx > 0 ? (
                    <a onClick={this.removeChild.bind(null, 'sessions', idx)}>
                      <TrashIcon color={'#858585'} scale={1.5} />
                    </a>
                  ) : null}
                </Child>
              );
            })}

            <AddLinkContainer>
              <AddLink text="Add Session Dates" onClick={this.addSessions} />
              <TooltipPositionAbsolute>
                <Tooltip>
                  Specify multiple unique date ranges for which your property is
                  available (i.e match your dates with those of local academic
                  calendars or set your own hih & low seasons). Visit our
                  'Support' area for more info.
                </Tooltip>
              </TooltipPositionAbsolute>
            </AddLinkContainer>
          </Section>
          <Section
            title="Blackout Dates for This Property"
            subtitle="Dates for which your property is not available for rent"
          >
            {blackoutDates.map((instance, idx) => {
              return (
                <Child key={idx}>
                  <DateRange
                    startPlaceholder="Start Date"
                    onChangeStart={this.onChange.bind(
                      null,
                      'blackoutDates',
                      idx,
                      'startDate'
                    )}
                    startValue={instance.startDate}
                    startError={get(errors, [
                      'blackoutDates',
                      idx,
                      'startDate'
                    ])}
                    endPlaceholder={'End date'}
                    onChangeEnd={this.onChange.bind(
                      null,
                      'blackoutDates',
                      idx,
                      'endDate'
                    )}
                    endValue={instance.endDate}
                    endError={get(errors, ['blackoutDates', idx, 'endDate'])}
                  />

                  <a
                    onClick={this.removeChild.bind(null, 'blackoutDates', idx)}
                  >
                    <TrashIcon color={'#858585'} scale={1.5} />
                  </a>
                </Child>
              );
            })}

            <AddLinkContainer>
              <AddLink
                text="Add Blackout Dates"
                onClick={this.addBlackoutDates}
              />
            </AddLinkContainer>
          </Section>
        </ListSpacePage>
        <Footer
          onClickNext={this.onClickNext}
          nextEnabled={true}
          backPath={'/list-space/amenities-and-rules'}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  newProperty: state.newProperty
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ storeNewProperty }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DatesAvailability);
