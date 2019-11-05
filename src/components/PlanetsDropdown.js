import React from 'react'
import styled from 'styled-components'

export default function PlanetsDropdown ({ suggestedPlanets, selectPlanet }) {
  const onClick = async (e) => {
    const planet = e.target.value
    const res = await window.fetch(`https://swapi.co/api/planets/?search=${planet}`)
    const url = await res.json().then((res) => res.results[0].url)
    selectPlanet([planet, url])
  }
  return (
    <Div>
      {suggestedPlanets.map((planet, i) => <Input onClick={(e) => onClick(e)} readOnly key={i} value={planet.name} />)}
    </Div>
  )
}

const Div = styled.div`
border: 1px solid #E5E5E5;
display: flex;
flex-direction: column
`

const Input = styled.input`
font-size: 16px;
line-height: 19px;
padding: 10px;
border: none;
outline: none;
color: #555555;
  &:hover{
    cursor: pointer;
    background-color: rgb(222, 222, 222);
  }
  ::placeholder {
    color:#C4C4C4;
  }
`
