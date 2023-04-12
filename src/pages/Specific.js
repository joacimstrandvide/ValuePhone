import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import HeaderPart from '../components/HeaderPart'
import { UserInfo } from '../UserInfo'
import FooterPart from '../components/FooterPart'

function Specific() {
    // useContext & useParams
    const { id } = useParams()
    const SomeValue = useContext(UserInfo)

    return (
        <>
            <HeaderPart />
            <div>
                <h1>{SomeValue} till Produktsidan</h1>
                <h3>Här kan du läsa mer om en specifik produkt</h3>
                <h3>Läs mer om: {id}</h3>
            </div>
            <FooterPart />
        </>
    )
}

export default Specific
