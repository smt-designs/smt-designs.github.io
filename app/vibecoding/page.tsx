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
            Leestijd: 6 minuten
          </span>
        </div>

        {/* Dikgedrukte Inleiding */}
        <p className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
          Waarom zou je een app gebruiken die geld kost of een abonnement vereist, en toch niet helemaal doet wat je nodig hebt? Met vibecoding maak je een app of website op maat. Of liever: AI maakt die voor je.
        </p>

        {/* De Hoofdtekst */}
        <div className="text-lg text-gray-800 leading-relaxed space-y-6">
          <p>
            Het is nog maar januari, maar &apos;vibecoding&apos;, ofwel coderen met AI, maakt al een goede kans om het woord van 2026 te worden. AI gebruiken om je eigen apps en websites te bouwen is eigenlijk al twee jaar in opmars. Maar de jongste weken lijkt het fenomeen in een stroomversnelling te zijn gekomen. Onder meer omdat de nieuwste versies van Claude, Gemini en ChatGPT zo betrouwbaar kunnen programmeren, dat je er zonder noemenswaardige voorkennis aan zou kunnen beginnen.
          </p>
          <p>
            Maar is dat zo? Wel: ja en nee. Ja: een simpel programma, zoals een spelletje dat je in je browser kunt spelen, dat kun je nu werkelijk in een-twee-drie maken met alleen maar een prompt. Denk aan &quot;maak een spel waarbij je cocktails moet mixen&quot;. Al helpt het wel om eerst een paar handigheidjes te leren, wat we hieronder zullen doen.
          </p>
          <p>
            Wil je iets ambitieuzers ontwikkelen, zoals de gezinskalender-app die ik vorige week bouwde, dan moet je wel een beetje weten waar je mee bezig bent. Je hoeft niet te kunnen programmeren, je hoeft zelfs geen programmacode te kunnen lezen, wel moet je nadenken over wat je precies wilt bouwen en welke componenten daarvoor nodig zijn. Maar hier is het goede nieuws: je kunt klein beginnen en heel snel je grenzen verleggen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Een eenvoudig spel</h2>
          <p>
            Hoe klein? Wel, laten we beginnen met zo&apos;n spelletje. Open een chatbot naar keuze: Gemini, ChatGPT, Copilot, Claude. De gratis versie volstaat. En vraag om een simpel spel. Ik probeerde bijvoorbeeld:
          </p>

          {/* Opvallend code/prompt blok */}
          <div className="bg-gray-900 text-green-400 font-mono p-4 rounded-lg my-4 shadow-inner">
            &quot;Schrijf een spel waarbij een dinosaurus een bal moet koppen.&quot;
          </div>

          <p>
            Zowel Gemini als ChatGPT doet dat meestal in een paar seconden. Beide produceren dan een hoop code in een combinatie van HTML (de opmaaktaal van het web) en de programmeertaal Javascript. Wat doe je met die code? Die bewaar je in een document met de extensie &apos;.html&apos;, bijvoorbeeld &apos;Mijnspelletje.html&apos; op je computer.
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-6">
            <h3 className="font-bold text-gray-900 mb-4">Op een Windows-pc:</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li>Klik op de code die de chatbot genereerde (meestal op het &apos;copy&apos;-knopje bovenaan of onderaan)</li>
              <li>Plak de code in een programma als Windows Kladblok of Macintosh TextEdit</li>
              <li>Bewaar het bestand met een naam als &apos;dinospel.html&apos;</li>
              <li>Klik op dinospel.html</li>
              <li>Het spel opent in je standaardbrowser. En spelen maar!</li>
            </ol>
          </div>

          <p>
            Als je Microsoft Kladblok gebruikt (dat op elke Windows-pc geïnstalleerd zou moeten zijn), moet je wel op één ding letten: het programma heeft de neiging om elk document te bewaren met de extensie &quot;.txt&quot;. Hou dus in de gaten dat hij er niet stiekem dinospel.html.txt van heeft gemaakt.
          </p>
          <p>
            Ik vibecode het liefst op mijn laptop, maar het kan ook op een smartphone. Wil ik het programma dat ik op mijn pc maakte op mijn smartphone spelen, dan kan ik het bijvoorbeeld naar mijzelf e-mailen en op mijn smartphone de bijlage bewaren.
          </p>
          <p>
            Lukt dat allemaal elke keer? Nee, maar meestal wel, eigenlijk. Soms begrijpt de chatbot je verkeerd, en moet je wat meer preciseren: <span className="font-mono bg-gray-100 px-2 py-1 rounded text-sm text-blue-700">&quot;Schrijf het programma in Javascript en zet alles in één bestand.&quot;</span> En je kunt ook aanwijzingen geven over de visuele stijl (&apos;laat het eruitzien als een 8-bit computerspel&apos;), de bediening (&apos;met de pijltjestoetsen&apos;) of het spelverloop.
          </p>
          <p>
            Vaak zit de eerste versie niet helemaal goed: er wordt geen score bijgehouden, bijvoorbeeld, of de voorwerpen in het spel bewegen te snel of juist te traag. Dan doe je een tweede ronde: je vraagt aan ChatGPT of Gemini om de nodige aanpassingen. En hop: een verbeterde versie verschijnt, die je op dezelfde manier op je harde schijf bewaart.
          </p>
          <p>
            Op die manier krijg je meestal spelletjes die sterk geïnspireerd zijn op wat al bestaat. Maar het is zeker ook mogelijk om meer originele spelletjes te bouwen, als je een meer gedetailleerde beschrijving geeft. Stap voor stap uitbreiden met extra functies of effecten (geluid!) kan ook.
          </p>
          <p>
            Zo bouwde ik in vijf stappen een &apos;cocktailspel&apos;, waarbij je in enkele seconden een cocktail moet mixen op basis van een recept. De eerste versie was wat saai, dus ik voegde er opties als &apos;schudden&apos; en &apos;parasolletje&apos; aan toe.
          </p>
          <p>
            ChatGPT schreef dit spel in een aantal stappen, na telkens een kleine bijsturing. Elke keer dat een programma een foutmelding geeft, kleef je die foutmelding in ChatGPT met de vraag om die fout te repareren. Dat lukt vaak meteen, soms moet je een paar keer proberen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Ambitieuzer: een gezinskalender</h2>
          <p>
            Na een tijdje durfde ik iets meer complexe apps aan. Terwijl de AI voor grafische apps zoals spelletjes en websites meestal spontaan naar HTML en Javascript zal grijpen, kom je voor apps met meer tekst of cijfers eerder bij de programmeertaal Python uit. Dat is een prachtige taal om mee aan de slag te gaan, maar je moet wel eerst een werkende Python-omgeving op je computer hebben staan. Installeer gratis de recentste versie van Python via <a href="https://www.python.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold hover:underline">python.org</a>.
          </p>
          <p>
            Wil je iets met Python uitproberen, dan kun je op dezelfde manier te werk gaan als met Javascript: ChatGPT of Gemini schrijft de code, je plakt die in Kladblok en bewaart hem op je harde schijf – maar nu met de extensie &apos;.py&apos;. Om hem uit te voeren, moet je dan, vanaf de opdrachtprompt, in de juiste map gaan staan en &apos;python mijnprogramma.py&apos; intikken. Beetje omslachtig, dus.
          </p>
          <p>
            Voor mijn app Gezinskalender gebruikte ik toch maar Javascript. Het moest een app worden voor alle leden van een gezin. Eentje waarin ze elkaars activiteiten zien, maar bijvoorbeeld ook kunnen zien wie van de ouders het zoontje op dinsdagavond naar de voetbaltraining moet brengen. Ieder gezinslid moet een activiteit kunnen toevoegen.
          </p>
          <p>
            Dat is te ingewikkeld voor een programma van één bestand. De app bestaat dus, opnieuw, uit HTML en Javascript. De tabel met alle activiteiten moet toegankelijk zijn voor iedereen en moet dus ergens centraal worden bewaard. ChatGPT suggereerde een paar opties, ik koos daaruit Supabase, een cloud-database. Om iedereen toegang te geven tot dezelfde versie van het programma, heb ik het &apos;gehost&apos; op een site die Vercel heet. Op beide sites maakte ik gratis accounts aan. Ik liet me elke stap in detail uitleggen door ChatGPT, het lukte zonder dat ik iets moest leren over Vercel of Supabase.
          </p>
          <p>
            Ik besliste uiteindelijk, alweer op advies van ChatGPT, om mijn programma niet zomaar op mijn harde schijf te bewaren maar op de gespecialiseerde website Github, met een gratis account. Github houdt alle veranderingen aan je programma bij, zodat je altijd kunt terugkeren naar een eerdere, werkende versie.
          </p>
          <p>
            ChatGPT stelde voor eerst een versie te maken met minimale functionaliteit. Die bestond al uit een viertal verschillende bestanden die ik telkens, met de juiste naam, in dezelfde map moest bewaren. Bij foutmeldingen plakte ik die melding opnieuw in ChatGPT, dat een verbeterde versie van de bestanden maakte. Ja, dat kan behoorlijk omslachtig worden.
          </p>
          <p>
            Met al dat knippen en plakken was ik zo al snel drie uur bezig. Het resultaat: een werkende app, maar wel een die er nogal belabberd uitzag en waar je, bijvoorbeeld, een activiteit wel kon toevoegen maar niet kon wissen of wijzigen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Echt agentic werken</h2>
          <p>
            Wie verder wil gaan dan dat – zonder zelf te gaan programmeren – moet &apos;agentic&apos; gaan werken: met een AI-systeem dat zelfstandig aan de slag gaat en je programmabestanden kan zien en zelf kan wijzigen. Dan gaat alles veel sneller en kun je eigenlijk haast alles bouwen. Je kunt de werking en de vormgeving eindeloos verfijnen. Maar je moet wel een beetje begrijpen waar je mee bezig bent.
          </p>
          <p>
            Je hoort dezer dagen veel over Claude Code, maar ik opteerde voor het gelijkaardige ChatGPT Codex. Dat vereist de betaalversie van ChatGPT, ChatGPT Plus (23 euro per maand). Codex is een &apos;agent&apos;: je geeft nog altijd een instructie via een tekstprompt, maar dan gaat de AI zelfstandig verschillende stappen na elkaar zetten en zelf ook eigen wijzigingen voorstellen. Je moet alleen nog af en toe op &apos;ja&apos; klikken.
          </p>
          <p>
            Er zijn ook talloze gespecialiseerde vibecoding-instrumenten, zoals Cursor, Replit en Lovable. Die laatste twee heb ik vrij uitgebreid uitgeprobeerd, ze werken minstens even goed als Codex en hebben een rijkere interface. Het probleem is dat je er doorgaans niet in slaagt om een app helemaal af te werken met de gratis versie van Replit of Lovable, dus je moet betalen – en dan betaal ik liever voor ChatGPT Plus of Gemini Pro, zodat ik én kan vibecoden én een betere chatbot ter beschikking heb.
          </p>
          <p>
            Mijn Gezinskalender besloot ik dus verder af te werken met ChatGPT Codex. Dat kan gewoon op het web, maar ik installeerde het programma ChatGPT Codex CLI. Zo had Codex rechtstreeks toegang tot de bestanden op mijn pc. En, simpel gezegd: wat toen gebeurde, lijkt wel toverij. Stap voor stap begon Codex mijn programma te verbeteren, op basis van mijn suggesties maar ook op eigen initiatief. Twintig minuten later leek de app eigenlijk klaar om in de app stores van Apple en Google aan te bieden (behalve dat het, strikt gesproken, geen echte app maar een Progressive Web App is: je kunt haar bewaren met een icoontje op je smartphone-scherm, maar je downloadt haar niet via de appstore).
          </p>
          <p>
            In totaal heeft mijn afgewerkte Gezinskalender mij een halve dag werk gekost. Maar in die tijd heb ik enorm veel geleerd en bijvoorbeeld ook accounts op Supabase en Vercel gemaakt. Ik weet zeker dat ik een app van deze complexiteit een volgende keer in de helft van die tijd in elkaar gestoken krijg.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Voorkennis</h2>
          <p>
            Nog een tip voor wie zijn weg zoekt in vibecoding: in plaats van Kladblok te gebruiken, heb ik intussen een ander gratis programma van Microsoft geïnstalleerd, VS Code. Met Codex, VS Code en Github, soms nog gecombineerd met Supabase en Vercel, kun je haast alles bouwen. Letterlijk zonder een lijn code te schrijven, of zelfs maar te lezen.
          </p>
          <p>
            Tussen mijn eerste Javascript-game en de apps die ik nu met Codex bouw, moest ik wel heel wat kennis opbouwen over al die componenten. Ik schat dat ik daar twee of drie dagen over heb gedaan.
          </p>
          <p>
            Hoe groot je voorkennis is, maakt een verschil. Ik heb in mijn jeugd wat leren programmeren, in de programmeertaal Basic (op een Sinclair ZX-81, heus!). Net voldoende om een beetje te begrijpen wat er aan het gebeuren is als die chatbot code genereert. Dat heeft mij zeker geholpen, maar mensen zonder enige programmeerkennis slagen erin om gelijkaardige apps te vibecoden.
          </p>
          <p>
            Nog iets: agentic programmeren evolueert momenteel razendsnel. Wat zes maanden geleden uren werk kostte, komt nu in één keer uit ChatGPT gerold. Iets vrij complex als mijn Gezinskalender duurt nu enkele uren, maar kun je over een paar weken of maanden waarschijnlijk met twee-drie prompts genereren.
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
