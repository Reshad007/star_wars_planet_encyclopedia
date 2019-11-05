import { SET_MOVIES, ADD_MOVIE } from './types'

export const setMoviesToRedux = movies => ({
  type: SET_MOVIES,
  payload: movies
})

export const addMovie = movie => ({
  type: ADD_MOVIE,
  payload: movie
})
