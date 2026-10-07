import Link from 'next/link'

export function Navbar() {
  return (
    <header className="absolute top-0 w-full z-50 py-8 px-6 md:px-12">
      <nav className="flex items-center justify-between max-w-7xl mx-auto text-sm tracking-wide">
        <Link href="/" className="text-xl font-semibold tracking-[0.2em] uppercase">
          RoutePin
        </Link>
        <div className="hidden md:flex items-center gap-12 text-foreground/80">
          <Link href="#travel-map" className="hover:text-sand transition-colors">Travel Map</Link>
          <Link href="#about" className="hover:text-sand transition-colors">About us</Link>
          <Link href="#blog" className="hover:text-sand transition-colors">Blog</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#account" className="flex items-center gap-2 hover:text-sand transition-colors text-foreground/80">
            Account
          </Link>
        </div>
      </nav>
    </header>
  )
}
