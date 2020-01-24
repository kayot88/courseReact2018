import { ADD_COMMENT } from '../constants'
import { normalizedComments as defaultComments } from '../fixtures'
import { normalizedArticles } from '../fixtures'
import { arrToMap } from './../utils'

export default (commentsState = arrToMap(defaultComments), action) => {
  const newCommentsObj = commentsState.reduce(
    (acc, comment) => ({
      ...acc,
      [comment.id]: comment
    }),
    {}
  )
  console.log(newCommentsObj)
  const { type, payload, response, error, randomId } = action
  switch (type) {
    case ADD_COMMENT:
      return {
        ...newCommentsObj,
        [randomId]: { ...payload.comment, id: randomId }
      }

    default:
      return commentsState
  }
}
