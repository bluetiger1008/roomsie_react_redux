import React, { Component } from 'react';
import { ClockIcon, RightArrowIcon } from 'assets/index';
import Div from 'components/common/Div';
import { times } from 'lodash';
import theme from 'components/common/theme';

const Container = Div.extend`
  background-color: white;
  ${theme.shadow};
  align-items: flex-start;
  width: 368px;
  margin: 10px 0 10px 10px;
  padding: 40px;
  align-self: flex-start;
  flex-direction: column;
`;

const Column = Div.extend`
  flex-direction: column;
`;

const ActivitiesContainer = Column.extend`
  padding-bottom: 25px;
  border-bottom: 1px solid ${theme.colors.lightYellow};
`;

const Heading = Div.extend`
  font-size: 16px;
  font-weight: 600;
  padding: 0 0 10px 0;
  margin-bottom: 15px;
`;

const BigText = Div.extend`
  font-size: 16px;
  font-weight: 400;
`;

const SmallText = Div.withComponent('span').extend`
  font-size: 13px;
  font-weight: 400;
  color: ${theme.colors.grey};
`;

const Box = Div.extend`
  width: 60px;
  min-width: 60px;
  height: 60px;
  min-height: 60px;
  margin-right: 15px;
  color: white;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.lightYellow};
`;

const Line = Div.extend`
  height: 25px;
  min-height: 25px;
  width: 2px;
  min-width: 2px;
  margin: 0 29px;
  background-color: ${theme.colors.lightYellow};
`;

const LinkContainer = Div.extend`
  margin-top: 25px;
  align-items: center;
  align-self: flex-end;
`;

const Link = Div.extend`
  ${theme.link};
  ${LinkContainer}:hover & {
    color: black;
  }
  margin-right: 10px;
`;

const Pencil = (
  <Box>
    <i className="fa fa-pencil" aria-hidden="true" />
  </Box>
);

const Email = (
  <Box>
    <i className="fa fa-envelope" aria-hidden="true" />
  </Box>
);

const ColumnExtend = Column.extend`
  justify-content: space-between;
`;

const DivExtend = Div.extend`
  align-items: center;
`;

const IconContainer = Div.withComponent('span').extend`
  color: ${theme.colors.green};
  font-size: 13px;
  margin-right: 5px;
`;

const activityHTML = Icon => (
  <Div>
    {Icon}
    <ColumnExtend>
      <BigText>Jim joined a group named Roomsie Ideas</BigText>
      <DivExtend>
        <IconContainer>
          <ClockIcon color={theme.colors.green} />
        </IconContainer>
        <SmallText>1 day ago</SmallText>
      </DivExtend>
    </ColumnExtend>
  </Div>
);

class RecentActivities extends Component {
  render() {
    return (
      <Container>
        <Heading>Recent Activities</Heading>
        <ActivitiesContainer>
          {times(10, i => (
            <Column key={i}>
              {activityHTML(i % 2 === 0 ? Pencil : Email)}
              {i !== 9 ? <Line /> : null}
            </Column>
          ))}
        </ActivitiesContainer>
        <LinkContainer>
          <Link>VIEW FULL HISTORY</Link>
          <RightArrowIcon color={theme.colors.grey} />
        </LinkContainer>
      </Container>
    );
  }
}

export default RecentActivities;
