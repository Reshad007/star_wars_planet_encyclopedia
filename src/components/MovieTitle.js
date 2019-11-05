import React, { useState, useEffect, useRef } from 'react'
import ErrorMsg from './ErrorMsg'
import styled from 'styled-components'

export default function MovieTitle ({ getTitle, reset }) {
  const [title, setTitle] = useState('')
  const [err, setErr] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    const firstLetter = title.charCodeAt(0)
    if (firstLetter >= 97 && firstLetter <= 122) {
      setErrMsg('Movie title name must start with a capital letter')
      setErr(true)
    }
  }, [title])

  useEffect(() => {
    if (reset) {
      inputRef.current.value = ''
    }
  }, [reset])

  useEffect(() => {
    getTitle(title)
  }, [title, getTitle])

  const onChange = (e) => {
    setErr(false)
    setTitle(e.target.value)
  }
  return (
    <Div err={err}>
      Movie Title
      <Input ref={inputRef} onChange={(e) => onChange(e)} type='text' placeholder='Please enter the title of the movie' />
      {err && <ErrorMsg errMsg={errMsg} />}
    </Div>
  )
}

const Div = styled.div`
display: flex;
flex-direction: column;
padding: 18px 18px 50px 18px;
font-family: Barlow;
font-weight: 400;
font-size: 12px;
line-height: 14px;
padding-bottom: 18px;
background: #FFFFFF;
color: ${props => props.err ? 'red' : '#474747'}
`
const Input = styled.input`
border-top-style: hidden;
border-right-style: hidden;
border-left-style: hidden;
border-bottom-style: groove;
outline: none;
font-size: 16px;
line-height: 19px;
padding: 7px 0;
color: #474747;
::placeholder {
  color:#C4C4C4;
}
`
