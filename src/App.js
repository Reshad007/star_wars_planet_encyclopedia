import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { store } from './store'
import styled from 'styled-components'
import Footer from './components/Footer'
import MoviesList from './components/MoviesList'
import AddMovie from './components/AddMovie'

export default function App () {
  return (
    <Provider store={store}>
      <Wrapper>
        <Header>
          <Logo src='/Assets/LOGO.svg' alt='Logo' />
        </Header>
        <MoviesList />
      </Wrapper>
      <Divider src='/Assets/DOTT_LINE.svg' alt='Logo' />
      <Wrapper>
        <AddMovie />
        <Footer />
      </Wrapper>
    </Provider>
  )
}

const Divider = styled.img`
  width:100%;
  margin-top: 32px;
  margin-bottom: 16px;
`
const Logo = styled.img`
  margin-top:32px;
`
const Header = styled.header`
  display:flex;
  justify-content: center;
`
const Wrapper = styled.div`
  margin: 0 10%;
`
