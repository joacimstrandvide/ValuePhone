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
                <h4>
                    Här kan du läsa om följande produkt <br />
                    <span>
                        <h3>Produkt ID:  {id}</h3>
                    </span>
                </h4>
            </div>
        <FooterPart />
        </>
    )
}

export default Specific
