import { formatDate } from './formatDate';

export const sortDates = (a, b) =>
  formatDate(a.node.frontmatter.publishedDate) < formatDate(b.node.frontmatter.publishedDate) ? 1 : -1;
