import { PokemonView } from 'components/PokemonView'
import { capitalize } from 'lodash'

export const generateMetadata = async ({ params }: { params: { name: string } }) => ({
  title: capitalize(params.name) + ' | Pokemons',
})

export default function Page({ params }: { params: { name: string } }) {
  /* @ts-expect-error Async Server Component */
  return <PokemonView name={params.name} />
}
