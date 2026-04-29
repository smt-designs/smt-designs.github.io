import Link from "next/link";

const navItems = [
  { href: "/amodei", label: "Dario Amodei" },
  { href: "/aislop", label: "AI-slop" },
  { href: "/vibecoding", label: "Vibecoding" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          ArtikelsWebsite
        </Link>
        <nav>
          <ul className="flex items-center gap-2 sm:gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900"
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
