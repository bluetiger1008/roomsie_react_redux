import React from 'react';
import Div from '../../common/Div';
import { InstagramIcon, FacebookIcon, TwitterIcon } from '../../../assets';

const OuterContainer = Div.extend`
  justify-content: center;
  padding: 75px 0;
  align-items: center;
  flex-direction: column;
`;

const Container = Div.extend`
  width: 1280px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Icon = Div.extend`
  margin: 0 10px;
  cursor: pointer;
`;

const Link = Div.extend`
  margin: 0 20px;
  color: #383838;
  font-size: 18px;
  cursor: pointer;
  font-weight: 400;
`;

const LinkContainer = Div.extend`
  margin: 30px 0 20px 0;
`;

const CopyRight = Div.extend`
  font-size: 14px;
  font-weight: 400;
  color: #686868;
`;

const Footer = () => (
  <OuterContainer>
    <Container>
      <Div>
        <Icon>
          <InstagramIcon color={'#7b7b7b'} />
        </Icon>
        <Icon>
          <FacebookIcon color={'#7399d4'} />
        </Icon>
        <Icon>
          <TwitterIcon color={'#59cef5'} />
        </Icon>
      </Div>
      <LinkContainer>
        <Link>About Us</Link>
        <Link>FAQ</Link>
        <Link>Jobs</Link>
        <Link>Terms and Conditions</Link>
        <Link>Privacy Policy</Link>
      </LinkContainer>
      <CopyRight>© 2018 Roomsie.com. All Rights Reserved</CopyRight>
    </Container>
  </OuterContainer>
);

export default Footer;
