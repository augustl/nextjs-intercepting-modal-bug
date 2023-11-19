import Link from 'next/link'

export default function Home() {
  return <div>
    <p>Hello, World!</p>
    <p><Link href="/my/arbitrary/cms/page" className='text-blue-500 underline'>Show arbitrary CMS page</Link></p>
    <p><Link href="/things/1" className='text-blue-500 underline'>Show thing 1</Link></p>
    <p><Link href="/things/2" className='text-blue-500 underline'>Show thing 2</Link></p>
  </div>
}
