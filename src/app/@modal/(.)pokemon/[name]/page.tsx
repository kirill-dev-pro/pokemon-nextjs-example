// 'use client'

import { Modal } from 'components/Modal'
import { PokemonView } from 'components/PokemonView'

export default async function PokemonModal({ params }: { params: { name: string } }) {
  return (
    <Modal>
      {/* @ts-expect-error Async Server Component */}
      <PokemonView name={params.name} />
    </Modal>
  )
}
