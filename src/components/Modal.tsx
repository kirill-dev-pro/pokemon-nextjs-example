'use client'

import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import type { ReactNode } from 'react'

export function Modal({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <Dialog open onClose={() => router.back()}>
      <div className='fixed inset-0 flex items-center justify-center bg-pk-lightGray/50 p-4'>
        <Dialog.Panel className='w-full max-w-3xl rounded bg-white'>{children}</Dialog.Panel>
      </div>
    </Dialog>
  )
}
