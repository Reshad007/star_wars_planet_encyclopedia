import React from 'react'
import styled from 'styled-components'

export default function Footer () {
  const dt = new Date()

  return (
    <FooterStyle>
      COPYRIGHT &copy; {dt.getFullYear()} GUIDEDCHOICE SOFTWARE
    </FooterStyle>
  )
}

const FooterStyle = styled.footer`
font-family: Barlow;
margin: 20px 0;
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 14px;
display: flex;
justify-content: center;
color: #999999;
`
