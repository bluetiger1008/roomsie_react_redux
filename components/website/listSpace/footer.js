import React from 'react';
import { Div, theme } from 'components/common';
import { BackArrowIcon } from 'assets/icons';
import { Link } from 'react-router-dom';

const FooterContainer = Div.extend`
  height: 100px;
  width: 100%;
  justify-content: center;
  background-color: #f7f9fa;
  border-top: 1px solid rgb(230, 233, 235);
  align-items: center;
  margin-top: 40px;
`;

const FooterWrapper = Div.extend`
  width: 685px;
  flex-direction: row;
`;

const NextButton = Div.withComponent('button').extend`
  cursor: pointer;
  height: 45px;
  width: 175px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  background-color: ${props =>
    props.enabled ? theme.colors.green : '#9fd9bf'};
  border-radius: 30px;
  border: none;
  outline: none;
  &:hover {
    background-color: ${props =>
      props.enabled ? theme.colors.darkGreen : '#9fd9bf'};
  }
`;

export const BackLink = Div.extend`
  color: #494949;
  font-size: 16px;
  align-items: center;
  margin-right: 50px;

  a {
    color: #494949;
  }
`;

export const BackLinkText = Div.extend`
  margin-left: 10px;
  display: inline-block;
`;

const Footer = ({ nextEnabled, backPath, onClickNext }) => {
  return (
    <FooterContainer>
      <FooterWrapper>
        {backPath ? (
          <BackLink>
            <Link to={backPath}>
              <BackArrowIcon />
              <BackLinkText>Back</BackLinkText>
            </Link>
          </BackLink>
        ) : null}
        <NextButton onClick={onClickNext} enabled={nextEnabled}>
          Next
        </NextButton>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
