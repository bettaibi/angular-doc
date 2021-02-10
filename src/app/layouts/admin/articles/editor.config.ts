import { EditorConfig } from "src/app/shared/myText-editor/myTextEditor.model";

export const editorConfig:  EditorConfig= {
      customClasses: [
      {
        name: 'desc',
        class: 'desc',
      },
      {
        name: 'primaryTitle',
        class: 'primary-title'
      },
      {
        name: 'link',
        class: 'link',
      },
      {
        name: 'codeExample',
        class: 'code',
      },
      {
        name: 'usefulNote',
        class: 'useful-note',
      },
      {
        name: 'display4',
        class: 'display-4',
      },
    ],
    tags: [
      {
        description: 'Paragraph',
        tag: 'p'
      },
      {
        description: 'Heading',
        tag: 'h1'
      },
      {
        description: 'Code',
        tag: 'code'
      }
    ]
};