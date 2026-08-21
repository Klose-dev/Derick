export interface TokenThemeColors {
  kw: React.CSSProperties;
  str: React.CSSProperties;
  num: React.CSSProperties;
  fn: React.CSSProperties;
  type: React.CSSProperties;
  var: React.CSSProperties;
  comment: React.CSSProperties;
  dim: React.CSSProperties;
  punct: React.CSSProperties;
  operator: React.CSSProperties;
  tag: React.CSSProperties;
  attr: React.CSSProperties;
  embedded: React.CSSProperties;
  regexp: React.CSSProperties;
  string: React.CSSProperties;
  number: React.CSSProperties;
  boolean: React.CSSProperties;
  null: React.CSSProperties;
  undefined: React.CSSProperties;
  key: React.CSSProperties;
  property: React.CSSProperties;
}

export function getOneDarkTokenStyle(type?: keyof TokenThemeColors): React.CSSProperties {
  const colors: Record<keyof TokenThemeColors, React.CSSProperties> = {
    kw: { color: "#c678dd" },
    str: { color: "#98c379" },
    num: { color: "#d19a66" },
    fn: { color: "#61afef" },
    type: { color: "#e5c07b" },
    var: { color: "#e06c75" },
    comment: { color: "#5c6370", fontStyle: "italic" },
    dim: { color: "#abb2bf" },
    punct: { color: "#abb2bf" },
    operator: { color: "#56b6c2" },
    tag: { color: "#e06c75" },
    attr: { color: "#d19a66" },
    embedded: { color: "#c678dd" },
    regexp: { color: "#98c379" },
    string: { color: "#98c379" },
    number: { color: "#d19a66" },
    boolean: { color: "#d19a66" },
    null: { color: "#c678dd" },
    undefined: { color: "#c678dd" },
    key: { color: "#e06c75" },
    property: { color: "#61afef" },
  };

  if (!type) return {};
  return colors[type] || {};
}
