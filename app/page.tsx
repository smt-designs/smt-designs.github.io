import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-md border border-gray-200 p-8 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          Mijn UX/UI Opdracht
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Kies een van de onderstaande artikelen om de nieuwe ontwerpen te
          bekijken.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            href="/amodei"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Artikel 1: Dario Amodei
          </Link>
          <Link
            href="/aislop"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Artikel 2: AI-Slop
          </Link>
          <Link
            href="/vibecoding"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Artikel 3: Vibecoding
          </Link>
        </div>
      </div>
    </main>
  );
}
