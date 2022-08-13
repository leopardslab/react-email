import { convert } from 'html-to-text';

export const generateTextEmailFromHTML = (html: string): string => {
  const plainText = convert(html, {
    formatters: {
      h1Formatter: function (elem, walk, builder, formatOptions) {
        builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
        builder.addInline('# ');
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
      },
      h2Formatter: function (elem, walk, builder, formatOptions) {
        builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
        builder.addInline('## ');
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
      },
      h3Formatter: function (elem, walk, builder, formatOptions) {
        builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
        builder.addInline('### ');
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
      },
      h4Formatter: function (elem, walk, builder, formatOptions) {
        builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
        builder.addInline('#### ');
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
      },
      h5Formatter: function (elem, walk, builder, formatOptions) {
        builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
        builder.addInline('##### ');
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
      },
      h6Formatter: function (elem, walk, builder, formatOptions) {
        builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
        builder.addInline('###### ');
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
      },
      captionFormatter: function (elem, walk, builder) {
        builder.openBlock({ leadingLineBreaks: 1 });
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: 1 });
      },
      quoteFormatter: function (elem, walk, builder, formatOptions) {
        builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 1 });
        builder.addInline('> ');
        walk(elem.children, builder);
        builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 1 });
      },
    },
    selectors: [
      { selector: '#preheader', format: 'skip' },
      { selector: 'h1', format: 'h1Formatter', options: { uppercase: false } },
      { selector: 'h2', format: 'h2Formatter', options: { uppercase: false } },
      { selector: 'h3', format: 'h3Formatter', options: { uppercase: false } },
      { selector: 'h4', format: 'h4Formatter', options: { uppercase: false } },
      { selector: 'h5', format: 'h5Formatter', options: { uppercase: false } },
      { selector: 'h6', format: 'h6Formatter', options: { uppercase: false } },
      { selector: 'table', options: { uppercaseHeaderCells: false } },
      { selector: '#imageCaption', format: 'captionFormatter' },
      { selector: '#quote', format: 'quoteFormatter' },
    ],
  });

  return plainText;
};
