import { OPEN_MODAL, CLOSE_MODAL } from './types';

const openModal = modal => dispatch => {
  dispatch({
    type: OPEN_MODAL,
    modal: modal
  });
};

const closeModal = modal => dispatch => {
  dispatch({
    type: CLOSE_MODAL,
    modal: modal
  });
};

export { openModal, closeModal };
