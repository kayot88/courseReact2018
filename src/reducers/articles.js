import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'

export default (articleStore = defaultArticles, action) => {
  const { type, payload, response, error } = action
  switch (type) {
    case DELETE_ARTICLE:
      return defaultArticles.filter((article) => article.id !== payload.id)
    default:
      articleStore
  }
  return articleStore
}
