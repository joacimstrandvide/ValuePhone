import React from 'react'
import HeaderPart from '../components/HeaderPart'
import styled from 'styled-components'
import FooterPart from '../components/FooterPart'

//Props from App.js
interface BasicProps {
    mail: string
    number: number
}

function Contact(props: BasicProps) {
    return (
        <>
            <HeaderPart />
            <Read>
                <h2>Contact Us</h2>
                <p>
                    Please contact us with any questions at the following places.
                </p>
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
