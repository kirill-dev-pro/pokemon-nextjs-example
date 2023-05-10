import type { ReactNode } from 'react'
import './globals.css'
import { Header } from 'components/Header'

export const metadata = {
  title: 'Pokemons View',
  description: 'Created with React Server Components and Next.js server rendering',
}

export default function RootLayout({
  children,
  modal,
}: {
  children: ReactNode
  modal?: ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Header className='h-[93px]' />
        <main className='grid min-h-[calc(100dvh-133px)] place-items-center p-2'>{children}</main>
        <footer className='flex h-10 items-center justify-end border-t px-10 '>
          Made with ❤️ by&nbsp;
          <a href='https://github.com/kirill-dev-pro'>Kirill</a>
        </footer>
        {modal}
      </body>
    </html>
  )
}
