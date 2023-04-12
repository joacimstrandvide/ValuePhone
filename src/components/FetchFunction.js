import React, { useState, useEffect } from 'react'
/* styled components */
import styled from 'styled-components'
import { Link } from 'react-router-dom'
/* reactjs popups */
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
// Icons npm packet
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { BsCashCoin } from 'react-icons/bs'

function FetchFunction() {
    // useState
    const [data, setData] = useState([])

    // useEffect för att fetcha från en lokal JSON fil
    useEffect(() => {
        fetch('phones.json', {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => setData(data))
    }, [])

    return (
        <>
            {/* Använder .map för att ta fram alla föremål */}
            <Container>
                {data.map((item) => (
                    <Main className="main" key={item.id}>
                        <img src={item.img} alt="Phone" />
                        <h3>{item.name}</h3>
                        <h4>
                            <IoPhonePortraitOutline />
                            {item.brand}
                        </h4>
                        <h4>
                            <BsCashCoin />
                            {item.price}
                        </h4>
                        {/* Ternary operator */}
                        {item.amount > 10 ? (
                            <h4>I lager</h4>
                        ) : (
                            <h4>Nästan slut</h4>
                        )}
                        {/* useParams */}
                        <Link id="more" to={`/specific/${item.name}`}>
                            Mer Info
                        </Link>
                        {/* Popups npm packet för bättre popups */}
                        <Popup
                            trigger={<button id='open'>Köp Nu</button>}
                            modal
                            nested
                        >
                            {(close) => (
                                <div className="modal">
                                    <div className="content">
                                        {item.name} har lagts i kundvagnen
                                    </div>
                                    <div>
                                        <button id='close' onClick={() => close()}>
                                            Stäng
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </Main>
                ))}
            </Container>
        </>
    )
}

export default FetchFunction

// Css styling
const Container = styled.div`
    background-color: #fff;
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto;
    @media (max-width: 500px) {
        grid-template-rows: auto;
        grid-template-columns: auto;
    }
`

const Main = styled.div`
    margin: 2rem auto auto auto;
    padding: 1rem;
    color: #000;
`
