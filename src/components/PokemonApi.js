import React, {useState} from 'react';

const PokemonApi = (props) =>{
    const [pokemons, setPokemons] = useState([]);

    const handleClick = (e) =>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response => {
                return response.json();
            }).then(response => {
            setPokemons(response.results.map(item => item.name));
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <>
            <button onClick={ handleClick }>Fetch Pokemons</button>
            
            <ul>
                {
                    pokemons.map(item =>
                    <li>{item}</li>
                    )
                }
            </ul>
        </>
    );
}
export default PokemonApi;