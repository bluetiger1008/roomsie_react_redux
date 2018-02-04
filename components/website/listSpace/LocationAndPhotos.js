import React from 'react';
import ListSpacePage from './listSpacePage';
import Footer from './footer';
import Section from './section';
import { BaseComponent } from 'components/common';

class LocationAndPhotos extends BaseComponent {
  render() {
    return (
      <div>
        <ListSpacePage title="Location and Photo Gallery" currentStep="5">
          <Section
            title="Set your Property Location"
            subtitle="Location is the number one priority among potential Roomsie Guests"
          />
        </ListSpacePage>
        <Footer
          onClickNext={() => {}}
          nextEnabled={true}
          backPath={'/list-space/dates-availability'}
        />
      </div>
    );
  }
}
export default LocationAndPhotos;
