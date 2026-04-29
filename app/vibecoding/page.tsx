export default function VibecodingPage() {
  return (
    <article className="mx-auto w-full max-w-3xl py-10">
      <p className="mb-4 inline-block rounded-full bg-emerald-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-emerald-800">
        DE HELPDESK
      </p>
      <h1 className="text-4xl font-extrabold leading-tight text-zinc-900 sm:text-5xl">
        Vibecoding: zo maak je in enkele minuten je eigen games, websites en
        apps met AI
      </h1>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-600">
        <span className="font-semibold text-zinc-800">Dominique Deckmyn</span>
        <span>23 januari 2026 om 23:59</span>
      </div>

      <p className="mt-8 text-xl leading-relaxed text-zinc-900">
        Waarom zou je een app gebruiken die geld kost of een abonnement
        vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding
        maak je een app of website op maat. Of liever: AI maakt die voor je.
        Het is nog maar januari, maar &apos;vibecoding&apos;, ofwel coderen met AI,
        maakt al een goede kans om het woord van 2026 te worden.
      </p>

      <section className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">Een eenvoudig spel</h2>
        <p>
          AI gebruiken om je eigen apps en websites te bouwen is eigenlijk al
          twee jaar in opmars. Maar de jongste weken lijkt het fenomeen in een
          stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste
          versies van Claude, Gemini en ChatGPT zo betrouwbaar kunnen
          programmeren, dat je er zonder noemenswaardige voorkennis aan zou
          kunnen beginnen.
        </p>
        <p>
          Laten we beginnen met een simpel spelletje. Open een chatbot naar
          keuze: Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat.
          En vraag om een simpel spel.
        </p>
        <div className="rounded-xl border border-zinc-300 bg-zinc-900 p-4 font-mono text-sm text-zinc-100">
          &quot;Schrijf een spel waarbij een dinosaurus een bal moet koppen.&quot;
        </div>
        <p>
          Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide
          produceren dan een hoop code in een combinatie van HTML en Javascript.
        </p>

        <h2 className="pt-4 text-2xl font-bold text-zinc-900">
          Hoe bewaar je de code?
        </h2>
        <p>
          Wat doe je met die code? Die bewaar je in een document met de
          extensie &apos;.html&apos; op je computer.
        </p>
        <ol className="list-decimal space-y-3 pl-6">
          <li>
            Klik op de code die de chatbot genereerde (meestal op het
            &apos;copy&apos;-knopje bovenaan of onderaan).
          </li>
          <li>
            Plak de code in een programma als Windows Kladblok of Macintosh
            TextEdit.
          </li>
          <li>Bewaar het bestand met een naam als &apos;dinospel.html&apos;.</li>
          <li>Klik op dinospel.html.</li>
          <li>Het spel opent in je standaardbrowser. En spelen maar!</li>
        </ol>

        <h2 className="pt-4 text-2xl font-bold text-zinc-900">
          Ambitieuzer met Python
        </h2>
        <p>
          Na een tijdje durfde ik iets meer complexe apps aan. Terwijl de AI
          voor grafische apps zoals spelletjes en websites meestal spontaan naar
          HTML en Javascript zal grijpen, kom je voor apps met meer tekst of
          cijfers eerder bij de programmeertaal Python uit. Dat is een prachtige
          taal om mee aan de slag te gaan, maar je moet wel eerst een werkende
          Python-omgeving op je computer hebben staan.
        </p>
        <a
          href="https://www.python.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-blue-700"
        >
          python.org
        </a>
        <p>
          Installeer gratis de recentste versie van Python via python.org. Wil
          je iets met Python uitproberen, dan kun je op dezelfde manier te werk
          gaan: ChatGPT of Gemini schrijft de code, je plakt die in Kladblok en
          bewaart hem op je harde schijf - maar nu met de extensie &apos;.py&apos;.
        </p>
      </section>

      <aside className="mt-12 rounded-xl border border-zinc-300 bg-zinc-100 p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-600">
          LEES OOK
        </p>
        <p className="mt-2 text-lg font-semibold text-zinc-900">
          Echt waar: niks AI / Mijn destructieve cyberhuwelijk met Claude
        </p>
      </aside>
    </article>
  );
}
