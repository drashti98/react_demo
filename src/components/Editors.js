import React from "react";
import {
  EditorContainer,
  Editor,
  InlineToggleButton,
  EditorToolbar,
  ToggleButtonGroup,
} from "draft-js-wysiwyg";
import { EditorState } from "draft-js";
import {
  FormatBold as FormatBoldIcon,
  FormatItalic as FormatItalicIcon,  
  FormatUnderlined as FormatUnderlinedIcon,
  FormatListBulletedRounded as FormatListBulletedRoundedIcon,
} from "@material-ui/icons";
import "draft-js/dist/Draft.css";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editorConfiguration = {
  toolbar: [ 'bold', 'italic', 'underline' ]
};

export const Editors = (props) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);

  React.useEffect(() => {
    editor.current.focus();
  }, []);

  return (
    <>
      <EditorContainer editorState={editorState} onChange={setEditorState}>
        <EditorToolbar>
            <ToggleButtonGroup size="small">
                <InlineToggleButton value="BOLD">
                <FormatBoldIcon />
                </InlineToggleButton>
                <InlineToggleButton value="ITALIC">
                  <FormatItalicIcon />
                </InlineToggleButton>
                <InlineToggleButton value="UNDERLINE">
                <FormatUnderlinedIcon />
                </InlineToggleButton>
                <InlineToggleButton value="unordered-list-item">
                <FormatListBulletedRoundedIcon />
                </InlineToggleButton>
            </ToggleButtonGroup>
            </EditorToolbar>
        <Editor ref={editor} placeholder="Enter some text.." />
      </EditorContainer>

      <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
            editor={ ClassicEditor }
            config={ editorConfiguration }
            data="<p>Hello from CKEditor 5!</p>"
            onReady={ editor => {
                // You can store the "editor" and use when it is needed.
                console.log( 'Editor is ready to use!', editor );
            } }
            onChange={ ( event, editor ) => {
                const data = editor.getData();
                console.log( { event, editor, data } );
            } }
            onBlur={ ( event, editor ) => {
                console.log( 'Blur.', editor );
            } }
            onFocus={ ( event, editor ) => {
                console.log( 'Focus.', editor );
            } }
        />
    </>
  );
};
