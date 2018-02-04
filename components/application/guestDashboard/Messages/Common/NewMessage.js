import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import Div from 'components/common/Div';
import { TrashIcon } from 'assets';

const Send = Div.withComponent('button').extend`
	background-color: #48b885;
	color: white;
	font-size: 14px;
	height: 40px;
	width: 108px;
	border-radius: 20px;
	cursor: pointer;
	justify-content: center;
	border: none;
	position: absolute;
	left: 20px;
	bottom: 10px;
`;

const Discard = Div.extend`
  align-items: center;
  position: absolute;
  right: 20px;
  bottom: 10px;
  height: 40px;
  cursor: pointer;
`;

const Text = styled.span`
  margin-left: 10px;
  color: #727272;
  font-size: 14px;
`;

class SendButton extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object
  };

  send() {
    const { editorState, onChange } = this.props;
  }

  render() {
    return <Send onClick={() => this.send()}>Send</Send>;
  }
}

class DiscardDraft extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object
  };

  send() {
    const { editorState, onChange } = this.props;
  }

  render() {
    return (
      <Discard>
        <TrashIcon color={'#727272'} />
        <Text>Discard Draft</Text>
      </Discard>
    );
  }
}

class NewMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }

  onEditorStateChange: Function = editorState => {
    this.setState({
      editorState
    });
  };

  render() {
    const { editorState } = this.state;
    const toolbarOption = {
      options: ['blockType', 'inline', 'link', 'list', 'remove'],
      inline: {
        options: ['bold', 'italic', 'underline']
      },
      link: {
        options: ['link'],
        className: 'editor-link',
        popupClassName: 'editor-link-popup',
        dropdownClassName: 'editor-link-dropdown'
      },
      list: {
        options: ['ordered', 'unordered']
      },
      blockType: {
        className: 'blockType',
        dropdownClassName: 'blockType-dropdown'
      }
    };

    return (
      <Editor
        editorState={editorState}
        wrapperClassName="composer-wrapper"
        editorClassName="composer-editor"
        toolbarClassName="composer-toolbar"
        onEditorStateChange={this.onEditorStateChange}
        toolbar={toolbarOption}
        toolbarCustomButtons={[<SendButton />, <DiscardDraft />]}
      />
    );
  }
}

export default NewMessage;
