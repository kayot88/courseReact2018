import { createSelector } from 'reselect'

const rangeSelector = (state) => state.range
const articlesSelector = (state) => state.articles

export const filteredArticles = createSelector(
  rangeSelector,
  articlesSelector,
  (range, articles) => {
    const { from, to } = range
    // console.log('---', 'article list selector');
    return articles.filter((item) => {
      const parsed = Date.parse(item.date)
      return parsed <= to && parsed >= from
    })
  }
)
