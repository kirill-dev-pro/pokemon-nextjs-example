/* eslint-disable camelcase */

import clsx from 'clsx'
import { capitalize } from 'lodash'
import Image from 'next/image'
import type { Pokemon } from 'pokenode-ts'

const statsColors = ['bg-pk-blue', 'bg-pk-yellow', 'bg-pk-green']

export async function PokemonView({ name }: { name: string }) {
  const { id, base_experience, stats, abilities, forms, types } = await fetch(
    'https://pokeapi.co/api/v2/pokemon/' + name,
    {
      cache: 'force-cache',
    },
  ).then(res => res.json() as Promise<Pokemon>)

  return (
    <div className='flex flex-row rounded shadow'>
      <div className='z-10 flex w-80 items-center justify-center bg-gradient-to-tr from-red-500 to-pk-red p-4 shadow'>
        <div className='relative h-full w-full'>
          <Image
            src={'/pokemon-images/' + id + '.svg'}
            fill
            alt='image'
            style={{ filter: 'drop-shadow(0 0 0.75rem #000)' }}
          />
          <div className='absolute bottom-0 right-0 flex gap-2'>
            {types.map(({ type }, idx) => (
              <div
                key={idx}
                className={clsx(
                  'grid place-items-center rounded-full p-px px-1 text-sm',
                  statsColors[idx % statsColors.length],
                )}
              >
                {type.name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col justify-between gap-2 bg-gradient-to-b from-[#732119] to-pk-red p-4'>
        <div className='flex items-center'>
          <h1 className='text-3xl text-white'>{capitalize(name)}</h1>
          <div className='flex-1' />
          <h2 className='mx-4 self-end text-lg text-white'>Generation {forms.length || '0'}</h2>
          <div className='grid h-[41px] w-[41px] place-items-center rounded-full bg-pk-yellow'>
            {id}
          </div>
        </div>
        <div className='flex'>
          <div className='rounded-lg bg-white p-2'>
            Abilities:
            <br />
            {abilities.map(({ ability }) => ability.name).join(', ')}
          </div>
        </div>
        <div className='flex gap-4 rounded-lg bg-white p-2'>
          {/* stats */}
          <div className='flex-1'>
            <p>Healthy Points</p>
            {stats.find(({ stat }) => stat.name === 'hp')?.base_stat || 'No data'}
            <div className='relative h-2 w-full overflow-hidden rounded-full bg-gray-200'>
              <div className='absolute left-0 h-2 w-[69%] bg-pk-green' />
            </div>
          </div>
          <div className='flex-1'>
            {/* exp */}
            <p>Experience</p>
            {base_experience}
            <div className='relative h-2 w-full overflow-hidden rounded-full bg-gray-200'>
              <div className='absolute left-0 h-2 w-[69%] bg-pk-yellow' />
            </div>
          </div>
        </div>
        <div className='flex w-full justify-between gap-6'>
          {/* 4 prameters */}
          {stats.map((stat, idx) => {
            let caption
            switch (stat.stat.name) {
              case 'special-attack':
                caption = 'Sp. Atk'
                break
              case 'special-defense':
                caption = 'Sp. Def'
                break
              case 'attack':
                caption = 'Atk'
                break
              case 'defense':
                caption = 'Def'
                break
            }
            if (!caption) return null

            return (
              <div
                key={idx}
                className='flex aspect-square w-20 flex-col items-center gap-1 rounded-lg bg-white p-2'
              >
                <div className='grid h-9 w-9 place-items-center rounded-full border-2 border-black'>
                  {stat.base_stat}
                </div>
                <div>{caption}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
