import React, { Component } from 'react';
import Modal from 'react-modal';
import MobileConfirmation from './MobileConfirmation';
import TermsAndConditions from './TermsAndCondtions';
import VerifyEmail from './VerifyEmail';
import { css } from 'styled-components';
import { Div, Column, ReactSlick as Slider } from 'components/common';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closeModal } from 'actions';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    transform: 'translate(-50%, -50%)'
  }
};

const Container = Column.extend`
  background: white;
  width: 500px;
  justify-content: center;
  align-items: center;
  padding: 50px;
  position: relative;
`;

const CloseButton = Div.extend`
  color: #404040;
  position: absolute;
  font-size: 33px;
  font-weight: 300;
  transform: rotate(45deg);
  top: 20px;
  right: 25px;
  cursor: pointer;
  line-height: 20px;
`;

const SliderContainer = Column.extend`
  width: 100%;
`;

export const SlideContainer = Column.extend`
  padding: 0;
`;

const customDotsStyle = css`
  .slick-dots {
    top: -10px;
    bottom: auto;
  }

  .slick-dots li button:before {
    font-size: 13px;
    color: #d3d3d3;
    opacity: 1;
  }

  .slick-dots li.slick-active button:before,
  .slick-dots li button:hover:before {
    color: #48b885;
    opacity: 1;
  }
`;

class WelcomeWizard extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  close() {
    this.props.closeModal('signup');
  }

  render() {
    const { modalIsOpen, provideInfo, auth } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: false,
      draggable: false,
      adaptiveHeight: true,
      initialSlide: provideInfo
        ? !auth.termsAccepted ? 0 : !auth.phoneNumberVerified ? 1 : 2
        : 0
    };
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={this.close}
        style={customStyles}
      >
        <Container>
          <SliderContainer>
            <Slider
              innerRef={c => (this.slider = c)}
              {...settings}
              customStyle={customDotsStyle}
            >
              <SlideContainer>
                <TermsAndConditions next={this.next} previous={this.previous} />
              </SlideContainer>
              <SlideContainer>
                <MobileConfirmation next={this.next} previous={this.previous} />
              </SlideContainer>
              <SlideContainer>
                <VerifyEmail next={this.next} previous={this.previous} />
              </SlideContainer>
            </Slider>
          </SliderContainer>
          <CloseButton onClick={this.close}>+</CloseButton>
        </Container>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  modalIsOpen: state.modals.signup,
  provideInfo: state.modals.provideInfo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ closeModal }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeWizard);
