export const sortDates = (a, b) =>
  a.node.frontmatter.publishedDate < b.node.frontmatter.publishedDate ? 1 : -1;
