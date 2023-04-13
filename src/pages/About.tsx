import React from 'react'
import HeaderPart from '../components/HeaderPart'
import styled from 'styled-components'
import FooterPart from '../components/FooterPart'

function About() {

    // Enkel alert när man trycker på mer information knappen
    function readMore() {
        alert('Om du vill veta mer vänligen kontakta oss')
    }

    return (
        <>
            <HeaderPart />
            <Read>
                <h2>Om Oss</h2>
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
                <button onClick={readMore}>Mer information</button>
            </Read>
            <FooterPart />
        </>
    )
}

export default About

const Read = styled.div`
    margin: 2rem;
`
