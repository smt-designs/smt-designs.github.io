import Link from "next/link";

export default function AmodeiPage() {
  return (
    <article className="mx-auto w-full max-w-3xl py-10">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
        DE TECHNOCRAAT
      </p>
      <h1 className="text-4xl font-extrabold leading-tight text-zinc-900 sm:text-5xl">
        Was het verzet van Dario Amodei tegen minister Hegseth het “Ik ben
        Spartacus!”-moment van Silicon Valley?
      </h1>
      <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
        <span className="rounded-full bg-zinc-900 px-3 py-1 font-semibold text-white">
          Leestijd: 2 minuten
        </span>
        <Link
          href="#"
          className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2 hover:text-blue-900"
        >
          Dominique Deckmyn
        </Link>
        <span>13 maart 2026 om 23:59</span>
      </div>

      <p className="mt-8 text-xl font-bold leading-relaxed text-zinc-900">
        Het verzet van Dario Amodei tegen minister van “Oorlog” Pete Hegseth,
        en de rechtszaak waar dat nu op uitdraait, lijkt steeds meer op een
        keerpunt. Al keert Silicon Valley nooit meer terug naar vroeger.
      </p>

      <section className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">
          Steun uit onverwachte hoek
        </h2>
        <p>
          Big tech schaarde zich deze week haast eenstemmig achter Dario
          Amodei, de bevlogen en tegendraadse oprichter van Anthropic die de
          confrontatie met Maga (Make America Great Again) aandurft. Wie had
          dat zien aankomen? Ze doen dat weliswaar niet via grote publieke
          verklaringen. En ze hoeden er zich voor om Trump frontaal aan te
          vallen. De kritiek zit, in advocatentaal omzwachteld, in een aantal
          zogenoemde amicus briefs, documenten waarin deze bedrijven hun steun
          uitspreken voor Anthropic in zijn juridische strijd tegen het
          Pentagon.
        </p>
        <p>
          Toch staat er rake taal in. De strafmaatregel die minister van
          “Oorlog” Pete Hegseth Anthropic oplegt, namelijk het uitroepen tot
          “risico voor de toeleveringsketen”, creëert “een cultuur van dwang,
          medeplichtigheid en stilte waarbij het publiek begrijpt dat de
          regering alle middelen waarover het beschikt zal gebruiken om te
          straffen wie het aandurft het oneens te zijn”. En dat staat in een
          document dat – indirect – ondertekend is door Amazon, Google en Apple
          (via de belangengroep Chamber of Progress).
        </p>

        <h2 className="pt-4 text-2xl font-bold text-zinc-900">
          Vrije meningsuiting
        </h2>
        <p>
          Is dit nu het “Ik ben Spartacus!’” moment van Silicon Valley? Nee,
          daarvoor is het allemaal veel te voorzichtig. Chamber of Progress
          argumenteert vooral dat Anthropics recht op vrije meningsuiting wordt
          geschonden. Het is Anthropics goed recht om ethische bezwaren te
          formuleren, zeggen ze. Microsoft gaat, opmerkelijk, net iets verder:
          het spreekt zelfs voorzichtige steun uit voor die ethische bezwaren,
          met heel wat mitsen en maren.
        </p>
        <p>
          Opkomen voor het recht op vrije meningsuiting, daarmee steek je in de
          VS je nek niet te ver uit. Trump en zijn Maga-beweging hebben van dat
          begrip natuurlijk wel een heel eigen invulling: jaren hebben ze luid
          geklaagd dat big tech hun eigen meningsuiting beknot, nu verdragen ze
          amper tegenspraak. Maar in wat bredere conservatieve kringen is er
          best nog wel steun voor het idee dat iedereen zijn zegje mag hebben.
        </p>

        <h2 className="pt-4 text-2xl font-bold text-zinc-900">
          Een blijvende verandering
        </h2>
        <p>
          Heeft big tech deze week echt een bocht genomen? Waarschijnlijk wel.
          Of dat is vanwege het inspirerende voorbeeld van Amodei, of omdat ze
          voelen dat de politieke wind stilaan van richting verandert: moeilijk
          te zeggen. Maar hoe dan ook: het wordt niet meer zoals vroeger. We
          zullen van deze ceo’s de komende jaren waarschijnlijk weinig
          politieke gevoelige uitspraken horen.
        </p>
        <p>
          Wanneer deze ceo’s zich in het verleden van hun progressiefste kant
          lieten zien, was dat (zoveel is ondertussen duidelijk) zelden vanuit
          een diepe overtuiging. Het was eerder omdat veel van hun waardevolste
          werknemers dat op prijs stellen. Zo kregen de werknemers van Google
          het bedrijf ooit zo ver dat het een uiterst lucratief contract met
          Defensie liet vallen.
        </p>
        <p>
          Tegenwoordig hebben de werknemers van Silicon Valley veel minder in
          de pap te brokken, en dat merk je. Met één uitzondering, weliswaar:
          de paar honderd AI-experts die de meest geavanceerde LLM’s kunnen
          bouwen. Die zijn zo in trek, en zo rijk, dat ze wél nog de luxe
          hebben om volgens hun overtuiging te handelen. Daarom is het
          waarschijnlijk geen toeval dat de technologiebedrijven net nu en in
          deze zaak beslissen hun rug te rechten: Amodei neemt heel nadrukkelijk
          en moedig een ethisch standpunt in over AI. Dat is bij die
          topontwikkelaars erg goed ontvangen.
        </p>
      </section>

      <aside className="mt-12 rounded-xl border border-zinc-300 bg-zinc-100 p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-600">
          LEES OOK
        </p>
        <p className="mt-2 text-lg font-semibold text-zinc-900">
          ChatGPT boycotten, of meteen de hele big tech?
        </p>
      </aside>

      <div className="mt-8 flex flex-wrap gap-2">
        {[
          "Cultuur en media",
          "De Technocraat",
          "Artificiële intelligentie.",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm text-zinc-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
