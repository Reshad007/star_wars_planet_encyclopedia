import React, { useState, useEffect } from 'react'
import MovieTitle from './MovieTitle'
import AddPlanets from './AddPlanets'
import styled from 'styled-components'
import { addMovie } from '../actions/moviesActions'
import { useDispatch } from 'react-redux'
import ErrorMsg from './ErrorMsg'

export default function AddMovie () {
  const [open, setOpen] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const [title, setTitle] = useState('')
  const [planets, setPlanets] = useState([])
  const [reset, setReset] = useState(false)

  const dispatch = useDispatch()

  const onClick = (e) => {
    e.preventDefault()
    setOpen(!open)
  }

  const addMovieToRedux = () => {
    setErrMsg('')
    if (title.length < 4) {
      setErrMsg('Movie title must be at least three letters long')
      return
    }
    dispatch(addMovie({ title, planets }))
    setTitle('')
    setPlanets([])
    setReset(true)
  }

  useEffect(() => {
    setReset(false)
  }, [reset])

  const getPlanets = (planets) => {
    setPlanets(planets)
  }

  const getTitle = (title) => {
    setTitle(title)
  }

  return (
    <div style={{ width: '100%' }}>
      <MovieName open={open} onClick={(e) => onClick(e)}>
        Add Movie
      </MovieName>
      {open &&
        <>
          <MovieTitle reset={reset} getTitle={getTitle} />
          {errMsg.length > 0 && <ErrWrapper><ErrorMsg errMsg={errMsg} /></ErrWrapper>}
          <AddPlanets reset={reset} getPlanets={getPlanets} />
          <Div>
            <Button onClick={addMovieToRedux}>ADD MOVIE</Button>
          </Div>
        </>}
    </div>
  )
}

const Div = styled.div`
width: 100%;
padding: 0 18px 50px 18px;
font-family: Barlow;
font-weight: 400;
font-size: 12px;
background: #FFFFFF;
color: #555555;
position: relative;
`

const Button = styled.button`
background: #1BA1BE;
border-radius: 4px;
color: white;
padding: 10px 30px;
position: absolute;
right: 15px;
`
const MovieName = styled.button`
font-family: 'Barlow', sans-serif;
font-weight: 700;
background-color: white;
color: #00687F;
cursor: pointer;
padding: 18px;
margin: 18px 0 0 0;
width: 100%;
border: none;
text-align: left;
outline: none;
font-size: 15px;
border-bottom: 1px solid #fff;
  &::after{
  content: ${props => props.open ? 'url("/Assets/ARROW_CLOSE.svg")' : 'url("/Assets/ARROW_OPEN.svg")'}; 
  color: white;
  font-weight: bold;
  float: right;
  }
`
const ErrWrapper = styled.div`
width: 100%;
padding: 0 18px 50px 18px;
font-family: Barlow;
font-weight: 400;
font-size: 12px;
background: #FFFFFF;
color: #555555;
position: relative
`
