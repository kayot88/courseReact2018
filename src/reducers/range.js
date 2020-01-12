import { ADD_DATE_DAYPICKER, RESET_DAYPICKER } from '../constants'

const defaultState = { from: undefined, to: null }

export default (state = defaultState, action) => {
  const { type, payload, response, error } = action
  switch (type) {
    case RESET_DAYPICKER:
      return {
        from: undefined,
        to: undefined
      }

    case ADD_DATE_DAYPICKER:
      const { from, to } = payload.date
      return {
        from,
        to
      }

    default:
      state
  }
  return state
}
