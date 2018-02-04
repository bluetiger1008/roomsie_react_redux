import React, { Component } from 'react';
import Column from './Column';
import Slider from 'react-slick';

const ReactSlickContainer = Column.extend`
  .slick-dots {
    bottom: -50px;
  }

  .slick-dots li button:before {
    font-size: 10px;
    color: #d8e4ee;
    opacity: 1;
  }

  .slick-dots li.slick-active button:before,
  .slick-dots li button:hover:before {
    color: #3a8fd2;
    opacity: 1;
  }
  ${props => props.customStyle};
`;

class ReactSlick extends Component {
  render() {
    const { customStyle, innerRef, ...props } = this.props;
    return (
      <ReactSlickContainer customStyle={customStyle}>
        <Slider ref={innerRef} {...props} />
      </ReactSlickContainer>
    );
  }
}

export default ReactSlick;
