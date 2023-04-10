import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// Icons npm packet
import { IoPhonePortraitOutline } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";


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

    // Enkel alert när man trycker på Köp nu knappen
    function buyClick() {
        alert('Produkten har lagts i kundvagnen')
    }

    return (
        <>
        {/* Använder .map för att ta fram alla föremål */}
            <Container>
                {data.map((item) => (
                    <Main className="main" key={item.id}>
                        <img src={item.img} alt="Company" />
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
                        {item.amount > 10 ? <h4>I lager</h4> : <h4>Nästan slut</h4>}
                        {/* useParams */}
                        <Link to={`/specific/${item.id}`}>Mer Info</Link>
                        <Button onClick={buyClick}>Köp Nu</Button>
                    </Main>
                ))}
            </Container>
        </>
    )
}

export default FetchFunction

// Css styling
const Container = styled.div`
    background-color: grey;
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
    color: #fff;
`

const Button = styled.button`
    padding: .5rem;
    background-color: #fff;
    border: 2px solid #000;
    transition: 0.4s ease-in-out;
    &:hover {
        border: 2px solid #118C4F;
        border-radius: 10px;
        color: #118C4F;
    }
`
