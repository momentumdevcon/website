// Sessionize sends a category even when it has no items (a hand-entered session
// can have an empty Level), so an unchecked index breaks the build.
export const getCategoryItems = (session, categoryId) => {
  const category = ((session && session.categories) || []).find(
    (cat) => cat.alternative_id === categoryId
  )
  return category && category.categoryItems
    ? category.categoryItems.map((item) => item.name)
    : []
}
