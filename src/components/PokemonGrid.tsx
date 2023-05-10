'use client'

import type { Pokemon } from 'types'
import { ChangeEvent, useState } from 'react'
import debounce from 'lodash/debounce'
import chunk from 'lodash/chunk'
import clsx from 'clsx'
import Link from 'next/link'

export function PokemonGrid({ pokemons = [] }: { pokemons: Pokemon[] }) {
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(0)

  const throttledSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toLowerCase())
  }, 500)

  const filteredPokemons = pokemons.filter(({ name }) => name.includes(search.toLocaleLowerCase()))

  const chunks = chunk(filteredPokemons, 24)
  const pages = chunks.map((_, idx) => idx)

  return (
    <div className='flex flex-col items-center gap-4'>
      <input
        onChange={throttledSearch}
        placeholder='Search...'
        className='w-full rounded-full border-gray-300 bg-pk-lightGray p-2 shadow'
      />
      {filteredPokemons.length > 0 ? (
        <div className='grid w-full grid-cols-4 gap-4'>
          {chunks[page].map((pokemon, idx) => (
            <Link key={idx} href={'/pokemon/' + pokemon.name}>
              <button
                className={clsx(
                  'grid h-14 w-full place-items-center bg-pk-lightGray shadow',
                  'transition-all duration-100 hover:scale-105 hover:shadow-lg',
                  'active:translate-y-px',
                )}
              >
                {pokemon.name}
              </button>
            </Link>
          ))}
        </div>
      ) : (
        'No pokemons found'
      )}
      <div className='flex flex-wrap gap-2'>
        {pages.slice(page - 5 < 0 ? 0 : page - 5, page + 5).map(idx => (
          <button
            key={idx}
            onClick={() => setPage(idx)}
            className={clsx(
              'flex h-8 w-8 items-center justify-center rounded-full hover:shadow',
              page === idx ? 'cursor-default bg-gray-300' : 'bg-pk-lightGray',
            )}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
