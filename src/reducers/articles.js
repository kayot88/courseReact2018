import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'
// import { arrToMap } from './../utils';

export default (articleStore = defaultArticles, action) => {
  const { type, payload, response, error, randomId } = action
  const newArticlesObj = articleStore.reduce(
    (acc, article) => ({
      ...acc,
      [article.id]: article
    }),
    {}
  )
  switch (type) {
    case DELETE_ARTICLE:
      return defaultArticles.filter((article) => article.id !== payload.id)
    case ADD_COMMENT:
      const article = articleStore.find(
        (article) => article.id === payload.articleId
      )
      return {
        ...newArticlesObj,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }

    default:
      articleStore
  }
  return articleStore
}
