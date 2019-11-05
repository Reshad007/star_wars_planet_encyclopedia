import React, { useState, useEffect } from 'react'
import PlanetsDropdown from './PlanetsDropdown'
import styled from 'styled-components'

export default function AddPlanets ({ getPlanets, reset }) {
  const [planet, setPlanet] = useState('')
  const [suggestedPlanets, setSuggestedPlanets] = useState([])
  const [chosenPlanets, setChosenPlanets] = useState([])
  const [chosenPlanetsUrl, setChosenPlanetsUrl] = useState([])

  useEffect(() => {
    getPlanets(chosenPlanetsUrl)
  }, [chosenPlanetsUrl, getPlanets])

  useEffect(() => {
    if (reset) {
      setChosenPlanets([])
      setChosenPlanetsUrl([])
    }
  }, [reset])

  const selectPlanet = (planet) => {
    setChosenPlanets([...chosenPlanets, planet[0]])
    setChosenPlanetsUrl([...chosenPlanetsUrl, planet[1]])
    setPlanet('')
  }

  const onChange = async (e) => {
    setPlanet(e.target.value)
  }

  async function onKeyUp () {
    const res = await window.fetch(`https://swapi.co/api/planets/?search=${planet}&search_fields=^name`)
    res
      .json()
      .then(res => {
        const search = res.results.filter(result => {
          const regex = new RegExp('^' + planet, 'i')
          return regex.test(result.name)
        })

        setSuggestedPlanets(search)
      })
      .catch(err => console.log(err)
      )
  }

  const onClick = (e) => {
    let deletePlanet = e.target.parentNode.textContent
    deletePlanet = deletePlanet.slice(0, -1)

    setChosenPlanets(chosenPlanets.filter(chosenPlanet => chosenPlanet !== deletePlanet))
  }

  return (
    <Div>
      {chosenPlanets
        ? <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {
            chosenPlanets.map((chosenPlanet, i) => {
              return (
                <div key={i} style={{ marginBottom: '16px' }}>
                  <span style={{ padding: '6px 10px', border: '1px solid #999999', borderRadius: '18px', margin: '0 5px' }}>{chosenPlanet}
                    <button onClick={(e) => onClick(e)} style={{ border: 'none', outline: 'none', marginLeft: '3px' }}>
                  X
                    </button>
                  </span>
                </div>
              )
            })
          }
          </div>
        : null}
      Add Planet
      <InputWrapper>
        <Input onKeyUp={onKeyUp} onChange={(e) => onChange(e)} value={planet} type='text' placeholder='Search for the planet in database' />
        <SearchIcon />
      </InputWrapper>
      {planet && <PlanetsDropdown selectPlanet={selectPlanet} suggestedPlanets={suggestedPlanets} />}
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
background: #FFFFFF;
color: #555555;
`

const Input = styled.input`
border-top-style: hidden;
border-right-style: hidden;
border-left-style: hidden;
border-bottom-style: groove;
font-size: 16px;
line-height: 19px;
outline: none;
padding: 7px 0;
color: #555555;
width: 100%;
  ::placeholder {
    color:#C4C4C4;
  }
`
const InputWrapper = styled.section`
position: relative;
width: 100%;
right: 0px;
`
const SearchIcon = styled.span`
position: absolute;
background: url("/Assets/SEARCH.svg") no-repeat;
padding: 10px;
right: 0px;
`
