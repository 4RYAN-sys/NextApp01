import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Chimera Prime</div>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/services">Projects</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/careers">Careers</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <button className="bg-secondary px-4 py-2 rounded hover:bg-blue-700">Client login</button>
    </nav>
  )
}
