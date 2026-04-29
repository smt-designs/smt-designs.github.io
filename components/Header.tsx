import Link from "next/link";

const navItems = [
  { href: "/amodei", label: "Dario Amodei" },
  { href: "/aislop", label: "AI-slop" },
  { href: "/vibecoding", label: "Vibecoding" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between md:py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          ArtikelsWebsite
        </Link>
        <nav className="w-full md:w-auto">
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3 md:flex md:items-center md:gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg border border-zinc-200 bg-white px-3 py-2 text-center text-sm font-semibold text-zinc-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 md:border-transparent md:bg-transparent md:shadow-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
