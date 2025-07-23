import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 py-4 mb-8">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <span className="font-bold text-2xl tracking-tight">Bodega</span>
        </Link>
        <nav>
          <Link href="/learn" className="text-gray-600 hover:text-black font-medium">Learn</Link>
        </nav>
      </div>
    </header>
  );
} 