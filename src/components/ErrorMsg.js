import React from 'react'
import styled from 'styled-components'

export default function ErrorMsg ({ errMsg }) {
  return (
    <Input value={errMsg} readOnly />
  )
}

const Input = styled.input`
width: 100%;
color: red;
padding: 10px; 
border: 1px solid red;
::placeholder {
  color:#C4C4C4;
}
`
