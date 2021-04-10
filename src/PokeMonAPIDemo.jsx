import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PokeMonAPIDemo = () => {
    const [num, setNum] = useState(1);
    const [name, setName] = useState("");
    const [move, setMove] = useState();

    useEffect(() => {
        async function getData() {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((response) => {

                console.log(response);
                if(response.status===200)
                {
                    setName(response.data.name)
                    setMove(response.data.moves.length)
                }

            })

        };
        getData();
    });

    return (
        <>
            <h1>you choose <span style={{color:"red"}}>{num}</span>  value</h1>
            <h1>my name is <span style={{color:"red"}}>{name}</span></h1>
            <h1>I have <span style={{color:"red"}}>{move}</span></h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);

            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};

export default PokeMonAPIDemo;