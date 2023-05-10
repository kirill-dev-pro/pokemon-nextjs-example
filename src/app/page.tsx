import { PokemonGrid } from 'components/PokemonGrid'
import type { Pokemon } from 'types'

export default async function Home() {
  const { results: pokemons, count } = await fetch(
    'https://pokeapi.co/api/v2/pokemon?' +
      new URLSearchParams({
        limit: '10000',
        offset: '0',
      }),
    {
      cache: 'force-cache',
    },
  ).then(res => res.json() as Promise<{ results: Pokemon[]; count: number }>)

  // const { results: pokemons, count } = await pokemonClient.listPokemons(0, 10000)

  return (
    <div className='w-full max-w-2xl'>
      Home
      <h1 className='text-xl'>
        {count} <b>Pokemons</b> for you to choose your favorite
      </h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  )
}
