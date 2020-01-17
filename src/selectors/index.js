import { createSelector } from 'reselect'

export const rangeSelector = (state) => state.range
export const articlesSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const filteredArticles = createSelector(
  rangeSelector,
  articlesSelector,
  (range, articles) => {
    const { from, to } = range
    return articles.filter((item) => {
      const parsed = Date.parse(item.date)
      return parsed <= to && parsed >= from
    })
  }
)

export const createSelectorComments = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'comments selector')
    return comments[id]
  })
