import { ADD_COMMENT } from '../constants'
import { normalizedComments as defaultComments } from '../fixtures'
import { normalizedArticles } from '../fixtures'

export default (commentsState = defaultComments, action) => {
  console.log(typeof commentsState)
  // const newCommentsObj = commentsState.reduce(
  //   (acc, comment) => ({
  //     ...acc,
  //     [comment.id]: comments
  //   }),
  //   {}
  // )
  const { type, payload, response, error, randomId } = action
  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [randomId]: { ...payload.comment, id: randomId }
      }

    default:
      return commentsState
  }
}
