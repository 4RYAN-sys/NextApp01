import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Chimera Prime</div>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        
      </ul>
    </nav>
  )
}
