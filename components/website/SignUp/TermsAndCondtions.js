import React, { Component } from 'react';
import { Div, theme } from 'components/common';
import { Slide } from './common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { acceptTerms, closeModal } from 'actions';

const Text1 = Div.extend`
  width: 100%;
  color: #494949;
  font-size: 26px;
  font-weight: 700;
  justify-content: flex-start;
  margin: 0 0 20px 0;
`;

const Text2 = Text1.extend`
  font-size: 20px;
  margin: 0 0 17px 0;
`;

const Regular = Div.extend`
  color: #4d4d4d;
  font-size: 19px;
  font-weight: 400;
  margin: 0 0 ${props => (props.less ? '25px' : '38px')} 0;
`;

const ButtonContainer = Div.extend`
  width: 100%;
  justify-content: flex-start;
`;

const AcceptButton = Div.withComponent('button').extend`
  ${theme.button1};
  outline:none;
  height: 45px;
  width: 114px;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;
`;

const DeclineButton = Div.withComponent('button').extend`
  ${theme.button2};
  outline: none;
  height: 45px;
  width: 114px;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
`;

class TermsAndConditions extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
    this.acceptTerms = this.acceptTerms.bind(this);
  }

  close() {
    this.props.closeModal('signup');
  }

  acceptTerms() {
    const { next } = this.props;
    this.props
      .acceptTerms()
      .then(next)
      .catch(console.log);
  }

  render() {
    return (
      <Slide>
        <Text1>Before you join</Text1>
        <Regular>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </Regular>
        <Text2>Roomsie Community Commitment</Text2>
        <Regular>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's since the 1500s.
        </Regular>
        <Text2>Roomsie Terms of Service</Text2>
        <Regular less>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Regular>
        <ButtonContainer>
          <AcceptButton onClick={this.acceptTerms}>Accept</AcceptButton>
          <DeclineButton onClick={this.close}>Decline</DeclineButton>
        </ButtonContainer>
      </Slide>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ acceptTerms, closeModal }, dispatch);

export default connect(null, mapDispatchToProps)(TermsAndConditions);
