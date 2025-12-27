import { TPokemon } from "@/public/utils/types";

import PokemonCard from "./PokemonCard";

export default function PokemonList({pokemons}:{pokemons: TPokemon[]} )
 {
  return( 
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">

     {pokemons.map((item: TPokemon, idx: number) => (

      
         <PokemonCard key={idx}  {...item} />
        
        ))}
        
        </div>
      )
         
}
