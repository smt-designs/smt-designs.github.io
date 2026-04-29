import Link from "next/link";

const articles = [
  {
    href: "/amodei",
    title: "Dario Amodei",
    label: "De Technocraat",
    description: "Politiek, AI-ethiek en de rol van Silicon Valley.",
  },
  {
    href: "/aislop",
    title: "AI-Slop",
    label: "Sociale media",
    description: "Wat AI-video's doen met onze feeds en aandacht.",
  },
  {
    href: "/vibecoding",
    title: "Vibecoding",
    label: "De Helpdesk",
    description: "Zelf apps bouwen met AI: van prompt tot product.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white p-6 sm:p-8">
      <section className="mx-auto max-w-4xl">
        <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            UX/UI Project
          </p>
          <h1 className="text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
            Analyse & herontwerp van De Standaard-artikelen
          </h1>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Kies een artikel en bekijk hoe leesbaarheid, hiërarchie en
            interactie verbeterd zijn met Next.js en Tailwind CSS.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                {article.label}
              </span>
              <h2 className="mt-2 text-xl font-extrabold text-gray-900 group-hover:text-blue-700">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600">{article.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-1">
                Open artikel →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
