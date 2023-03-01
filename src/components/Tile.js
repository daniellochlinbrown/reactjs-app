import React from 'react'
import logo from '../logo.svg';

function Tile({ name }) {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <p>{`Hello ${name}`}</p>

        </>
    );
}

export default Tile;