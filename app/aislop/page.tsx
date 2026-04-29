import Link from 'next/link';
import Image from 'next/image';

export default function AiSlopArticle() {
  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <span className="text-blue-600 font-extrabold tracking-widest uppercase text-xs mb-3 block">
          DE TECHNOCRAAT
        </span>

        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
          Leidt AI-slop tot de dood van sociale media?
        </h1>

        <div className="flex flex-wrap items-center gap-3 text-gray-500 text-sm mb-8 border-b border-gray-200 pb-6">
          <Link
            href="#"
            className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Dominique Deckmyn
          </Link>
          <span className="hidden sm:inline">•</span>
          <time className="font-medium">2 januari 2026 om 23:59</time>
          <span className="hidden sm:inline">•</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-semibold tracking-wide">
            Leestijd: 3 minuten
          </span>
        </div>

        <p className="text-xl font-bold text-gray-800 mb-8 leading-relaxed">
          Sociale media slibben de jongste paar maanden angstwekkend snel dicht
          met AI-slop: video&apos;s met mensen die niet bestaan en gebeurtenissen
          die zich niet hebben voorgedaan. Blijven we daar in 2026 naar kijken?
        </p>

        <figure className="mb-12 mt-8">
          <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src="https://imgs.search.brave.com/RI9HBuQWorYeFZ8ytBOBGQcFokDfIkyZAwA45KFVmGk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcm9t/cHRpLmFpL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzAyL3By/b21wdC0zRC11bHRy/YS1yZWFsaXN0aWMt/Y2F0LXJpZGluZy1h/LWJpa2Uud2VicA"
              alt="Katten op een fiets"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <figcaption className="text-sm text-gray-500 italic mt-4 text-center bg-gray-50 py-3 rounded-xl border border-gray-100">
            Schattige katten, gegenereerd door AI. © youtube
          </figcaption>
        </figure>

        <div className="text-lg text-gray-700 leading-loose space-y-7">
          <p>
            De grootste technologische doorbraak van 2025, of toch die met de
            zichtbaarste gevolgen, zijn de videogenerators als Sora en Veo,
            waardoor iedereen nu in enkele seconden een realistisch uitziende
            video kan maken over elk onderwerp. De grote vraag voor 2026 is:
            willen we daarnaar blijven kijken?
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
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
            Tijdens het eerste tijdperk deelden we ons eigen leven op Facebook
            en Instagram, zei hij. Maar al snel bleek dat we ons liever vergapen
            aan de levens van celebrity&apos;s en influencers – tijdperk twee. En
            nu komt er een stortvloed van AI-video&apos;s aan.
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            Wat willen we echt zien?
          </h2>
          <p>
            Zuckerberg stelt het voor alsof die AI-inhoud er gewoon bovenop
            komt. Maar laten we wel wezen: hoe meer AI in onze feed, hoe minder
            video&apos;s we bekijken van professionele makers en van onze eigen
            vrienden. Nochtans hadden sociale media echt wel een bestaansreden,
            namelijk dat we geïnteresseerd zijn in wat er gebeurt met echte
            mensen. Zijn we in 2026 dan zo veranderd?
          </p>
          <p>
            Volgens Zuckerberg wel. Hij denkt dat dit is wat we écht willen:
            boven op de algoritmes die ons altijd precies tonen wat we graag
            zien, komen nu de videogenerators die daar zonder enige beperking
            eindeloos meer van kunnen genereren. Nog meer kattenvideo&apos;s,
            onmogelijke stunts, spectaculaire taarten of gewelddadige pranks, of
            wat ook je ding mag zijn (elders op het internet krijgen
            pornoliefhebbers nu video&apos;s te zien die almaar meer tonen van wat
            ze willen, ook als dat anatomisch totaal onmogelijk is).
          </p>
          <p>
            Die beelden zijn niet echt. Die mensen bestaan niet, die dingen zijn
            nooit gebeurd. Maar Zuckerberg gaat ervan uit dat dat er niet toe
            doet: u wilt kattenvideo&apos;s, u krijgt kattenvideo&apos;s die nog veel
            schattiger zijn dan in het echt.
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            De dood van sociale media?
          </h2>
          <p>
            Misschien. Maar zelf ben ik de afgelopen twee maanden uiterst
            gevoelig geworden voor AI-slop: vanaf het moment dat ik de indruk
            krijg dat een video AI-gegenereerd is, klik ik &apos;m weg. Net zoals
            ik stop met een tekst te lezen zodra ik vermoed dat ChatGPT de
            voornaamste auteur was.
          </p>
          <p>
            De eerste paar weken was AI-video nieuw en verrassend, dat wel. En
            nu nog is het soms lachen geblazen met sommige van die Sora-filmpjes
            (ook al mijd ik ze). Er is heus wel een plaats voor AI-video,
            bijvoorbeeld om speciale effecten te produceren in films. En er zijn
            creatieve mensen die toffe, vaak heel grappige video&apos;s maken die
            zonder AI onbetaalbaar duur zouden zijn.
          </p>
          <p>
            Maar horen ze thuis op Instagram en Facebook? Dat waren toch
            &apos;sociale&apos; media, nietwaar? Wat precies is de sociale dimensie
            van kijken naar een eindeloze stroom van door een computer
            gegenereerde video&apos;s, aanbevolen door een algoritme? In die zin
            zien we nu de dood van sociale media. Al lijkt Zuckerberg daar niet
            echt van wakker te liggen.
          </p>
        </div>

        <div className="mt-14 mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-center shadow-sm">
          <p className="text-gray-800 font-medium">
            Technocraat <span className="font-bold">Dominique Deckmyn</span> is
            elke vrijdag te horen in de podcast{" "}
            <span className="italic text-blue-600">&lsquo;Bits &amp; atomen&rsquo;</span>.
          </p>
        </div>

        <div className="mt-8">
          <Link
            href="#"
            className="block p-6 bg-white border-2 border-blue-100 hover:border-blue-500 rounded-2xl transition-all duration-300 hover:shadow-lg group"
          >
            <span className="font-extrabold text-blue-600 block mb-2 text-xs uppercase tracking-widest group-hover:text-blue-800 transition-colors">
              Lees Ook
            </span>
            <h3 className="text-gray-900 font-bold text-xl group-hover:text-blue-700 transition-colors">
              Kandidaat-product van het jaar: de AI-videogenerator. &quot;De
              acteursfilm zal duurder worden dan de superheldenproductie&quot;
            </h3>
            <span className="inline-block mt-4 font-semibold text-blue-600 group-hover:translate-x-2 transition-transform">
              Lees artikel →
            </span>
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-wrap gap-3">
          <span className="px-5 py-2 bg-gray-50 hover:bg-gray-200 cursor-pointer text-gray-700 text-sm rounded-full font-semibold border border-gray-200 transition-colors">
            Cultuur en media
          </span>
          <span className="px-5 py-2 bg-gray-50 hover:bg-gray-200 cursor-pointer text-gray-700 text-sm rounded-full font-semibold border border-gray-200 transition-colors">
            De Technocraat
          </span>
          <span className="px-5 py-2 bg-gray-50 hover:bg-gray-200 cursor-pointer text-gray-700 text-sm rounded-full font-semibold border border-gray-200 transition-colors">
            Artificiële intelligentie
          </span>
          <span className="px-5 py-2 bg-gray-50 hover:bg-gray-200 cursor-pointer text-gray-700 text-sm rounded-full font-semibold border border-gray-200 transition-colors">
            Mark Zuckerberg
          </span>
        </div>
      </div>
    </article>
  );
}
