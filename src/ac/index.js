import {
  INCREMENT,
  DELETE_ARTICLE,
  ADD_DATE_DAYPICKER,
  RESET_DAYPICKER,
  ADD_COMMENT
} from '../constants'

export function increment() {
  return { type: INCREMENT }
}
export function resetDate() {
  return { type: RESET_DAYPICKER }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}
export function addDateToDayPicker(date) {
  return {
    type: ADD_DATE_DAYPICKER,
    payload: { date }
  }
}

export function addComment(comment, articleId) {
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generatedId: true
  }
}
