import React from 'react'
import styled from 'styled-components'

function FooterPart() {
  return (
    <Footer>2023 ValuePhone Inc</Footer>
  )
}

export default FooterPart

const Footer = styled.div`
    background-color: #000;
    width: 100vw;
    position: static;
    bottom: 0;
    left: 0;
    text-align: center;
    color: #fff;
    padding-top: 1rem;
    padding-bottom: 1rem;
`
