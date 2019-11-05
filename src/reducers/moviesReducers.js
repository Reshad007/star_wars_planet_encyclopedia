import { SET_MOVIES, ADD_MOVIE } from '../actions/types'

const initialState = []
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SET_MOVIES:
      return payload

    case ADD_MOVIE:
      return [...state, payload]

    default:
      return state
  }
}
