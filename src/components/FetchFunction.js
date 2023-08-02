import React, { useState, useEffect } from 'react'
/* styled components */
import styled from 'styled-components'
import { Link } from 'react-router-dom'
/* reactjs popups */
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

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
                        <div className="content">
                            <img
                                src={process.env.PUBLIC_URL + item.img}
                                alt="Phone"
                            />
                            <div className="info">
                                <div className="info-text">
                                    <h2>{item.name}</h2>
                                    <h4>Tillverkare: {item.brand}</h4>
                                    <h4>Pris: {item.price}</h4>
                                    <h4>Antal: {item.amount}</h4>
                                    {item.amount > 10 ? (
                                        <h4>I lager</h4>
                                    ) : (
                                        <h4>Nästan slut</h4>
                                    )}
                                </div>
                                <div className="info-actions">
                                    <Link
                                        id="more"
                                        to={`/specific/${item.name}`}
                                    >
                                        Mer Info
                                    </Link>
                                    <Popup
                                        trigger={
                                            <button id="open">Köp Nu</button>
                                        }
                                        modal
                                        nested
                                    >
                                        {(close) => (
                                            <div className="modal">
                                                <div className="content">
                                                    {item.name} har lagts i
                                                    kundvagnen
                                                </div>
                                                <div>
                                                    <button
                                                        id="close"
                                                        onClick={() => close()}
                                                    >
                                                        Stäng
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </Main>
                ))}
            </Container>
        </>
    )
}

export default FetchFunction

// Css styling
const Container = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto;
    @media (max-width: 450spx) {
        grid-template-rows: auto;
        grid-template-columns: auto;
    }
`

const Main = styled.div`
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
    margin: 2rem auto;
    padding: 1rem;
    color: #000;

    .content {
        display: flex;
        align-items: center;
    }

    img {
        max-width: 150px;
        margin-right: 1rem;
    }

    .info {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .info-text {
        flex: 1;
    }

    .info-actions {
        display: flex;
        gap: 1rem;
        align-self: flex-end;
    }
`
