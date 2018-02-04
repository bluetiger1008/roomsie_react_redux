import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Div from 'components/common/Div';
import theme from 'components/common/theme';
import Sidebar from './Sidebar';
import DashboardRouters from './DashboardRouters';

const OuterContainer = Div.extend`
  background-color: #f3f5f6;
  margin-top: 2px;
  justify-content: center;
`;

const Container = Div.extend`
  width: 1280px;
  padding-top: 36px;
  background-color: ${theme.colors.background};
  justify-content: space-between;
`;

const Right = Div.extend`
  width: 1062px;
  flex-direction: column;
`;

class Content extends Component {
  render() {
    return (
      <OuterContainer>
        <Container>
          <div>
            <Sidebar />
          </div>
          <Right>
            <BrowserRouter>
              <DashboardRouters />
            </BrowserRouter>
          </Right>
        </Container>
      </OuterContainer>
    );
  }
}

export default Content;
