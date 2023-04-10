import React from 'react'
// Styled components
import styled from 'styled-components'

function HeaderPart() {
    return (
        <div>
            <Header>
                <h1>ValuePhones</h1>
                <h3>Good value phones for a great price</h3>
            </Header>
        </div>
    )
}

export default HeaderPart

// Css styling
const Header = styled.div`
    background-color: #000;
    margin: 0;
    padding: 2rem;
    color: white;
    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
    }
`
