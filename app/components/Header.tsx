import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image 
                src="/ev-finder-logo.svg" 
                alt="EV Finder"
                width={40} 
                height={40} 
            />
            <span className="text-2xl font-bold text-secondary">EV Finder</span>
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-primary hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-primary hover:text-secondary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:text-secondary">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 