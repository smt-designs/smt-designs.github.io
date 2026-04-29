export default function AiSlopPage() {
  return (
    <article className="mx-auto w-full max-w-3xl py-10">
      <div className="mb-8 h-72 w-full rounded-xl bg-zinc-300 sm:h-96" />
      <p className="mb-6 text-sm italic text-zinc-500">
        Schattige katten, gegenereerd door AI. youtube
      </p>

      <h1 className="text-4xl font-extrabold leading-tight text-zinc-900 sm:text-5xl">
        Leidt AI-slop tot de dood van sociale media?
      </h1>
      <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-600">
        <span className="font-semibold text-zinc-800">Dominique Deckmyn</span>
        <span>2 januari 2026 om 23:59</span>
      </div>

      <p className="mt-8 text-xl leading-relaxed text-zinc-900">
        De grootste technologische doorbraak van 2025, of toch die met de
        zichtbaarste gevolgen, zijn de videogenerators als Sora en Veo,
        waardoor iedereen nu in enkele seconden een realistisch uitziende video
        kan maken over elk onderwerp. De grote vraag voor 2026 is: willen we
        daarnaar blijven kijken?
      </p>

      <section className="mt-10 space-y-6 text-lg leading-relaxed text-zinc-800">
        <h2 className="text-2xl font-bold text-zinc-900">
          Een stortvloed aan AI-video&apos;s
        </h2>
        <p>
          Dat we zoveel AI-slop te zien krijgen de jongste weken, heeft niet
          alleen te maken met de enorm toegenomen productie, maar ook met wat
          algoritmes ons aanbevelen. Met keuzes die bedrijven als Meta, Google
          en Bytedance (Tiktok) voor ons maken, dus. Als je op Youtube een
          nieuwe account aanmaakt, dan is 20 procent van de video&apos;s die je
          worden aangeboden van AI afkomstig.
        </p>
        <p>
          Mark Zuckerberg heeft het in oktober letterlijk gezegd:
          AI-gegenereerde inhoud betekent een nieuw tijdperk in sociale media.
          Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook en
          Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen aan
          de levens van celebrity&apos;s en influencers - tijdperk twee. En nu
          komt er een stortvloed van AI-video&apos;s aan.
        </p>

        <h2 className="pt-4 text-2xl font-bold text-zinc-900">
          Wat willen we echt zien?
        </h2>
        <p>
          Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop komt.
          Maar laten we wel wezen: hoe meer AI in onze feed, hoe minder
          video&apos;s we bekijken van professionele makers en van onze eigen
          vrienden. Nochtans hadden sociale media echt wel een bestaansreden,
          namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte
          mensen. Zijn we in 2026 dan zo veranderd?
        </p>
        <p>
          Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen:
          boven op de algoritmes die ons altijd precies tonen wat we graag zien,
          komen nu de videogenerators die daar zonder enige beperking eindeloos
          meer van kunnen genereren. Nog meer kattenvideo&apos;s, onmogelijke
          stunts, spectaculaire taarten of gewelddadige pranks. Die beelden
          zijn niet echt. Die mensen bestaan niet, die dingen zijn nooit
          gebeurd. Maar Zuckerberg gaat ervan uit dat dat er niet toe doet.
        </p>

        <h2 className="pt-4 text-2xl font-bold text-zinc-900">
          De dood van sociale media?
        </h2>
        <p>
          Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst gevoelig
          geworden voor AI-slop: vanaf het moment dat ik de indruk krijg dat een
          video AI-gegenereerd is, klik ik &apos;m weg. Net zoals ik stop met een
          tekst te lezen zodra ik vermoed dat ChatGPT de voornaamste auteur was.
        </p>
        <p>
          Er is heus wel een plaats voor AI-video, bijvoorbeeld om speciale
          effecten te produceren in films. En er zijn creatieve mensen die
          toffe, vaak heel grappige video&apos;s maken die zonder AI onbetaalbaar
          duur zouden zijn. Maar horen ze thuis op Instagram en Facebook? Dat
          waren toch &apos;sociale&apos; media, nietwaar? Wat precies is de sociale
          dimensie van kijken naar een eindeloze stroom van door een computer
          gegenereerde video&apos;s, aanbevolen door een algoritme? In die zin
          zien we nu de dood van sociale media. Al lijkt Zuckerberg daar niet
          echt van wakker te liggen.
        </p>
      </section>

      <aside className="mt-12 rounded-xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-sm font-semibold text-blue-700">
          Technocraat Dominique Deckmyn is elke vrijdag te horen in de podcast
          &apos;Bits &amp; atomen&apos;.
        </p>
      </aside>

      <aside className="mt-6 rounded-xl border border-zinc-300 bg-zinc-100 p-5">
        <p className="text-sm font-bold uppercase tracking-wide text-zinc-600">
          LEES OOK
        </p>
        <p className="mt-2 text-lg font-semibold text-zinc-900">
          Kandidaat-product van het jaar: de AI-videogenerator. &quot;De
          acteursfilm zal duurder worden dan de superheldenproductie&quot;
        </p>
      </aside>

      <div className="mt-8 flex flex-wrap gap-2">
        {[
          "Cultuur en media",
          "De Technocraat",
          "Artificiële intelligentie",
          "Mark Zuckerberg.",
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
