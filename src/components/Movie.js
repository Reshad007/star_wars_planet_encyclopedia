import React, { useState, useEffect } from 'react'
import LoadingSpinner from './LoadingSpinner'
import styled from 'styled-components'

export default function Movie ({ movie }) {
  const [open, setOpen] = useState(false)
  const [planets, setPlanets] = useState([])
  const [flag, setFlag] = useState(false)
  const [direction, setDirection] = useState('down')
  const [sortField, setSortField] = useState('Planet Name')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    flag && movie.planets.map(async (url) => {
      const res = await window.fetch(url)
      res
        .json()
        .then((res) => {
          const obj = {
            name: res.name,
            rotationPeriod: res.rotation_period,
            orbitalPeriod: res.orbital_period,
            diameter: res.diameter,
            climate: res.climate,
            surfaceWater: res.surface_water,
            population: res.population
          }
          setPlanets((plan) => [...plan, obj])
        })
        .catch(err => console.log(err)
        )
      setLoading(false)
    })
  }, [flag, movie.planets])

  const onClick = (e) => {
    e.preventDefault()
    setOpen(!open)
    setFlag(true)
  }
  const arrowDownUp = (direction, sortField) => {
    let newOrder
    if (sortField === 'Planet Name') {
      direction === 'down'
        ? newOrder = planets.sort((a, b) => (a.name > b.name) ? 1 : -1)
        : newOrder = planets.sort((a, b) => (a.name > b.name) ? -1 : 1)
    } else if (sortField === 'Rotation Period') {
      direction === 'down'
        ? newOrder = planets.sort((a, b) => a.rotationPeriod - b.rotationPeriod)
        : newOrder = planets.sort((a, b) => b.rotationPeriod - a.rotationPeriod)
    } else if (sortField === 'Orbital Period') {
      direction === 'down'
        ? newOrder = planets.sort((a, b) => a.orbitalPeriod - b.orbitalPeriod)
        : newOrder = planets.sort((a, b) => b.orbitalPeriod - a.orbitalPeriod)
    } else if (sortField === 'Diameter') {
      direction === 'down'
        ? newOrder = planets.sort((a, b) => a.diameter - b.diameter)
        : newOrder = planets.sort((a, b) => b.diameter - a.diameter)
    } else if (sortField === 'Climate') {
      direction === 'down'
        ? newOrder = planets.sort((a, b) => (a.climate > b.climate) ? 1 : -1)
        : newOrder = planets.sort((a, b) => (a.climate > b.climate) ? -1 : 1)
    } else if (sortField === 'Surface Water') {
      direction === 'down'
        ? newOrder = planets.sort((a, b) => a.surfaceWater - b.surfaceWater)
        : newOrder = planets.sort((a, b) => b.surfaceWater - a.surfaceWater)
    } else if (sortField === 'Population') {
      direction === 'down'
        ? newOrder = planets.sort((a, b) => a.population - b.population)
        : newOrder = planets.sort((a, b) => b.population - a.population)
    }
    return newOrder
  }

  const showPlanets = (direction, sortField) => {
    const result = arrowDownUp(direction, sortField)
    return result
  }

  return (
    <>
      <MovieName open={open} onClick={e => onClick(e)}>
        {movie.title}
      </MovieName>
      {open &&
        <CollapsibleContent className='desktop'>
          <Table>
            <Thead className='desktop'>
              <Tr>
                <Td highlight={sortField === 'Planet Name'}>Planet Name
                  <Div>
                    <Button onClick={() => { setDirection('up'); setSortField('Planet Name') }}>
                      <ArrowUp highlight={direction === 'up' && sortField === 'Planet Name'} />
                    </Button>
                    <Button onClick={() => { setDirection('down'); setSortField('Planet Name') }}>
                      <ArrowDown highlight={direction === 'down' && sortField === 'Planet Name'} />
                    </Button>
                  </Div>
                </Td>
                <Td highlight={sortField === 'Rotation Period'}>Rotation Period
                  <Div>
                    <Button onClick={() => { setDirection('up'); setSortField('Rotation Period') }}>
                      <ArrowUp highlight={direction === 'up' && sortField === 'Rotation Period'} />
                    </Button>
                    <Button onClick={() => { setDirection('down'); setSortField('Rotation Period') }}>
                      <ArrowDown highlight={direction === 'down' && sortField === 'Rotation Period'} />
                    </Button>
                  </Div>
                </Td>
                <Td highlight={sortField === 'Orbital Period'}>Orbital Period
                  <Div>
                    <Button onClick={() => { setDirection('up'); setSortField('Orbital Period') }}>
                      <ArrowUp highlight={direction === 'up' && sortField === 'Orbital Period'} />
                    </Button>
                    <Button onClick={() => { setDirection('down'); setSortField('Orbital Period') }}>
                      <ArrowDown highlight={direction === 'down' && sortField === 'Orbital Period'} />
                    </Button>
                  </Div>
                </Td>
                <Td highlight={sortField === 'Diameter'}>Diameter
                  <Div>
                    <Button onClick={() => { setDirection('up'); setSortField('Diameter') }}>
                      <ArrowUp highlight={direction === 'up' && sortField === 'Diameter'} />
                    </Button>
                    <Button onClick={() => { setDirection('down'); setSortField('Diameter') }}>
                      <ArrowDown highlight={direction === 'down' && sortField === 'Diameter'} />
                    </Button>
                  </Div>
                </Td>
                <Td highlight={sortField === 'Climate'}>Climate
                  <Div>
                    <Button onClick={() => { setDirection('up'); setSortField('Climate') }}>
                      <ArrowUp highlight={direction === 'up' && sortField === 'Climate'} />
                    </Button>
                    <Button onClick={() => { setDirection('down'); setSortField('Climate') }}>
                      <ArrowDown highlight={direction === 'down' && sortField === 'Climate'} />
                    </Button>
                  </Div>
                </Td>
                <Td highlight={sortField === 'Surface Water'}>Surface Water
                  <Div>
                    <Button onClick={() => { setDirection('up'); setSortField('Surface Water') }}>
                      <ArrowUp highlight={direction === 'up' && sortField === 'Surface Water'} />
                    </Button>
                    <Button onClick={() => { setDirection('down'); setSortField('Surface Water') }}>
                      <ArrowDown highlight={direction === 'down' && sortField === 'Surface Water'} />
                    </Button>
                  </Div>
                </Td>
                <Td highlight={sortField === 'Population'}>Population
                  <Div>
                    <Button onClick={() => { setDirection('up'); setSortField('Population') }}>
                      <ArrowUp highlight={direction === 'up' && sortField === 'Population'} />
                    </Button>
                    <Button onClick={() => { setDirection('down'); setSortField('Population') }}>
                      <ArrowDown highlight={direction === 'down' && sortField === 'Population'} />
                    </Button>
                  </Div>
                </Td>
              </Tr>
              <tr style={{ padding: 0 }} className='tr'>
                <td>
                  <hr />
                </td>
              </tr>
            </Thead>

            <tbody className='desktop'>
              {
                loading ? <Tr><Td> <Wrapper><LoadingSpinner width='40px' /></Wrapper> </Td></Tr>
                  : (showPlanets(direction, sortField) || []).map((planet, i) => {
                    return (
                      <Tr key={i}>
                        <Td highlight={sortField === 'Planet Name'}>{planet.name}</Td>
                        <Td highlight={sortField === 'Rotation Period'}>{planet.rotationPeriod}</Td>
                        <Td highlight={sortField === 'Orbital Period'}>{planet.orbitalPeriod}</Td>
                        <Td highlight={sortField === 'Diameter'}>{planet.diameter}</Td>
                        <Td highlight={sortField === 'Climate'}>{planet.climate}</Td>
                        <Td highlight={sortField === 'Surface Water'}>{planet.surfaceWater}</Td>
                        <Td highlight={sortField === 'Population'}>{planet.population}</Td>
                      </Tr>
                    )
                  })
              }
            </tbody>
          </Table>
          <table className='table mobile'>
            {
              loading ? <thead><tr><Td> <Wrapper><LoadingSpinner width='40px' /></Wrapper> </Td></tr></thead>
                : (showPlanets(direction, sortField) || []).map((planet, i) => {
                  return (
                    <MobileTbody counter={i} className='mobile-tbody' key={i}>
                      <Tr className='tr left mobile'>
                        <Td className='td'>Planet Name</Td>
                        <Td className='td'>Rotation Period</Td>
                        <Td className='td'>Orbital Period</Td>
                        <Td className='td'>Diameter</Td>
                        <Td className='td'>Climate</Td>
                        <Td className='td'>Surface Water</Td>
                        <Td className='td'>Population</Td>
                      </Tr>
                      <Tr className='tr right mobile'>
                        <Td className='td'>{planet.name}</Td>
                        <Td className='td'>{planet.rotationPeriod}</Td>
                        <Td className='td'>{planet.orbitalPeriod}</Td>
                        <Td className='td'>{planet.diameter}</Td>
                        <Td className='td'>{planet.climate}</Td>
                        <Td className='td'>{planet.surfaceWater}</Td>
                        <Td className='td'>{planet.population}</Td>
                      </Tr>
                    </MobileTbody>
                  )
                })

            }
          </table>
        </CollapsibleContent>}
    </>
  )
}

