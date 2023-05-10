import { PokemonView } from 'components/PokemonView'

export default function Page({ params }: { params: { name: string } }) {
  /* @ts-expect-error Async Server Component */
  return <PokemonView name={params.name} />
}
