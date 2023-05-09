import Image from 'next/image'
import logo from 'assets/logo.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header className='flex h-[93px] flex-row items-center justify-center bg-[#F5DB13]'>
        <nav className='flex max-w-4xl flex-1 flex-row items-center'>
          <Image src={logo} width={157} height={63} alt='logo' className='mx-20' />
          <ul className='flex flex-1 flex-row justify-evenly text-black'>
            <li>
              <Link href='/' className='active:underline'>
                Home
              </Link>
            </li>
            <li>Pokédex</li>
            <li>Legendaries</li>
            <li>Documentation</li>
          </ul>
        </nav>
      </header>
      <main className='flex min-h-[calc(100dvh-93px)] flex-col items-center justify-between p-24'>
        <div> Hello</div>
      </main>
    </>
  )
}
