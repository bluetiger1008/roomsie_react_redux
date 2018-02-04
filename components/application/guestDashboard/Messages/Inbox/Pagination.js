import React, { Component } from 'react';
import styled from 'styled-components';

import Div from 'components/common/Div';
import Checkbox from 'components/common/Checkbox';
import SpaceBetween from 'components/common/SpaceBetween';
import { RightArrowIcon, LeftArrowIcon } from 'assets';

const Container = styled.div`
  padding: 20px 12px;
  background-color: #f3f5f6;
`;

const Text = Div.extend`
  font-size: 14px;
  color: #44484a;
  line-height: 35px;
  margin-right: 12px;
`;

const Highlight = styled.div`
  font-weight: 600;
  margin: 0 3px;
`;

const NavButton = styled.button`
  width: 35px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #c9d1d3;
  border-style: solid;
  background-color: white;
  border-top-right-radius: ${props => (props.right ? '5px' : '0px')};
  border-bottom-right-radius: ${props => (props.right ? '5px' : '0px')};
  border-top-left-radius: ${props => (props.left ? '5px' : '0px')};
  border-bottom-left-radius: ${props => (props.left ? '5px' : '0px')};
  border-right: ${props => (props.left ? 'none' : '1px solid #c9d1d3')};
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;

const PageNumber = ({ first, last, total }) => (
  <Text>
    <Highlight>
      {first}-{last}
    </Highlight>{' '}
    of <Highlight>{total}</Highlight>
  </Text>
);

const Navigation = () => (
  <Div>
    <NavButton left>
      <LeftArrowIcon color={'#909799'} />
    </NavButton>
    <NavButton right>
      <RightArrowIcon color={'#909799'} />
    </NavButton>
  </Div>
);

class Pagination extends Component {
  render() {
    return (
      <Container>
        <SpaceBetween>
          <Checkbox />
          <Div>
            <PageNumber first={1} last={15} total={57} />
            <Navigation />
          </Div>
        </SpaceBetween>
      </Container>
    );
  }
}

export default Pagination;
