import React from 'react'
import styled from 'styled-components'

export default function LoadingSpinner ({ width }) {
  return (
    <Img width={width} src='/Assets/Loader.svg' alt='Spinning Loader' />
  )
}

const Img = styled.img`
  width: ${props => props.width ? props.width : '100px'};
  animation-name: spin;
  animation-duration: 2000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
        transform:rotate(360deg);
    }
    to {
        transform:rotate(0deg);
    }
  }
`
