import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export const htmlToEditorState = html => {
  if (html) {
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      return EditorState.createWithContent(contentState);
    }
  } else {
    return EditorState.createEmpty();
  }
};

export const editorStateToHtml = editorState => {
  return draftToHtml(convertToRaw(editorState.getCurrentContent()));
};

export default { editorStateToHtml, htmlToEditorState };
