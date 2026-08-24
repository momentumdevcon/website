// Sessionize sends a category even when it holds no items. A hand-entered
// session can have an empty Level. An unchecked index then breaks the build.
export const getCategoryItems = (session, categoryId) => {
  const category = ((session && session.categories) || []).find(
    (cat) => cat.alternative_id === categoryId
  )
  return category && category.categoryItems
    ? category.categoryItems.map((item) => item.name)
    : []
}
