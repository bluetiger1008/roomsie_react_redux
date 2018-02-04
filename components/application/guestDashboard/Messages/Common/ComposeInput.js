import Div from 'components/common/Div';

const ComposeInput = Div.withComponent('input').extend`
  width: 100%;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  border: none;
  border-bottom: 1px solid #efefef;
  font-size: 16px;
  outline: none;
`;

export default ComposeInput;
