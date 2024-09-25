import React, { useEffect, useState } from 'react'

function UseEffectInAPI() {
  const [ pokemon, setPokemon ] = useState(null)
  
  useEffect(() => {
    const callingApi = async ()=>{
      try {
        await fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
        .then((res)=> res.json())
        .then((data)=>setPokemon(data))
        
      } catch (error) {
        console.log(error)
      }
    }
    callingApi()
    // return () => {
      
    // };
  }, []);

  return (
    <div>
      <div>
        <img src={pokemon && pokemon.sprites.front_default} alt="" />
        <h1>{pokemon && pokemon.name}</h1>
        </div> 
    </div>
  )
}

export default UseEffectInAPI