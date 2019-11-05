import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMoviesToRedux } from '../actions/moviesActions'
import Movie from './Movie'
import LoadingSpinner from './LoadingSpinner'
import styled from 'styled-components'

export default function MoviesList () {
  const [loading, setLoading] = useState(true)
  const [hasError, setErrors] = useState(false)
  const [movies, setMovies] = useState([])

  const moviesFromRedux = useSelector(state => state.movies)
  const dispatch = useDispatch()

  async function fetchData () {
    const res = await window.fetch('https://swapi.co/api/films/')
    res
      .json()
      .then(res => {
        setMovies(...movies, res.results.map(movie => {
          const arr = [...movie.planets]
          return (
            {
              title: movie.title,
              planets: arr
            }
          )
        }))
        // setMovies(res.results)
        dispatch(setMoviesToRedux(res.results))
        return setLoading(false)
      })
      .catch(err => setErrors(err))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    setMovies(moviesFromRedux.map(movie => movie))
  }, [moviesFromRedux])

  return (
    <>
      {loading ? <Wrapper><LoadingSpinner /></Wrapper> : movies.map((movie, index) => <Movie key={index} movie={movie} />)}
      {hasError ? 'There were errors with SWAPI API' : ''}
    </>
  )
}

const Wrapper = styled.div`
  display:flex;
  width: 100%;
  min-height: 50vh;
  justify-content: center;
  align-items: center;
`
