import React from 'react'
import HeaderPart from '../components/HeaderPart'
import styled from 'styled-components'
import FooterPart from '../components/FooterPart'

function About() {


    return (
        <>
            <HeaderPart />
            <Read>
                <h2>About us</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Veritatis sequi reiciendis architecto sapiente rerum veniam
                    voluptas esse obcaecati dolorum accusantium.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laboriosam a aliquam quod, nisi in dolorum ab asperiores
                    maxime, rerum impedit dicta consequuntur alias, sit voluptas
                    sequi similique. Cumque, doloremque amet?
                </p>
            </Read>
            <FooterPart />
        </>
    )
}

export default About

const Read = styled.div`
    margin: 2rem;
`
