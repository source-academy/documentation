// Taken from http://xahlee.info/js/html5_non-closing_tag.html
const HTML_SELF_CLOSING_TAGS = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

const isSelfClosingTag = (tag) => {
  return HTML_SELF_CLOSING_TAGS.map((t) => `<${t}`).some((t) =>
    tag.startsWith(t)
  );
};

module.exports = {
  isSelfClosingTag,
};
