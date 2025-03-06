import { createClasses } from 'src/theme/create-classes';

// ----------------------------------------------------------------------

export const editorClasses = {
  root: createClasses('editor__root'),
  toolbar: {
    hr: createClasses('editor__toolbar__hr'),
    root: createClasses('editor__toolbar__root'),
    bold: createClasses('editor__toolbar__bold'),
    code: createClasses('editor__toolbar__code'),
    undo: createClasses('editor__toolbar__undo'),
    redo: createClasses('editor__toolbar__redo'),
    link: createClasses('editor__toolbar__link'),
    clear: createClasses('editor__toolbar__clear'),
    image: createClasses('editor__toolbar__image'),
    italic: createClasses('editor__toolbar__italic'),
    strike: createClasses('editor__toolbar__strike'),
    underline: createClasses('editor__toolbar__underline'),
    hardbreak: createClasses('editor__toolbar__hardbreak'),
    unsetlink: createClasses('editor__toolbar__unsetlink'),
    codeBlock: createClasses('editor__toolbar__code__block'),
    alignLeft: createClasses('editor__toolbar__align__left'),
    fullscreen: createClasses('editor__toolbar__fullscreen'),
    blockquote: createClasses('editor__toolbar__blockquote'),
    bulletList: createClasses('editor__toolbar__bullet__list'),
    alignRight: createClasses('editor__toolbar__align__right'),
    orderedList: createClasses('editor__toolbar__ordered__list'),
    alignCenter: createClasses('editor__toolbar__align__center'),
    alignJustify: createClasses('editor__toolbar__align__justify'),
  },
  content: {
    hr: createClasses('editor__content__hr'),
    root: createClasses('editor__content__root'),
    link: createClasses('editor__content__link'),
    image: createClasses('editor__content__image'),
    codeInline: createClasses('editor__content__code'),
    heading: createClasses('editor__content__heading'),
    listItem: createClasses('editor__content__listItem'),
    codeBlock: createClasses('editor__content__code__block'),
    blockquote: createClasses('editor__content__blockquote'),
    langSelect: createClasses('editor__content__lang__select'),
    placeholder: createClasses('editor__content__placeholder'),
    bulletList: createClasses('editor__content__bullet__list'),
    orderedList: createClasses('editor__content__ordered__list'),
  },
};