const Button = styled.button`
  border: none;
  outline: none;
  margin-left: 3px;
`
const Div = styled.div`
  display:flex;
  flex-direction:column;
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
const ArrowUp = styled.div`
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-bottom: 5px solid ${props => props.highlight ? '#00687F' : '#474747'};
`
const ArrowDown = styled.div`
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-top: 5px solid ${props => props.highlight ? '#00687F' : '#474747'};
margin-top: 2px;
`
const Tr = styled.tr`
width: 100%;
display: flex;
`
const Td = styled.td`
width: 100%;
display: flex;
margin: 7.5px 0;
color: ${props => props.highlight ? '#00687F' : '#474747'};
`
const Thead = styled.thead`
margin: 15px 0;
display: flex;
justify-content: space-between;
`
const CollapsibleContent = styled.div`
box-shadow: 0px 5px 5px rgba(196, 196, 196, 0.2) inset;
padding: 0;
padding-bottom: 18px;
background: #FFFFFF;

.table {
  width: 100%;
  min-height: 36px;
  font-family: 'Barlow', sans-serif;
  line-height: 14px;
  font-size: 14px;
  line-height: 17px;
  border-spacing: 0px;
  color: #474747;
}
.mobile-tbody {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
}
.left {
  flex:1;
}
.right {
  flex: 1;
}
.desktop {
  display: none;
}
.tr {
  display: flex;
  flex-direction: column;
  padding:10px;
}
.td {
  margin:  15px 0;
}

@media screen and (min-width: 800px) {
  .desktop {
    display: block;
  }
  .mobile { 
    display: none;
  }
  padding: 0 18px;
}
`
const Table = styled.table`
width: 100%;
font-family: 'Barlow', sans-serif;
font-weight: 400;
font-size: 12px;
line-height: 14px;
padding-bottom : 15px;
`
const Wrapper = styled.div`
  display:flex;
  width: 100%;
  min-height: 30vh;
  justify-content: center;
  align-items: center;
`
const MobileTbody = styled.tbody`
  background-color : ${props => props.counter % 2 === 0 ? '' : 'rgba(229, 229, 229, 0.5)'}; 
`
