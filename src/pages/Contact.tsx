import React from 'react'
import HeaderPart from '../components/HeaderPart'
import styled from 'styled-components'
import FooterPart from '../components/FooterPart'

//Props from App.js
interface BasicProps {
    mail: string
    number: string
}

function Contact(props: BasicProps) {
    return (
        <>
            <HeaderPart />
            <Read>
                <h2>Kontakta Oss</h2>
                <p>Vi här på ValuePhone uppskattar din feedback.</p>
                <p>
                    Vänligen kontakta oss med frågor genom mail eller telefonnummer.
                </p>
                {/* Här används propsen */}
                <h4>{ props.mail }</h4>
                <h4>+{ props.number }</h4>
            </Read>
            <FooterPart />
        </>
    )
}

export default Contact

const Read = styled.div`
    margin: 2rem;
`
