# UX/UI Analyse & Next.js Implementatie - De Standaard Artikelen

Dit project is een schoolopdracht voor de module **Visual Basics Websites en Apps**. Het doel van de opdracht is het analyseren van bestaande nieuwsartikelen van *De Standaard* op basis van UX/UI-principes en deze inzichten vervolgens toe te passen in een functionele Next.js webapplicatie.

## 🚀 Live Demo
Bekijk de website hier: [vb-articles-chukurasomto.netlify.app](https://vb-articles-chukurasomto.netlify.app/)

---

## 🎨 UX/UI Analyse & Beslissingen

Tijdens de eerste fase van het project heb ik drie artikelen geanalyseerd:
1. **Dario Amodei (Silicon Valley)**
2. **AI-Slop (Sociale Media)**
3. **Vibecoding (AI-tools)**

### Belangrijkste Inzichten & Verbeteringen:

- **Leesbaarheid & Witruimte:** In de originele PDF-bestanden stonden teksten vaak erg dicht op elkaar zonder tussenkopjes. In mijn implementatie heb ik met Tailwind CSS  gezorgd voor veel meer "ademruimte" tussen paragrafen, wat de leesbaarheid op schermen aanzienlijk verbetert.
- **Visuele Hiërarchie:** Ik heb duidelijke, vette tussenkopjes (`font-extrabold`) toegevoegd om de tekst scanbaar te maken voor de lezer. Ook zijn labels zoals "DE TECHNOCRAAT" en "LEESTIJD" toegevoegd om direct context te bieden.
- **Call-to-Action (CTA) Design:** De "Lees Ook" secties onderaan de artikelen zijn getransformeerd van platte tekst naar opvallende, interactieve kaarten. Deze reageren op de gebruiker via hover-effecten (border-color verandering en schaduw), wat aanzet tot doorklikken.
- **Micro-interacties:** Alle knoppen en navigatielinks zijn voorzien van subtiele transities (`transition-all`, `duration-300`). Afbeeldingen zoomen licht in bij een hover-actie, wat zorgt voor een dynamische en responsieve gebruikerservaring.
- **Performance & Media:** Er is gebruik gemaakt van het `next/image` component. Dit zorgt voor automatische optimalisatie van afbeeldingen, wat bijdraagt aan een snelle laadtijd op zowel desktop als mobiel.

---

## 🛠️ Technische Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Hosting:** [Netlify](https://www.netlify.com/)
- **Versiebeheer:** [GitHub](https://github.com/)

---

## 📂 Project Structuur

- `app/`: Bevat de hoofdroutes en pagina's per artikel.
- `components/`: Bevat herbruikbare UI-elementen zoals de Header en Footer.
- `public/`: Bevat alle gebruikte afbeeldingen en media.

---

*Gemaakt door Chukurasomto voor AP Hogeschool Antwerpen - 2026*
