import { Div, theme, Column } from 'components/common';

export const ListSpaceOuterContainer = Div.extend`
  justify-content: center;
  padding-top: 44px;
`;

export const ListSpaceWrapper = Div.extend`
  width: 685px;
  flex-direction: column;
`;

export const ListSpaceContainer = Div.extend`
  flex-direction: column;
  width: 100%;
`;

export const Title = Div.extend`
  font-size: 30px;
  color: ${theme.colors.darkGrey};
`;

export const SubTitle = Div.extend`
  font-size: 17px;
  color: #545454;
  margin: 16px 0 54px;
`;

export const ConfigureContainer = Column.extend`
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const ConfigureContent = Column.extend`
  padding: 25px 30px 17px;
  background-color: #f3f5f6;
`;

export const Type = Div.extend`
  margin-right: 30px;
  label {
    color: #1b1b1b !important;
  }
`;

export const Row = Column.extend`
  flex: 1;
  ${Type} {
    margin-right: 14px;
    height: 40px;
    align-items: center;
  }
`;

export const PropertyLabel = Div.extend`
  font-size: 18px;
  color: #858585;
  margin-bottom: 10px;
`;

export const RowLabel = PropertyLabel.extend`
  font-size: 16px;
`;

export const FeeInputLabel = Div.extend`
  font-size: 16px;
  color: ${theme.colors.inputBlack};
  margin-left: 10px;
`;

export const Label = Div.extend`
  font-size: 18px;
  color: #979493;
  margin-bottom: 12px;
  align-items: center;
`;

export const DarkLabel = Div.extend`
  color: ${theme.colors.darkGrey};
  font-size: 18px;
  font-weight: bold;
  align-items: center;
`;

export default {
  ListSpaceOuterContainer,
  ListSpaceWrapper,
  ListSpaceContainer,
  Title,
  SubTitle,
  ConfigureContainer,
  ConfigureContent,
  Type,
  Row,
  PropertyLabel,
  RowLabel,
  FeeInputLabel,
  Label,
  DarkLabel
};
