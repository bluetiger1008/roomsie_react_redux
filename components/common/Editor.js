import React, { Component } from 'react';
import styled from 'styled-components';
import { Editor as WysiwygEditor } from 'react-draft-wysiwyg';

const Container = styled.div`
  width: 100%;

  .editor-wrapper {
    width: 100%;
  }

  .editor-toolbar {
    margin-bottom: 0;
    border-radius: 0;
    border-color: #ccc;
  }

  .editor-textarea {
    border: 1px solid #ccc;
    border-top: 0;
    width: 100%;
    min-height: 200px;
    padding: 0 10px;
  }
`;

const Editor = ({ editorState, onEditorStateChange }) => {
  return (
    <Container>
      <WysiwygEditor
        toolbar={{
          options: ['blockType', 'inline', 'link', 'list'],
          inline: { options: ['bold', 'italic', 'underline'] },
          list: { options: ['unordered', 'ordered'] },
          link: { options: ['link'] }
        }}
        editorState={editorState}
        wrapperClassName="editor-wrapper"
        toolbarClassName="editor-toolbar"
        editorClassName="editor-textarea"
        onEditorStateChange={onEditorStateChange}
      />
    </Container>
  );
};

export default Editor;
