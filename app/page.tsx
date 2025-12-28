import PokemonWrapper from "./components/Pokemon-wrapper";
import PokemonList from "./components/PokemonList";
import SearchInput from "./components/Search-input";

async function getData() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20";
  try {
    const response = await fetch(url, {
      cache: 'force-cache'
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    const pokemonDetails = await Promise.all(
      data.results.map(async (item: { url: string }) => {
        const res = await fetch(item.url);
        const details = await res.json();
        return {
          id: details.id,
          name: details.name,
          types: details.types.map(
            (type: { type: { name: string } }) => type.type.name
          ),
          imageUrl: details.sprites.other["official-artwork"].front_default,
        };
      })
    );

    return pokemonDetails;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error("unknwon error");
    }
  }

  return [];
}

export default async function Home() {
  const pokemonData = await getData();

  return (
    <div className="container mx-auto px-4 py-8  ">
      <div className="min-h-screen bg-linear-to-b from-red-500 to-red-600">
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold mb-8">
          pokedex
        </h1>

    
      <PokemonWrapper pokemons={pokemonData}/>
      </div>
    </div>
  );
}
