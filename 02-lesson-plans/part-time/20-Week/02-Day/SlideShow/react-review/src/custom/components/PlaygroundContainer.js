import styled from "styled-components";

export const PlaygroundContainer = styled.div`
  .playground {
    flex-wrap: wrap;
    ${props => (props.container ? props.container : "")};
  }
  .playgroundCode {
    flex: 1 1 100%;
    height: auto;
    .CodeMirror div.CodeMirror-cursor {
      border-left: 2px solid #fff;
    }
    .CodeMirror.cm-s-material.CodeMirror-wrap {
      overflow: scroll;
      height: ${props => (props.codeHeight ? props.codeHeight : "500px")};
    }
    .CodeMirror-code {
      font-size: ${props => (props.codeFontSize ? props.codeFontSize : "1rem")};
    }
    ${props => (props.codeStyles ? props.codeStyles : "")};
  }
  .playgroundPreview {
    height: auto;
    .previewArea {
      overflow: scroll;
    }
    .previewArea {
      height: ${props => (props.previewHeight ? props.previewHeight : "200px")};
    }
    &:before {
      display: none;
    }
    ${props => (props.previewStyles ? props.previewStyles : "")};
  }
`;
