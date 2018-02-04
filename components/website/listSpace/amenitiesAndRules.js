import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListSpacePage from './listSpacePage';
import Footer from './footer';
import fetchAmenities from 'actions/fetchAmenities';
import { storeNewProperty } from 'actions/listSpace';
import { Checkbox, Editor, Div } from 'components/common';
import Section from './section';
import { htmlToEditorState, editorStateToHtml } from 'utils/editorConversion';

const AmenitiesContainer = Div.extend`
  flex-flow: row wrap;

  > * {
    width: 50%;
    margin-bottom: 10px;
  }
`;

class AmenitiesAndRules extends Component {
  constructor() {
    super();

    this.state = {
      amenityIds: new Set([]),
      editorState: htmlToEditorState()
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.toggleAmenityCheckbox = this.toggleAmenityCheckbox.bind(this);
  }

  componentDidMount() {
    this.props.fetchAmenities();
  }

  toggleAmenityCheckbox(id) {
    this.setState(prevState => {
      let amenityIds = prevState.amenityIds;

      amenityIds.has(id) ? amenityIds.delete(id) : amenityIds.add(id);
      return { amenityIds };
    });
  }

  amenityCheckboxes() {
    return this.props.amenityOptions.map(amenity => {
      const { id, name } = amenity;
      const { amenityIds } = this.state;

      return (
        <Checkbox
          id={`amenity_${id}`}
          key={id}
          checked={amenityIds.has(id)}
          label={name}
          onChange={this.toggleAmenityCheckbox.bind(null, id)}
        />
      );
    });
  }

  onEditorStateChange(editorState) {
    this.setState(() => {
      return { editorState };
    });
  }

  onClickNext() {
    const { amenityIds, editorState } = this.state;
    const houseRules = editorStateToHtml(editorState);
    const newPropertyProps = { amenityIds, houseRules };
    const nextUrl = '/list-space/dates-availability';
    this.props.storeNewProperty({ newPropertyProps, nextUrl });
  }

  componentWillReceiveProps(nextProps) {
    const { amenityIds, houseRules } = nextProps.newProperty;

    if (amenityIds) {
      this.setState(() => {
        return { amenityIds };
      });
    }

    if (houseRules) {
      const editorState = htmlToEditorState(houseRules);
      this.setState(() => {
        return { editorState };
      });
    }
  }

  render() {
    const { editorState } = this.state;

    return (
      <div>
        <ListSpacePage title="Amenities & House Rules" currentStep="3">
          <Section
            title="Amenities"
            subtitle="Extra features that help make your property special or unique"
          >
            <AmenitiesContainer>{this.amenityCheckboxes()}</AmenitiesContainer>
          </Section>
          <Section
            title="House Rules"
            subtitle="Let your guests know the house rules or other helpful information"
          >
            <Editor
              editorState={editorState}
              onEditorStateChange={this.onEditorStateChange}
            />
          </Section>
        </ListSpacePage>
        <Footer
          onClickNext={this.onClickNext}
          nextEnabled={true}
          backPath="/list-space/rates-and-fees"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  amenityOptions: state.amenities,
  newProperty: state.newProperty
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchAmenities, storeNewProperty }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AmenitiesAndRules);
