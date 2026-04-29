import Link from 'next/link';

export default function VibecodingArticle() {
  return (
    <article className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        
        {/* Categorie Label */}
        <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3 block">
          DE HELPDESK
        </span>

        {/* Hoofdtitel */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Vibecoding: zo maak je in enkele minuten je eigen games, websites en apps met AI
        </h1>

        {/* Extra Informatie (Auteur, Datum, Leestijd) */}
        <div className="flex flex-wrap items-center gap-3 text-gray-600 text-sm mb-8 border-b border-gray-200 pb-6">
          <Link href="#" className="font-semibold text-blue-600 hover:text-blue-800 hover:underline">
            Dominique Deckmyn
          </Link>
          <span className="hidden sm:inline">•</span>
          <time>23 januari 2026 om 23:59</time>
          <span className="hidden sm:inline">•</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md font-medium">
            Leestijd: 5 minuten
          </span>
        </div>

        {/* Dikgedrukte Inleiding */}
        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
          Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat[cite: 137, 138]. Of liever: AI maakt die voor je[cite: 138].
        </p>

        {/* De Hoofdtekst */}
        <div className="text-lg text-gray-800 leading-relaxed space-y-6">
          <p>
            Het is nog maar januari, maar &apos;vibecoding&apos;, ofwel coderen met AI, maakt al een goede kans om het woord van 2026 te worden[cite: 143]. AI gebruiken om je eigen apps en websites te bouwen is eigenlijk al twee jaar in opmars[cite: 144]. Maar de jongste weken lijkt het fenomeen in een stroomversnelling te zijn gekomen[cite: 145]. Onder meer omdat de nieuwste versies van Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder noemenswaardige voorkennis aan zou kunnen beginnen[cite: 146].
          </p>
          <p>
            Maar is dat zo? Wel: ja en nee[cite: 147]. Ja: een simpel programma, zoals een spelletje dat je in je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar een prompt[cite: 147]. Denk aan &quot;maak een spel waarbij je cocktails moet mixen&quot;[cite: 148]. Al helpt het wel om eerst een paar handigheidjes te leren, wat we hieronder zullen doen[cite: 149].
          </p>
          <p>
            Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week bouwde, dan moet je wel een beetje weten waar je mee bezig bent[cite: 150]. Je hoeft niet te kunnen programmeren, je hoeft zelfs geen programmacode te kunnen lezen, wel moet je nadenken over wat je precies wilt bouwen en welke componenten daarvoor nodig zijn[cite: 151]. Maar hier is het goede nieuws: je kunt klein beginnen en heel snel je grenzen verleggen[cite: 152].
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Een eenvoudig spel</h2>
          <p>
            Hoe klein? Wel, laten we beginnen met zo&apos;n spelletje[cite: 154]. Open een chatbot naar keuze: Gemini, ChatGPT, Copilot, Claude[cite: 154]. De gratis versie volstaat[cite: 155]. En vraag om een simpel spel[cite: 155]. Ik probeerde bijvoorbeeld:
          </p>

          {/* Opvallend code/prompt blok */}
          <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg my-4 shadow-inner">
            &quot;Schrijf een spel waarbij een dinosaurus een bal moet koppen.&quot;
          </div>

          <p>
            Zowel Gemini als ChatGPT doet dat meestal in een paar seconden[cite: 159]. Beide produceren dan een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de programmeertaal Javascript[cite: 160]. Wat doe je met die code? Die bewaar je in een document met de extensie &apos;.html&apos;, bijvoorbeeld &apos;Mijnspelletje.html&apos; op je computer[cite: 161].
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6">
            <h3 className="font-bold text-gray-900 mb-4">Op een Windows-pc:</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li>Klik op de code die de chatbot genereerde (meestal op het &apos;copy&apos;-knopje bovenaan of onderaan) [cite: 163]</li>
              <li>Plak de code in een programma als Windows Kladblok of Macintosh TextEdit [cite: 164]</li>
              <li>Bewaar het bestand met een naam als &apos;dinospel.html&apos; [cite: 165]</li>
              <li>Klik op dinospel.html [cite: 166]</li>
              <li>Het spel opent in je standaardbrowser. En spelen maar! [cite: 167]</li>
            </ol>
          </div>

          <p>
            Als je Microsoft Kladblok gebruikt (dat op elke Windows-pc geïnstalleerd zou moeten zijn), moet je wel op één ding letten: het programma heeft de neiging om elk document te bewaren met de extensie &quot;.txt&quot;[cite: 168]. Hou dus in de gaten dat hij er niet stiekem dinospel.html.txt van heeft gemaakt[cite: 169].
          </p>
          <p>
            Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone[cite: 170]. Wil ik het programma dat ik op mijn pc maakte op mijn smartphone spelen, dan kan ik het bijvoorbeeld naar mijzelf e-mailen en op mijn smartphone de bijlage bewaren[cite: 171].
          </p>
          <p>
            Lukt dat allemaal elke keer? Nee, maar meestal wel, eigenlijk[cite: 172]. Soms begrijpt de chatbot je verkeerd, en moet je wat meer preciseren: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm text-blue-700">&quot;Schrijf het programma in Javascript en zet alles in één bestand.&quot;</span>[cite: 173]. En je kunt ook aanwijzingen geven over de visuele stijl (&apos;laat het eruitzien als een 8-bit computerspel&apos;), de bediening (&apos;met de pijltjestoetsen&apos;) of het spelverloop[cite: 174].
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ambitieuzer: een gezinskalender</h2>
          <p>
            Na een tijdje durfde ik iets meer complexe apps aan[cite: 217]. Terwijl de AI voor grafische apps zoals spelletjes en websites meestal spontaan naar HTML en Javascript zal grijpen, kom je voor apps met meer tekst of cijfers eerder bij de programmeertaal Python uit[cite: 218]. Dat is een prachtige taal om mee aan de slag te gaan, maar je moet wel eerst een werkende Python-omgeving op je computer hebben staan[cite: 219]. Installeer gratis de recentste versie van Python via <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">python.org</a>[cite: 220].
          </p>
          <p>
            Wil je iets met Python uitproberen, dan kun je op dezelfde manier te werk gaan als met Javascript: ChatGPT of Gemini schrijft de code, je plakt die in Kladblok en bewaart hem op je harde schijf – maar nu met de extensie &apos;.py&apos;[cite: 221]. Om hem uit te voeren, moet je dan, vanaf de opdrachtprompt, in de juiste map gaan staan en &apos;python mijnprogramma.py&apos; intikken[cite: 222]. Beetje omslachtig, dus[cite: 223].
          </p>
          <p>
            Voor mijn app Gezinskalender gebruikte ik toch maar Javascript[cite: 224]. Het moest een app worden voor alle leden van een gezin[cite: 224]. Eentje waarin ze elkaars activiteiten zien, maar bijvoorbeeld ook kunnen zien wie van de ouders het zoontje op dinsdagavond naar de voetbaltraining moet brengen[cite: 225]. Ieder gezinslid moet een activiteit kunnen toevoegen[cite: 226].
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Echt agentic werken</h2>
          <p>
            Wie verder wil gaan dan dat – zonder zelf te gaan programmeren – moet &apos;agentic&apos; gaan werken: met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden kan zien en zelf kan wijzigen[cite: 279]. Dan gaat alles veel sneller en kun je eigenlijk haast alles bouwen[cite: 280]. Je kunt de werking en de vormgeving eindeloos verfijnen[cite: 281]. Maar je moet wel een beetje begrijpen waar je mee bezig bent[cite: 281].
          </p>
          <p>
            Je hoort dezer dagen veel over Claude Code, maar ik opteerde voor het gelijkaardige ChatGPT Codex[cite: 282]. Dat vereist de betaalversie van ChatGPT, ChatGPT Plus (23 euro per maand)[cite: 283]. Codex is een &apos;agent&apos;: je geeft nog altijd een instructie via een tekstprompt, maar dan gaat de AI zelfstandig verschillende stappen na elkaar zetten en zelf ook eigen wijzigingen voorstellen[cite: 284]. Je moet alleen nog af en toe op &apos;ja&apos; klikken[cite: 285].
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Voorkennis</h2>
          <p>
            Nog een tip voor wie zijn weg zoekt in vibecoding: in plaats van Kladblok te gebruiken, heb ik intussen een ander gratis programma van Microsoft geïnstalleerd, VS Code[cite: 298]. Met Codex, VS Code en Github, soms nog gecombineerd met Supabase en Vercel, kun je haast alles bouwen[cite: 299]. Letterlijk zonder een lijn code te schrijven, of zelfs maar te lezen[cite: 300].
          </p>
          <p>
            Nog iets: agentic programmeren evolueert momenteel razendsnel[cite: 306]. Wat zes maanden geleden uren werk kostte, komt nu in één keer uit ChatGPT gerold[cite: 306]. Iets vrij complex als mijn Gezinskalender duurt nu enkele uren, maar kun je over een paar weken of maanden waarschijnlijk met twee-drie prompts genereren[cite: 307].
          </p>
        </div>

        {/* Opvallend kader voor Gerelateerde Artikelen */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg flex flex-col space-y-3">
          <span className="font-bold text-gray-900 block text-sm uppercase tracking-wider">Lees Ook:</span>
          <Link href="#" className="text-blue-700 font-semibold hover:text-blue-900 hover:underline text-lg">
            Echt waar: niks AI
          </Link>
          <Link href="#" className="text-blue-700 font-semibold hover:text-blue-900 hover:underline text-lg">
            Mijn destructieve cyberhuwelijk met Claude
          </Link>
        </div>

        {/* Knoppen voor Categorieën onderaan */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800 text-sm rounded-full font-medium border border-gray-300 transition">Inspiratie</span>
          <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800 text-sm rounded-full font-medium border border-gray-300 transition">De helpdesk</span>
          <span className="px-4 py-2 bg-gray-100 hover:bg-gray-200 cursor-pointer text-gray-800 text-sm rounded-full font-medium border border-gray-300 transition">Helpdesk</span>
        </div>
      </div>
    </article>
  );
}
