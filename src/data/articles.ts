export type Category = 'nieuws' | 'reviews' | 'games' | 'tech' | 'hardware' | 'video';

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  categoryLabel: string;
  author: string;
  date: string;
  image: string;
  isBreaking?: boolean;
  isFeatured?: boolean;
  views: number;
  readTime: number;
  score?: number;
}

export const articles: Article[] = [
  // ── FEBRUARI 2026 ──────────────────────────────────────────────────────────

  {
    id: 1,
    slug: 'resident-evil-requiem-launch-day-review',
    title: 'Resident Evil Requiem is er — en het is angstaanjagend goed',
    excerpt:
      'Capcom lanceert vandaag Resident Evil Requiem, de negende hoofddeel in de legendarische survivalhorrorserie. Met FBI-agente Grace Ashcroft als nieuw gezicht en Leon Kennedy die terugkeert naar Raccoon City, belooft dit de meest ambitieuze RE ooit te worden. Gameinside speelde twaalf uur en is onder de indruk.',
    content: `Het is zover. Na bijna negen maanden wachten — van de eerste aankondiging op Summer Game Fest tot de dramatische vierde trailer tijdens de State of Play van twee weken geleden — is Resident Evil Requiem eindelijk speelbaar. En wij hebben twaalf uur lang bijna niet durven ademhalen.

**Grace Ashcroft: een hoofdpersoon die je meteen begrijpt**

Waar Capcom bij eerdere delen lang de tijd nam om de protagonist te introduceren, gooit Resident Evil Requiem je meteen in het diepe. Grace Ashcroft, FBI-agente en forensisch patholoog, arriveert in Raccoon City als onderdeel van een federale taskforce — en binnen het eerste uur is het al grondig misgegaan. Wat Capcom slim doet: Grace heeft een verleden. Ze kent Raccoon City. Ze heeft er gestudeerd. De stad is geen abstract rampengebied voor haar, maar een plek vol herinneringen die nu letterlijk rotten.

De wisselwerking tussen Grace en Leon Kennedy — die halverwege het tweede hoofdstuk opduikt als speelbare tweede protagonist — is onverwacht goed geschreven. Leon is ouder, vermoeider en heeft zijn heldenstatus allang achter zich gelaten. De twee kijken vanuit fundamenteel andere perspectieven naar dezelfde verschrikking, en dat zorgt voor een narratieve spanning die Capcom zelden eerder zo goed heeft neergezet.

**Raccoon City zoals je het nog niet eerder hebt gezien**

De stad zelf is de ware ster. Capcom heeft jaren gewerkt aan de Raccoon City-reconstructie en dat is te zien: het Wrenwood Hotel, de ondergrondse rioleringen, het verlaten politiebureau — elk gebied voelt uniek, dreigend en doordacht ontworpen. De nieuwe Veritas-engine, die al indruk maakte in de RE4-remake, wordt hier tot het uiterste gedreven. Lichteffecten die door gebarsten ramen vallen, details op texturen die je doet vergeten dat dit fictie is, en een geluidsontwerp dat Dolby Atmos absoluut vereist.

De nieuwe vijanden — Capcom noemt ze Hollowed — zijn een geslaagde evolutie van het klassieke zombie-concept. Ze bewegen onregelmatig, reageren op geluid en licht, en hebben frustrerend menselijke reacties op verwondingen. In onze speelsessie zaten we meermaals doodstil op de bank in de hoop dat een Hollowed die rondpatrouilleerde ons niet zou zien.

**Wat maakt Requiem anders dan de rest?**

Resident Evil Requiem combineert de actie-drive van RE4 met de beklemming van RE7 en het verhaalgewicht van RE2 Remake. Het voelt als de synthese van alles wat Capcom de afgelopen tien jaar heeft geleerd. De dual-protagonist structuur — waarbij je soms kiest welk perspectief je volgt — geeft spelvrijheid zonder het tempo te breken.

Er zijn kleine punten van kritiek. De eerste anderhalf uur is het spel voorzichtig traag met zijn horror — een bewuste keuze die niet iedereen zal aanspreken. En sommige omgevingsraadsels voelen vertrouwd voor wie de series kent. Maar dit zijn muggenzifterijen in wat tot nu toe een buitengewone ervaring is.

**Gameinside's eerste oordeel**

Resident Evil Requiem is veelbelovend op een manier die we al jaren niet meer hebben gevoeld bij een grote release. Capcom levert. Onze volledige review verschijnt over het weekend wanneer we het spel hebben uitgespeeld — maar als de tweede helft bijhoudt wat de eerste belooft, kijken we naar een sterke kandidaat voor Game of the Year 2026.`,
    category: 'games',
    categoryLabel: 'Games',
    author: 'Thomas van der Berg',
    date: '2026-02-27',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/3764200/header.jpg',
    isFeatured: true,
    isBreaking: true,
    views: 52840,
    readTime: 6,
  },

  {
    id: 2,
    slug: 'phil-spencer-verlaat-microsoft-asha-sharma-nieuwe-xbox-baas',
    title: 'Phil Spencer verlaat Microsoft na 38 jaar — Asha Sharma neemt het roer over',
    excerpt:
      'In een verrassende zet heeft Phil Spencer aangekondigd dat hij na 38 jaar Microsoft verlaat. Sarah Bond, president van Xbox, vertrekt ook. De nieuwe baas is Asha Sharma, tot nu toe hoofd van Microsoft\'s CoreAI-divisie. Wat betekent dit voor Xbox, Game Pass en de Nederlandse gamers?',
    content: `Het nieuws sloeg in als een bom. Op donderdag 20 februari maakte Phil Spencer via een persoonlijk bericht op Xbox Wire bekend dat hij Microsoft verlaat. Na 38 jaar bij het bedrijf, waarvan de laatste jaren als CEO van Microsoft Gaming, gaat hij met pensioen. Tegelijkertijd kondigt Sarah Bond, de president van Xbox, haar vertrek aan. Het tijdperk-Spencer is voorbij.

**Het einde van een tijdperk**

Phil Spencer heeft Xbox letterlijk gered. Toen hij in 2014 de leiding overnam was Xbox One een commercieel en imagodebacle. Spencer keerde het tij: hij kocht studio's op, lanceerde Game Pass, sloot de Activision Blizzard-deal en positioneerde Xbox als een platform-agnostisch gaming-ecosysteem. Zijn nalatenschap is enorm — ook al hebben de studio-overnames niet altijd de games opgeleverd die iedereen hoopte.

Zijn vertrek voelt desondanks abrupt. Spencer zei zelf in zijn afscheidsbrief dat hij Satya Nadella al in het najaar van 2025 had verteld dat hij aan een volgend hoofdstuk dacht. De timing — midden in een cruciale periode voor Xbox en vlak voor de aankondiging van nieuwe hardware — roept vragen op die Microsoft vooralsnog niet beantwoordt.

**Asha Sharma: wie is de nieuwe Xbox-baas?**

Asha Sharma is voor veel gamers een onbekende naam, maar binnen Microsoft is ze een erkende kracht. Ze leidde de CoreAI-divisie, Microsoft's afdeling voor AI-productontwikkeling, en heeft bewezen dat ze grote consumentenproducten kan bouwen. In haar eerste verklaring beloofde ze dat Xbox "relevant, eerlijk en vindingrijk" zal blijven — en dat er geen "soulless AI slop" in games zal verschijnen.

Die laatste opmerking is opmerkelijk: ze reageert daarmee direct op een van de grootste zorgen in de gaming-gemeenschap. Of die belofte standhoudt zodra de kwartaalcijfers tegenvallen, zal de tijd uitwijzen.

**Wat betekent dit voor Nederlandse Xbox-gamers?**

Game Pass blijft het kloppende hart van Xbox's strategie, en Sharma heeft bevestigd dat ze er volledig achter staat. Maar de vraag is hoe de nieuwe koers er onder haar leiding uitziet. Minder nadruk op het bouwen van eigen AAA-blockbusters en meer inzet op AI-gedreven tools en diensten? Dat zou voor gamers voelen als een stap achteruit.

**Gameinside's oordeel**

Spencer verdiende meer lof dan hij vaak kreeg. Zijn vertrek voelt voorbarig en de timing is ongelukkig. We hopen dat Sharma bewijst dat Xbox ook zonder zijn architect zijn identiteit behoudt — maar we zijn eerlijk gezegd zenuwachtig.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Sophie Bakker',
    date: '2026-02-20',
    image:
      'https://xboxwire.thesourcemediaassets.com/sites/2/2026/01/201408_Base-Event-Announce_3840x2160_01-d74edda15b45247820b4.jpg',
    isBreaking: true,
    views: 39200,
    readTime: 5,
  },

  {
    id: 3,
    slug: 'nioh-3-review-team-ninja-soulslike',
    title: 'Nioh 3 review — Team Ninja toont opnieuw waarom ze meesters zijn in het genre',
    excerpt:
      'Na Nioh 2 leek de lat onmogelijk hoog te liggen. Nioh 3 gooit het over een andere boeg: kies je eigen stijl als Samurai of Ninja, verken uitgestrekte open gebieden en vecht zij aan zij met vrienden in de nieuwe 3-speler co-op. Gameinside besteedde 55 uur aan deze klapper.',
    content: `Team Ninja heeft ons de afgelopen tien jaar laten zien dat zij het Soulslike-genre op een geheel eigen manier begrijpen. Nioh en Nioh 2 waren keihard, technisch uitdagend en rijker in systemen dan haast elk ander spel in het genre. Nioh 3 is de volgende stap — en het is een groot stap voorwaarts.

**De grote innovatie: jouw stijl, jouw build**

Het fundamentele verschil met de voorgaers is de splitising tussen Samurai- en Ninja-stijlen. Bij de start van het spel kies je een hoofdstijl die bepaalt welke vaardigheidsboom je het snelst ontwikkelt, welke uitrusting je het beste past en hoe je vijanden benadert. Kies je voor Samurai: krachtige slagen, zware uitrusting, een repertoire van Ki-aanvallen. Kies je voor Ninja: snel, bedrieglijk, op giftige traps en stealth-eliminaties gebouwd.

Beide stijlen zijn volledig uitgewerkt en geen van beide voelt als de "makkelijke" keuze. We hebben allebei geprobeerd en zijn na tien uur omgeschakeld — een bewuste beslissing van Team Ninja, die heeft gezegd dat de game specifiek is ontworpen om twee playthroughs aan te moedigen.

**Open gebieden: een risico dat uitbetaalt**

De meest opvallende structurele verandering is de introductie van open gebieden — niet een open wereld, maar uitgestrekte zones met meerdere missie-ingangen, verborgen shrines en optionele bazen. Dit geeft Nioh 3 een exploratief karakter dat de serie eerder miste. Je kunt uren zoeken naar geheimen of direct naar de hoofdmissie stormen — beide opties worden beloond.

Het risico van openheid is dilutie van de kernidentiteit. Team Ninja heeft dat risico bewust genomen en grotendeels goed gemanaged. De open zones zijn rijk genoeg om te verkennen maar compact genoeg om nooit overrompelend te voelen.

**Co-op voor drie spelers**

De uitbreiding van co-op van twee naar drie spelers is een gamechanger. Nioh 3's baasgevechten zijn ontworpen met drie spelers in gedachten: sommige bazen hebben drie aanvalsfasen die gelijktijdig actief worden. Met vrienden erbij worden de gevechten een symfonie van chaos en coördinatie. Solo is het nog steeds volledig speelbaar, maar moeilijker — zoals het hoort.

**Gameinside's oordeel**

Nioh 3 is de beste game in de serie. De stylistieke keuzevrijheid, de uitgebreide co-op en de schitterende open gebieden tillen het boven zijn voorgangers. Voor fans van het genre is dit verplicht speelgoed.

**Score: 9/10**`,
    category: 'reviews',
    categoryLabel: 'Reviews',
    author: 'Mark Visser',
    date: '2026-02-15',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/3681010/header.jpg',
    views: 28650,
    readTime: 7,
    score: 9,
  },

  {
    id: 4,
    slug: 'god-of-war-sons-of-sparta-alles-wat-we-weten',
    title: 'God of War: Sons of Sparta — shadow drop van het jaar en alles wat we al weten',
    excerpt:
      'Sony verraste iedereen met een onaangekondigde release tijdens de State of Play: God of War: Sons of Sparta is nu speelbaar op PS5. Een 2D-actiegame over een jonge Kratos die zijn dochter Calliope een verhaal vertelt. Wat is het, hoe speelt het, en is het de moeite waard?',
    content: `Sony Santa Monica heeft de gaming-wereld op 12 februari letterlijk overvallen. Midden in de State of Play-presentatie — die al rijkelijk was gevuld met aankondigingen — verscheen een trailer die niemand had zien aankomen: God of War: Sons of Sparta. En het spel was meteen beschikbaar. Geen preorder-periode, geen marketingblitz. Gewoon: kopen en spelen.

**Wat is Sons of Sparta precies?**

Sons of Sparta is geen vervolg op Ragnarök en geen prequel op de stijl van 2018's God of War. Het is een 2D-actiegame — een bewuste stijlkeuze die verwijst naar het originele God of War (2005) en zijn opvolgers. Het spel is ontwikkeld door Mega Cat Studios in samenwerking met Santa Monica Studio, hetzelfde team dat eerder de uitstekende Wonder Boy-remakes produceerde.

Het verhaal speelt zich af voor God of War (2005). Een volwassen Kratos vertelt zijn dochter Calliope — die PS4/PS5-gamers kennen uit de verdrietige Chains of Olympus-flashbacks — over zijn tijd als Spartaanse kapitein. Het is een intiem verhaal, kleiner dan de epische godenverhalen waar de serie bekend om staat, en des te indrukwekkender daarvoor.

**Hoe speelt het?**

De controlemechanismen zijn verrassend vertrouwd voor fans van klassieke 2D-actiegames, maar met een God of War-smaak die onmiskenbaar is. Kratos' Leviathan Axe en Blades of Chaos zijn beide aanwezig en voelen wezenlijk anders aan in het 2D-perspectief. Speciale aanvallen activeer je via Spartan Rage, dat nu als een cooldown-systeem werkt in plaats van een metergestuurde rage-uitbarsting.

De grafische stijl is prachtig: handgetekend maar met moderne details, een stijl die doet denken aan Cuphead gecombineerd met de iconische roodheid van klassieke God of War. Elke baas heeft een unieke visuele taal die je na het gevecht bij blijft.

**De aankondiging van de Griekse trilogie-remake**

Alsof Sons of Sparta nog niet genoeg nieuws was, kondigde Sony tegelijkertijd aan dat de originele God of War-trilogie (2005, 2007 en 2010) volledig wordt geremastered. Geen details over releasedatum of visuals — Sony zegt alleen dat het "vroeg in ontwikkeling" is — maar het nieuws alleen al is genoeg voor een feestje.

**Gameinside's oordeel**

Sons of Sparta is een liefdesbrief aan de roots van de franchise en een uitstekend stand-alone avontuur. Het is klein van omvang maar groot van hart. Wij gaven het vijf uur van onze avond en hadden geen seconde spijt.

**Score: 8.5/10**`,
    category: 'games',
    categoryLabel: 'Games',
    author: 'Thomas van der Berg',
    date: '2026-02-12',
    image:
      'https://blog.playstation.com/tachyon/2026/02/6cce0478459b4f47549fa59e9168f04924295731-scaled.jpg',
    views: 23900,
    readTime: 5,
    score: 8.5,
  },

  {
    id: 5,
    slug: 'gta-6-releasedatum-19-november-2026-bevestigd',
    title: 'GTA 6 heeft nu een definitieve releasedatum: 19 november 2026',
    excerpt:
      'Na twee uitstellingen en maanden van stilte heeft Rockstar Games eindelijk de nieuwe releasedatum bekendgemaakt. Grand Theft Auto VI verschijnt op 19 november 2026 voor PS5 en Xbox Series X|S. Eerste echte gameplay is ook getoond. Wij analyseren alles.',
    content: `Rockstar Games heeft op 10 februari 2026 via een formeel persbericht en begeleidende 14 minuten durende gameplay-presentatie de nieuwe releasedatum voor Grand Theft Auto VI bekendgemaakt. Die datum is 19 november 2026 — en dit keer klinkt Rockstar een stuk stelliger dan bij de twee eerdere aankondigingen die beide werden ingetrokken.

**De weg hiernaartoe**

Het is geen geheim dat GTA VI een roerige ontwikkeling heeft gehad. De eerste trailer in december 2023 creëerde een golf van hype die moeiteloos YouTube-records verbrak. Maar het spel zou in 2025 verschijnen en werd eerst uitgesteld naar voorjaar 2026, en daarna opnieuw naar november 2026. Rockstar ontsloeg in diezelfde periode 30 medewerkers die intern campagne voerden voor een vakbond — een stap die in de bredere gaming-industrie veel kritiek opleverde.

De sfeer op kantoor bij Rockstar North, zo berichtten meerdere bronnen aan gaming-outlets, had een dieptepunt bereikt. Toch zegt Rockstar dat de game klaar is voor 19 november. We gaan het zien.

**Wat toont de gameplay-presentatie?**

Veertien minuten Vice City. Lucia Caminos en Jason Duval rijden in gestolen auto's, snijden door drukke winkelstraten in Leonida, duiken een casino-overval in en ontvluchten de politie via het wateroppervlak van de Vice City-haven. Het is indrukwekkend — en dat is het zacht uitgedrukt.

De stad ademt. NPC's houden hun dagelijkse routine aan ongeacht wat jij doet. Klanten lopen een kapperszaak in. Een straatartiest speelt trompet. De reflecties in plassen op straat tonen omgekeerde skyline-details. Als dit daadwerkelijk het eindproduct is — en niet een geselecteerde marketingdemonstatie — dan heeft Rockstar alles waargemaakt wat ze beloofden.

**Is het wachten het waard?**

Dat is de vraag die elke GTA-fan zichzelf stelt. We zijn nu meer dan drie jaar verder na de eerste aankondiging. De hype is getransformeerd van onbeheersbare opwinding naar uitgeputte verwachting. Maar als die veertien minuten gameplay indicatief zijn voor de eindversie, dan is het antwoord simpelweg: ja.

**Gameinside's verwachting**

We geloven Rockstar deze keer. De gameplay ziet er compleet uit, de release zit nu in het vierde kwartaal — traditioneel de sterkste periode voor grote releases — en de zakelijke druk is enorm. GTA VI wordt ofwel het beste spel ooit gemaakt, ofwel de grootste teleurstelling in gaming-geschiedenis. Er is geen tussenweg.`,
    category: 'games',
    categoryLabel: 'Games',
    author: 'Thomas van der Berg',
    date: '2026-02-10',
    image: 'https://img.youtube.com/vi/QdBZY2fkU-0/maxresdefault.jpg',
    isBreaking: true,
    views: 47100,
    readTime: 5,
  },

  {
    id: 6,
    slug: 'nintendo-switch-2-beste-games-2026',
    title: 'Nintendo Switch 2: dit zijn de beste games die nog komen in 2026',
    excerpt:
      'Mario Tennis Fever, Hollow Knight: Silksong, Metroid Prime 4 Beyond en meer — het Nintendo Switch 2-jaar is nog maar net begonnen en de line-up ziet er al veelbelovend uit. Gameinside zet alle aankomende releases op een rij en geeft zijn eigen verlanglijst.',
    content: `De Nintendo Switch 2 is nu vier maanden oud en heeft al bewezen een systeem te zijn dat zowel casual als hardcore gamers in vervoering brengt. Mario Kart World bij launch, Donkey Kong Bananza als verrassende hit — het begin was sterk. Maar wat staat er nog op de planning voor de rest van 2026?

**Mario Tennis Fever — zomer 2026**

Mario Tennis is lange tijd een serie geweest die zijn potentieel nooit volledig waarmaakte. Mario Tennis Aces had goede intenties maar miste diepgang. Fever gooit het over een andere boeg: fullscreen multiplayer voor acht spelers, een uitgebreide storycampagne en een competitieve online ladder die Camelot naar eigen zeggen volledig heeft herontworpen. De beelden zien er uitstekend uit — heldere kleuren, vlotte animaties en een nieuw "Fever Break"-systeem dat sterk lijkt op tennisversie van Mario Kart's blauwe schild.

**Hollow Knight: Silksong — lente 2026**

Het meest besproken spel op dit platform — en waarschijnlijk van welk platform dan ook — is eindelijk bevestigd voor Switch 2. Team Cherry heeft bevestigd dat Silksong op alle platforms gelijktijdig verschijnt, inclusief een speciaal geoptimaliseerde Switch 2-versie met langere batterijduur en 60fps in handheld-modus. Na acht jaar wachten is de release van Silksong voorzien voor ergens in de lente. We hopen het.

**Metroid Prime 4: Beyond — Q3 2026**

Het meest aangekondigde maar minst getoonde spel op de Switch 2-launch. Metroid Prime 4: Beyond was al jaren in ontwikkeling en is nu een Switch 2-exclusive. Retro Studios heeft weinig gameplay laten zien, maar wat we hebben gezien ziet er visueel indrukwekkend uit. Samus keert terug naar de duistere, atmosferische first-person gameplay van de originele trilogie.

**Gameinside's verlanglijst**

Naast de bevestigde games hopen wij op: een nieuw Star Fox-spel (al tien jaar stilte), een verrassende Pokémon Legends-aankondiging en de lang verwachte Switch 2-versie van Breath of the Wild's opvolger, Tears of the Kingdom. Nintendo houdt de kaarten dicht tegen de borst, maar heeft bewezen dat de Switch 2 een platform is dat de moeite waard is.`,
    category: 'games',
    categoryLabel: 'Games',
    author: 'Lisa Jansen',
    date: '2026-02-08',
    image:
      'https://assets.nintendo.com/image/upload/q_auto/f_auto/c_fill,w_1200/ncom/en_US/articles/2025/nintendo-switch-2-to-be-released-in-2025/1920x1080_WN_PR01162025',
    views: 18400,
    readTime: 5,
  },

  {
    id: 7,
    slug: 'dragon-quest-vii-reimagined-review',
    title: 'Dragon Quest VII Reimagined review — een legendarische RPG voor een nieuwe generatie',
    excerpt:
      'Square Enix heeft een van de meest ambitieuze RPGs uit 2000 volledig herschreven. Betere graphics, een vernomen vocatie-systeem en een gestroomlijnd verhaal maken Dragon Quest VII Reimagined toegankelijker dan ooit. Maar verliest het daarmee ook zijn eigenzinnige charme?',
    content: `Dragon Quest VII: Fragments of the Forgotten Past was al in 2000 een anomalie: een RPG van 100+ uur op de PlayStation 1 met een trage beginopbouw, een complexe verhaalstructuur en een vocatie-systeem dat uren vergt om te begrijpen. Het was een gamers-game — voor liefhebbers van het genre, niet voor beginners. Reimagined probeert dat te veranderen zonder de kern van wat VII zo uniek maakt te verliezen.

**Wat is er veranderd?**

De meest zichtbare verbetering is visueel. Reimagined gebruikt de zogenaamde Diorama-engine die Square Enix introduceerde in Dragon Quest XII, en het resultaat is verbluffend: figuren en omgevingen zien eruit als bewegende miniatuurwereldjes in een kristallen bol. De stijl combineert de klassieke Akira Toriyama-esthetiek (inmiddels geërfd door zijn opvolgers) met moderne lichteffecten en architectonische details.

Het vocatie-systeem is fundamenteel herschreven. In het origineel kostte het je soms tien uur voordat je je eerste baan kon kiezen. In Reimagined kun je al na drie uur met klassen beginnen. De diepgang is behouden — er zijn nog steeds 30+ vocaties en tientallen combo-paden — maar de drempel is drastisch verlaagd.

Het verhaal is ingekort en gestructureerd. Het originele VII had soms episodes die aanvoelden als zijpaden. Reimagined heeft die ingekort of verwijderd en de hoofdlijn strakker gemaakt. Fans van het origineel zullen zien dat sommige geliefd detailverhalen zijn weggelaten — een ingreep die pijn doet, maar begrijpelijk is.

**Wat is hetzelfde gebleven?**

De kern: Dragon Quest VII is een verhaal over herstel. Eilanden die versteend zijn in het verleden worden stap voor stap bevrijd, elk met een eigen geschiedenis en menselijke drama. Die episodische structuur — elk eiland als een in zichzelf afgeronde minitragedy — is onveranderd en nog steeds buitengewoon effectief. Wij huilen bij Dragon Quest VII-momenten meer dan bij welk modern AAA-spel ook.

**Gameinside's oordeel**

Dragon Quest VII Reimagined is de beste manier om een van de beste RPGs ooit te spelen. Het mist een paar dierbare originele details, maar geeft er toegankelijkheid en technische pracht voor terug. Voor nieuwkomers: onmisbaar. Voor fans van het origineel: verplichte kost, met enige nostalgie-injectie vereist.

**Score: 8.5/10**`,
    category: 'reviews',
    categoryLabel: 'Reviews',
    author: 'Nina Hoekstra',
    date: '2026-02-05',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2499860/header.jpg',
    views: 12300,
    readTime: 6,
    score: 8.5,
  },

  {
    id: 8,
    slug: 'nieuwe-xbox-hardware-2026-geruchten-specs',
    title: 'Nieuwe Xbox hardware onderweg — wat weten we al over de volgende console?',
    excerpt:
      'Asha Sharma, de nieuwe CEO van Microsoft Gaming, beloofde in haar eerste grote interview dat er "snel significante hardware-aankondigingen" komen. Geruchten over een Xbox Series X-opvolger, een handheld en een vernieuwd Xbox Cloud-apparaat circuleren al maanden. Gameinside zet alles op een rij.',
    content: `De Xbox-scene is in beweging. Phil Spencer is weg, Asha Sharma is de nieuwe CEO en een van haar eerste publieke uitspraken was dat er "binnenkort hardware-nieuws" komt. Dat voelt als een directe reactie op de successen van de PlayStation 5 Pro en de Nintendo Switch 2 — en op de dalende Xbox-verkopen in Europa.

**Het Xbox Series X-opvolger-gerucht**

Volgens bronnen bij Digital Foundry en Tom Henderson (bekroond als meest betrouwbare Xbox-leaker) werkt Microsoft aan een nieuwe console met codenaam "Kestrel". De specs die circuleren zijn indrukwekkend: AMD RDNA 4-GPU met 20 teraflops aan rekenkracht, NVMe 2.0 SSD met 12GB/s leessnelheid en 24GB GDDR7-geheugen. Dat zou Kestrel aanzienlijk krachtiger maken dan de PlayStation 5 Pro.

De geplande verkoopprijs zou rond de €599 liggen — hetzelfde als de PS5 Pro bij launch. Microsoft's boodschap zou zijn: meer power, zelfde prijs, plus Game Pass inbegrepen.

**De Xbox handheld**

Minstens even interessant is het gerucht over een Xbox-handheld. Al tijdens zijn laatste jaar heeft Phil Spencer gezegd dat een draagbare Xbox "niet ver weg" is. Bronnen beschrijven een apparaat dat gelijkenissen vertoont met de Steam Deck, maar dieper geïntegreerd is met Xbox Cloud Gaming en Game Pass. Theoretisch kun je hiermee elke Xbox-game spelen zonder dat ze lokaal geïnstalleerd hoeven te zijn.

**Xbox Cloud Box**

Een derde apparaat dat circuleert is een goedkope "Cloud Box" van rond de €199, primair bedoeld voor streaming. Denk aan een HDMI-dongle met Xbox-branding die Game Pass Ultimate vereist. Dit zou Microsoft's poging zijn om Xbox in meer huiskamers te krijgen zonder dure hardware.

**Gameinside's verwachting**

We geloven dat de Xbox handheld het meest concrete gerucht is. Microsoft moet reageren op de Switch 2 en de Steam Deck — en dat ze dat via een eigenhandig apparaat doen in plaats van software-licenties is slim. De Xbox Series X-opvolger valt voorlopig buiten het bereik van de gewone consument qua prijs, maar de krachtige specs spreken de hardware-enthousiasten aan.

Wij hopen op een aankondiging in Q2 2026. Asha Sharma heeft gezegd: binnenkort. We houden haar aan die belofte.`,
    category: 'tech',
    categoryLabel: 'Tech',
    author: 'Kevin de Groot',
    date: '2026-02-01',
    image:
      'https://xboxwire.thesourcemediaassets.com/sites/2/2026/01/012635_Base-Event-Post-Show_3840x2160_03-1ff4ad3f691eb6b547a2.jpg',
    views: 16700,
    readTime: 5,
  },

  // ── JANUARI 2026 ───────────────────────────────────────────────────────────

  {
    id: 9,
    slug: 'clair-obscur-expedition-33-wint-9-game-awards',
    title: 'Clair Obscur: Expedition 33 wint 9 Game Awards — meer dan Baldur\'s Gate 3 in 2023',
    excerpt:
      'Het kleine Franse studio Sandfall Interactive heeft de gaming-industrie opgeschud. Clair Obscur: Expedition 33 won negen prijzen op The Game Awards 2025, waaronder Game of the Year. Meer dan Baldur\'s Gate 3, meer dan elk AAA-spel in recent geheugen. Hoe is dit mogelijk?',
    content: `De avond van 12 december 2025 zal de gaming-industrie lang bijblijven. Clair Obscur: Expedition 33 — een debuutspel van een Frans studio met twaalf medewerkers — won negen van de zeventien prijzen op The Game Awards, waaronder Game of the Year, Best RPG, Best Narrative, Best Art Direction en Best Score & Music. Het versloeg Elden Ring: Nightreign, Call of Duty: Black Ops 7 en Nintendo's eigen Mario Kart World.

**Hoe heeft een klein studio de grote namen verslagen?**

Clair Obscur: Expedition 33 is in 2025 de definitie van lightning in a bottle. Het spel combineert turn-based combat met real-time parry-mechanica, een surrealistisch Frans kunstmilieu als setting en een verhaal dat zowel poëtisch als verpletterd persoonlijk aanvoelt. Recensenten noemden het "de Final Fantasy die Square Enix al tien jaar probeert te maken maar nooit lukt".

Sandfall Interactive begon als een team van ex-Ubisoft-werknemers die een RPG wilden maken zonder corporate compromissen. Dat gebrek aan compromissen — in gameplay, verhaal en visuele stijl — is precies wat het spel onderscheidt van zijn AAA-concurrenten. Er zijn geen live service-elementen, geen microtransacties, geen "je kunt ook een grotere versie kopen voor €20 meer". Gewoon: een spel, volledig af.

**De Nederlandse gaming-gemeenschap reageerde massaal**

Op Nederlandse Discord-servers en forums was de reactie overweldigend. #ExpeditionOfTheYear trending op Dutch gaming communities. Nederlandse spelers zijn uitgesproken fans gebleken van het spel's moeilijkheidsgraad — vergelijkbaar met een FromSoftware-game maar met een narratief hart dat je inneemt.

**Wat betekent dit voor de industrie?**

The Game Awards-jury heeft met deze beslissing een signaal afgegeven: spelers en critici waarderen authenticiteit boven budgetten. Sandfall Interactive's succes is een inspiratie voor indie-ontwikkelaars wereldwijd — maar ook een waarschuwing aan grote publishers die convenience boven creativiteit plaatsen.

**Gameinside's oordeel**

We hebben Clair Obscur: Expedition 33 uitgebreid gerecenseerd bij release en gaven het een 9.5. De Game Awards-overwinning voelt volledig verdiend. Als je dit nog niet hebt gespeeld: ga nu.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Nina Hoekstra',
    date: '2026-01-25',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1903340/header.jpg',
    views: 31200,
    readTime: 5,
  },

  {
    id: 10,
    slug: 'ea-overgenomen-55-miljard-saoedisch-consortium',
    title: 'EA overgenomen voor 55 miljard dollar — wat betekent dit voor FIFA, Sims en Battlefield?',
    excerpt:
      'Electronic Arts is overgenomen door een Saoedisch-Emirati consortium in de grootste gaming-overname ooit. 55 miljard dollar in contanten. De impact op EA Sports FC, The Sims, Battlefield en Mass Effect is onzeker. Gameinside is bezorgd — en dat leggen we hier precies uit.',
    content: `Op 18 januari 2026 maakte Electronic Arts via een persconferentie in San Francisco de overname bekend die de gaming-wereld al weken verwachtte maar hoopte dat niet zou plaatsvinden. Een consortium bestaande uit het Saoedische Public Investment Fund en het Abu Dhabi sovereign wealth fund MDI neemt EA over voor $55 miljard in cash. Het is de grootste leveraged buyout in de Wall Street-geschiedenis van entertainment.

**Hoe is het zover gekomen?**

EA's positie was al jaren kwetsbaar. Na de controversiële loot-box-praktijken in FIFA Ultimate Team, de herhaalde teleurstellingen van Battlefield 2042 en de stagnerende Sims-franchise had EA's koers jaren stilgestaan. Het consortium, dat al belangen heeft in Newcastle United FC, Formula 1-teams en meerdere Europese gamestudio's, zag een kans.

CEO Andrew Wilson bleef aan in zijn functie — een bewuste keuze die analisten interpreteren als een poging om de overgang soepel te laten verlopen. Maar de werkelijke beslissingsmacht verschuift naar een raad van commissarissen die primair geïnteresseerd is in return on investment, niet in creatieve vrijheid.

**Wat verandert er voor EA's grote franchises?**

Voor EA Sports FC (voorheen FIFA) verandert er waarschijnlijk weinig op korte termijn: de melkkoe blijft melkkoe. The Sims heeft een moeilijker positie — de franchise trekt minder international publiek dan EA Sports FC, maar heeft een immense loyale fanbase. Battlefield 6 verkocht beter dan zijn voorganger, wat ruimte geeft. Mass Effect — nog altijd in ontwikkeling bij BioWare — is het meest kwetsbaar voor bezuinigingen.

**Gameinside's bezorgdheid**

We zijn eerlijk: we zijn niet optimistisch. Soevereine vermogensfondsen investeren in media voor culturele invloed en financieel rendement — niet voor gamedesign-integriteit. De kans dat EA's games meer pay-to-win worden, meer gefocust op korte-termijn inkomsten en minder gericht op creatieve risico's, is reëel.

Voor Nederlandse gamers die FIFA en Sims al jaren spelen: jullie kunnen het beste blijven spelen wat jullie al hebben, en alternatieve studios in de gaten houden. Want dit scenario eindigt zelden goed voor de speler.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Sophie Bakker',
    date: '2026-01-18',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2669320/header.jpg',
    isBreaking: true,
    views: 24800,
    readTime: 5,
  },

  {
    id: 11,
    slug: 'ubisoft-tencent-deal-nieuw-gaming-filiaal',
    title: 'Ubisoft en Tencent sluiten deal — maar wat verandert er echt voor fans?',
    excerpt:
      'Na jaren van tegenvallende verkopen en een dramatisch dalende beurskoers heeft Ubisoft een strategische deal gesloten met Tencent. Een gezamenlijk gaming-filiaal, meer nadruk op service-games en een beloofd nieuw Assassin\'s Creed-universum. Maar is dit redding of langzaam verdrinking?',
    content: `Ubisoft en Tencent zijn geen onbekenden. De Chinese techgigant had al een belang van 9,9% in de Franse gamepublisher. Maar de deal die op 12 januari 2026 werd aangekondigd gaat verder: een gezamenlijk filiaal dat specifiek wordt opgericht voor de ontwikkeling van nieuwe gaming-IP's en uitbreiding van bestaande franchises naar de Chinese en Aziatische markt.

**De context: Ubisoft in vrije val**

Om te begrijpen waarom Ubisoft dit heeft gedaan, moet je kijken naar de recente teleurstellingen. Skull and Bones na zes jaar ontwikkeling en een "AAAA-game"-belofte werd een commerciële mislukking. Assassin's Creed: Shadows miste aanvankelijk zijn releasedatum en werd met gemixte reacties ontvangen. De aandelenkoers halveerde in twee jaar. Ubisoft stond voor een keuze: verkopen of herstructureren. Ze kozen voor herstructurering — met Tencent als partner.

**Wat brengt Tencent mee?**

Tencent is de grootste gamebedrijf ter wereld qua omzet. Ze hebben belangen in Riot Games, Epic Games, Supercell en tientallen andere studios. Hun expertise ligt in free-to-play games, mobile gaming en het schaalbaar maken van IP's voor wereldwijde markten. Voor Ubisoft betekent deze deal toegang tot de Chinese markt op een manier die het bedrijf nooit eerder heeft gehad.

**Het nieuwe Assassin's Creed universum**

De meest concrete aankondiging uit de deal is een nieuw Assassin's Creed "multi-platform universum" — een combinatie van spellen, films, series en mobiele games die Tencent en Ubisoft samen gaan bouwen. Details zijn schaars, maar geruchten wijzen op een AAA-open-wereld AC-game in feudaal Japan (voortbordurend op Shadows), een free-to-play multiplayer-game en een Netflix-serie.

**Gameinside's oordeel**

We zijn sceptisch. Tencent's betrokkenheid bij Riot Games en andere westerse studio's heeft zelden geleid tot betere single-player ervaringen — eerder het tegenovergestelde. De kans dat Ubisoft met deze deal meer service-games gaat maken ten koste van verhaalgedreven single-player avonturen is groot. Maar: als de alternatief faillissement was, is dit de minst slechte optie.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Joost Vermeer',
    date: '2026-01-12',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/3159330/header.jpg',
    views: 19300,
    readTime: 5,
  },

  {
    id: 12,
    slug: 'hollow-knight-silksong-review-eindelijk-gespeeld',
    title: 'Hollow Knight: Silksong review — 7 miljoen mensen kochten het blind. Ze kregen gelijk.',
    excerpt:
      'Na acht jaar wachten, ontelbare memes en de langstlopende "wanneer?" in gaming-geschiedenis is Hollow Knight: Silksong eindelijk uit. Wij speelden het volledig uit en kunnen zeggen: het was het wachten volledig waard. Dit is een meesterwerk.',
    content: `Er zijn games die je met verwachtingen speelt, en dan zijn er games waarbij de verwachtingen zo hoog zijn opgeblazen dat geen enkele realistische uitkomst ze kan waarmaken. Hollow Knight: Silksong hoort in de tweede categorie. En toch — somehow — slaagt Team Cherry erin om beide groepen tevreden te stellen.

**Hornet als protagonist: een compleet ander gevoel**

Speel je Hollow Knight dan ben je de stille, langzame Ridder. Speel je Silksong dan ben je Hornet: snel, acrobatisch, agressief. De besturing voelt meteen radicaal anders — Hornet is veel responsiever, haar naald-aanvallen zijn preciezer en haar movekit is complexer. Er duurt geen vijf minuten of je beseft: dit is een nieuw spel, geen DLC.

De wereld van Pharloom, waar Hornet gevangengezet wordt aan het begin van het verhaal, is een nieuwe realisatie van de Team Cherry-filosofie: betekenisvolle stilte, visuele verhaalvertelling en een lore-gelaagdheid die je uren kunt ontcijferen. Elk NPC heeft een verhaal. Elke kamer heeft een achtergrond. Pharloom voelt groter dan Hallownest en toch intimer door Hornets meer uitgesproken persoonlijkheid.

**De moeilijkheidsgraad: eerlijk maar meedogenloos**

Silksong heeft nieuwe spelers beter in gedachten dan het origineel — er zijn meer checkpoints in de vroege game en het tutorial-systeem is subtiel verbeterd. Maar wie dacht dat Team Cherry milder was geworden: de baasgevechten in de tweede helft van het spel zijn sommige van de moeilijkste in het genre. De eindbaas — die we hier niet spoileren — is een waar spektakel van Game Design op zijn allerhoogste niveau.

**Muziek: Christopher Larkin overtreft zichzelf**

Christopher Larkin's soundtrack voor het originele Hollow Knight was al legendarisch. Zijn werk voor Silksong is beter. De thema's zijn complexer gecomponeerd, de orkestrale momenten zijn groter en emotioneel devasterend. Luister naar de eindcredits track en je begrijpt waarom gamemuziek ook echte muziek is.

**Gameinside's oordeel**

Hollow Knight: Silksong is een meesterwerk. Het is completer, actiever en emotioneel rijker dan zijn voorganger. De acht jaar wachten was pijn — maar het resultaat rechtvaardigt elke seconde.

**Score: 10/10**`,
    category: 'reviews',
    categoryLabel: 'Reviews',
    author: 'Mark Visser',
    date: '2026-01-05',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1030300/header.jpg',
    views: 44900,
    readTime: 7,
    score: 10,
  },

  // ── DECEMBER 2025 ──────────────────────────────────────────────────────────

  {
    id: 13,
    slug: 'gta-6-opnieuw-uitgesteld-19-november-2026',
    title: 'GTA 6 opnieuw uitgesteld naar 19 november 2026 — en Rockstar ontsloeg vakbondswerkers',
    excerpt:
      'Grand Theft Auto VI gaat niet in 2025 uit. Rockstar heeft het spel opnieuw uitgesteld, nu naar november 2026. Tegelijkertijd ontsloeg het bedrijf 30 medewerkers die intern campagne voerden voor een vakbond. Gameinside vraagt zich af: wanneer is genoeg genoeg?',
    content: `Op 20 december 2025 brak het nieuws via Kotaku en later bevestigd door Rockstar zelf: Grand Theft Auto VI wordt wederom uitgesteld. Niet naar begin 2026, niet naar zomer 2026, maar naar 19 november 2026. Het is de tweede keer in twee jaar dat Rockstar een releasedatum mist. En de omstandigheden zijn deze keer bitter.

**De vakbondskwestie**

Vrijwel gelijktijdig met het uitstelbericht berichtte Kotaku's anonieme bronnen dat Rockstar North — het Edinburghse studio achter de GTA-serie — 30 medewerkers had ontslagen. De reden? Ze hadden intern een informele petitie rondgetuurd voor betere arbeidsomstandigheden en het recht om een vakbond te vormen.

Rockstar ontkent dat de ontslagen gerelateerd zijn aan de vakbondscampagne. "Gewone herstructurering", zegt de woordvoerder. Maar de timing is veelzeggend. En in een sector die al jaren worstelt met crunch culture en hoge burn-out percentages, voelt dit als een stap in de verkeerde richting van een bedrijf dat betere verwachtingen wekt.

**De morele laag van het uitstel**

Dit is de complexiteit van GTA VI: het spel ziet er verbazingwekkend uit. De trailers zijn meesterlijk. De gameplay-beelden overtuigen. Maar de tol die de ontwikkeling eist — van de mensen die het maken — is hoog. Rockstar's "we will release when it's ready"-filosofie klonk jaren geleden nobel; nu voelt het als een dekmantel voor onbeheerd perfectionisme dat menselijke slachtoffers maakt.

**Wat nu voor Nederlandse fans?**

Wacht. Er is weinig anders te doen. GTA VI wordt — als alles goed gaat — de grootste gamerelease van 2026 en de grootste van het decennium. De hype is echt. Maar de mensenkosten zijn ook echt. Misschien is het goed om dat in gedachten te houden wanneer we straks allemaal commentaar leveren op de review scores.

**Gameinside's standpunt**

We willen GTA VI net zo graag als iedereen. Maar we willen het ook gemaakt door mensen die eerlijk behandeld worden. Rockstar heeft in 2026 de kans om te bewijzen dat de prachtige eindproduct hand in hand kan gaan met betere studio-praktijken. Ze hoeven dit alleen maar te kiezen.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Thomas van der Berg',
    date: '2025-12-20',
    image: 'https://img.youtube.com/vi/VQRLujxTm3c/maxresdefault.jpg',
    isBreaking: true,
    views: 38600,
    readTime: 5,
  },

  {
    id: 14,
    slug: 'call-of-duty-black-ops-7-review-teleurstelling',
    title: 'Call of Duty: Black Ops 7 review — de meest verwachte teleurstelling van het jaar',
    excerpt:
      'Na het succes van Battlefield 6 lag de lat hoog voor Activision. Black Ops 7 levert een degelijke campagne, maar de multiplayer is formuliek en de warzone-integratie voelt geforceerd. Was dit genoeg voor de grote concurrent? Gameinside oordeelt na 25 uur.',
    content: `Call of Duty heeft een reputatie om te leveren. Black Ops als sub-serie heeft de beste verhaalcampagnes in de franchise en een multiplayer die miljoenen spelers jarenlang bezighoudt. Black Ops 7 beloofde een stap voorwaarts — een nieuw verhaaluniversum, een volledige overhaul van de multiplayer en diepgaandere integratie met Warzone. Niet alles van dat plan is gelukt.

**De campagne: de enige echte succesfactor**

De campagne is het beste deel van Black Ops 7. Treyarch heeft een verhaal gebouwd rond een AI-gedreven wapenarsenaal dat de grenzen tussen militair geweld en autonoom oorlogvoeren vervaagt — een thema dat in de huidige technologische realiteit raak voelt. Hoofdpersoon Sgt. Maya Torres is goed geschreven en haar dilemma's zijn authentiek. Vijf tot acht uur gameplay leveren een strakke, spectaculaire ervaring op die niet beschaamd hoeft te zijn naast het beste van Modern Warfare (2019).

**De multiplayer: comfortabel maar ongeïnspireerd**

Hier begint de teleurstelling. De multiplayer van Black Ops 7 voelt als een update van Black Ops 6 in plaats van een nieuwe richting. De nieuwe Kill Confirmed-variant en twee nieuwe Hardpoint-maps zijn leuk, maar onvoldoende om het gebrek aan frisse ideeën te verbloemen. Na Battlefield 6's grote herintroductie van destructible environments en playercount-experimenten voelt de BO7-multiplayer smal.

**Warzone-integratie: geforceerd**

Warzone-integratie is dit jaar het zwakste onderdeel. De integratie van de campagne-personages in Warzone voelt als een afterthought. Operators zijn kostbare cosmetische toevoegingen zonder narratieve context. En de Season 1-content die bij launch beschikbaar is, is karig voor een franchise die dit soort monetization als kern van zijn businessmodel heeft.

**Gameinside's oordeel**

Call of Duty: Black Ops 7 is geen slecht spel — de campagne is het geld waard. Maar als opvolger van het jaar (na Battlefield 6 die ons allemaal verraste) is het een stap achteruit. Activision moet terug naar de tekentafel voor de multiplayer. Tot dan: speel de campagne, sla de rest over.

**Score: 6.5/10**`,
    category: 'reviews',
    categoryLabel: 'Reviews',
    author: 'Kevin de Groot',
    date: '2025-12-15',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/3606480/header.jpg',
    views: 27100,
    readTime: 6,
    score: 6.5,
  },

  {
    id: 15,
    slug: 'gameprijzen-door-het-dak-sony-microsoft-nintendo',
    title: 'Gameprijzen door het dak: 80 dollar voor Mario Kart, en niemand stop het',
    excerpt:
      'Sony, Microsoft en Nintendo verhoogden allemaal hun game- en hardwareprijzen in 2025. Mario Kart World voor 80 dollar was de druppel die de emmer deed overlopen. November 2025 was de slechtste verkoopmaand voor games since 1995. Gameinside rekent af met de industrie.',
    content: `Er was een tijd dat een nieuwe game €59,99 kostte en dat als veel werd beschouwd. Die tijd is voorbij. In 2025 bereikten gameprijzen nieuwe hoogtepunten die spelers, critics en zelfs aandeelhouders verontruste. Nintendo zette de toon met Mario Kart World voor $79,99 bij de Switch 2-launch. Sony volgde met $74,99 voor exclusives op de PS5 Pro. Microsoft stelde de Xbox-exclusiveprijs bij naar €69,99 voor first-party titels.

**De cijfers liegen niet**

Novembercijfers van de Entertainment Software Association en ISFE bevestigden wat iedereen al aanvoelde: de gameverkoopmaand van november 2025 was de slechtste in dertig jaar, gecorrigeerd voor inflatie. Niet qua aantallen verkochte exemplaren — die zijn stabiel — maar qua nieuwe klanten. De gaming-industrie trekt minder nieuwe spelers aan dan ooit tevoren.

De redenering van de publishers is begrijpelijk op papier: ontwikkelingskosten zijn drastisch gestegen. Een middelgrote AAA-titel kost nu gemiddeld $200-300 miljoen om te maken. Dat moet ergens vandaan komen. Maar de vraag is: van wie?

**Van casual naar core: de demografische verschuiving**

Het probleem is dat €70-80 per game jonge en casual spelers uitsluit. Mobile gaming en gratis-te-spelen titels pikken die spelers op. De traditionele game-retail verliest haar brede publiek. Wat overblijft is een sector die primair dure spellen verkoopt aan een steeds smaller kernpubliek van enthousiaste volwassenen met beschikbaar inkomen.

Nintendo's keuze voor €79,99 bij Mario Kart World heeft bijzonder hard ingeslagen. Mario Kart was traditioneel een familiegame — betaalbaar, breed toegankelijk. Nu vraagt Nintendo €400 voor de hardware en €80 voor het belangrijkste launch-spel. Dat is geen familiegame meer. Dat is een luxeproduct.

**Gameinside's oordeel**

We zijn van mening dat de industrie een strategische fout maakt. Korte-termijn hogere inkomsten per verkocht exemplaar gaan ten koste van de breedte van het publiek op lange termijn. Game Pass, PlayStation Plus en Nintendo Switch Online zijn de juiste richting — niet hogere stukprijzen. De sector heeft zichzelf in de voet geschoten. En het is de speler die de kogel heeft opgevangen.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Sophie Bakker',
    date: '2025-12-10',
    image: 'https://img.youtube.com/vi/VrTVeYm4iIM/maxresdefault.jpg',
    views: 22500,
    readTime: 5,
  },

  {
    id: 16,
    slug: 'ai-games-debat-larian-indie-ontwikkelaars',
    title: 'AI in games: het grote debat van 2025 — wie heeft er gelijk?',
    excerpt:
      'Larian Studios-baas Swen Vincke is positief over AI-tools voor ontwikkelaars. Indie-ontwikkelaars zijn in opstand. Vakbonden waarschuwen voor baanverlies. Gameinside neemt stelling in een debat dat de toekomst van game-ontwikkeling bepaalt.',
    content: `Swen Vincke, de oprichter van Larian Studios — de makers van Baldur's Gate 3 — deed in december 2025 een statement dat de industrie in twee kampen splitste: "AI-tools voor animatie, textures en NPC-dialogen hebben ons duizenden werkuren bespaard. Zonder die tools was BG3 niet wat het geworden is." Twee dagen later verscheen een open brief ondertekend door 1.200 indie-ontwikkelaars die Vincke's uitspraken "gevaarlijk naïef" noemden.

**Vincke's punt: efficiëntie, niet vervanging**

Larian's AI-gebruik is specifiek: generatieve tools voor herhalende taken. Texturepatronen genereren op basis van concept art. NPC-reacties uitbreiden op basis van door schrijvers opgegeven kernlijn. Stem-placeholder audio aanmaken voor testing voordat echte voice actors hun werk doen. Vincke is expliciet: "We gebruiken AI om ons team te versterken, niet om mensen te vervangen."

Dat klinkt redelijk — en misschien is het dat ook, in Larians specifieke context. Larian is een groot, winstgevend studio dat zelf beslissingen maakt over zijn tools en teamsamenstelling. Maar de precedent die ze zetten heeft effect op de hele industrie.

**De indie-tegenstem: asymmetrische dreiging**

Kleine studios staan in een fundamenteel andere positie. Wanneer grote publishers — EA, Activision, Ubisoft — AI-tools inzetten om artistieke en schrijfposities te reduceren, is het gevolg niet "meer tijd voor creativiteit" maar "minder banen voor mensen die deze industrie vullen met talent en diversiteit". De open brief citeert tientallen gevallen van AI-gegenereerde concept art die freelance kunstenaars hun opdrachten heeft gekost.

Vakbonden in de VS en VK schatten dat AI tot 2030 30.000 game-sector-banen bedreigt — niet door autonome AI-games, maar door de geleidelijke erosie van ondersteunende creatieve functies.

**Gameinside's standpunt**

AI is niet per definitie kwaad voor games. Tools die ontwikkelaars helpen efficiënter te werken zonder banen te elimineren zijn welkom. Maar de lijn is dun, en de incentive van grote bedrijven is niet de lijn in stand te houden. Vincke heeft gelijk dat AI hem hielp BG3 te maken. De industrie heeft gelijk dat dit een gevaarlijk precedent schept als het zonder kaders wordt overgenomen. Die kaders ontbreken momenteel. Dat is het echte probleem.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Nina Hoekstra',
    date: '2025-12-01',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg',
    views: 18200,
    readTime: 5,
  },

  // ── OKTOBER / NOVEMBER 2025 ────────────────────────────────────────────────

  {
    id: 17,
    slug: 'arc-raiders-review-verrassende-hit-2025',
    title: 'Arc Raiders review — de meest verrassende hit van 2025 die niemand zag aankomen',
    excerpt:
      'Embark Studios — de makers van The Finals — brachten in oktober 2025 Arc Raiders uit en bijna niemand sprak erover. Tot de mond-tot-mondreclame begon. Bijna 8 miljoen exemplaren in zes weken. Gameinside speelde 30 uur en vertelt je waarom dit spel werkt.',
    content: `Arc Raiders werd niet verwacht om de hit van het jaar te worden. Embark Studios, de Zweedse developer achter het populaire The Finals, had Arc Raiders al jaren in ontwikkeling, maar door marketingproblemen en een uitgestelde release was het spel onder de radar gebleven. Tot 30 oktober 2025.

**Wat is Arc Raiders precies?**

Arc Raiders is een extraction-shooter — een genre dat populair is dankzij spellen als Escape from Tarkov en Hunt: Showdown, maar dat nooit echt mainstream is geworden. Embark's bijdrage: maak het genre toegankelijker zonder de kernspanning te verliezen. Je landt met je team op een verwoeste aarde, verzamelt resources en wapens, overleeft aanvallen van de Arc (robotachtige buitenaardse wezens) en andere spelers, en ontsnapt voor de timer afloopt. Sterven betekent alles verliezen.

**Waarom werkt het zo goed?**

Drie redenen. Ten eerste: de spanning is consistent opgebouwd. Arc Raiders calibreert zijn momenten van actie en stilte perfect — tien minuten sluipen door een verlaten fabriek gevolgd door een hartstilstandgevecht met een enorme Arc-behemoth die je geluidsaanwijzingen volgde. Ten tweede: de progression-loop is briljant. Elk item dat je uit een missie haalt geeft je een concreet gevoel van vooruitgang. Ten derde: het teamwork-systeem beloont specialisatie zonder solo-spelers te bestraffen.

**De community-factor**

Arc Raiders explodeerde op streaming. Streamers vonden in het spel een perfecte combinatie van persoonlijk drama — de stress van bijna verliezen wat je hebt opgebouwd — en community humor. Clipgeweldige momenten, memorabele fails en epische last-second ontsnapppingen maken het ideaal voor content. De mond-tot-mondreclame deed de rest.

**Gameinside's oordeel**

Arc Raiders is het bewijs dat extractionshooters mainstream kunnen worden als ze correct worden gebalanceerd. Embark heeft iets speciaals gemaakt. Als je van co-op games houdt, is dit nu verplicht speelgoed.

**Score: 8.5/10**`,
    category: 'reviews',
    categoryLabel: 'Reviews',
    author: 'Joost Vermeer',
    date: '2025-11-20',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1808500/header.jpg',
    views: 15900,
    readTime: 6,
    score: 8.5,
  },

  {
    id: 18,
    slug: 'nintendo-switch-2-snelst-verkochte-console-ooit',
    title: 'Nintendo Switch 2: 10,36 miljoen stuks in vier maanden — de snelst verkochte console ooit',
    excerpt:
      'Nintendo heeft de verkoopcijfers bekendgemaakt: 10,36 miljoen Switch 2-consoles in vier maanden. Sneller dan elke console voor hem. Is de upgrade de moeite waard voor Nederlandse gamers die nog een originele Switch hebben? Gameinside geeft een eerlijk advies.',
    content: `Nintendo heeft zijn meest recente kwartaalrapport bekendgemaakt en de Nintendo Switch 2-cijfers zijn indrukwekkend: 10,36 miljoen verkochte exemplaren in vier maanden. Ter vergelijking: de originele Nintendo Switch bereikte zijn eerste 10 miljoen pas in negen maanden. De Wii had er twaalf maanden voor nodig. De Nintendo Switch 2 is, statistisch gezien, de snelst verkochte console in de consumentenelectronicageschiedenis.

**Waarom verkoopt de Switch 2 zo goed?**

Drie factoren spelen een rol. Ten eerste de backward compatibility: alle originele Switch-games zijn speelbaar op de Switch 2, waarvoor het bestaande Switch-libriary van meer dan 4.000 games direct beschikbaar is. Ten tweede de launch-line-up: Mario Kart World, Donkey Kong Bananza en Metroid Prime 4 Beyond zijn drie sterke titels voor een launch. Ten derde de prijs: €449 voor een handheld die ook aan de televisie kan. In vergelijking met de PlayStation 5 Pro (€799) en de nieuwe Xbox (verwacht €599) is dat de meest toegankelijke high-end gaming-optie.

**Moet je upgraden als Switch 1-eigenaar?**

Dit is de vraag die we het meest horen. Ons eerlijke antwoord: het hangt af van hoe je speelt. Als je voornamelijk in tv-modus speelt en je huidige Switch goed functioneert, is er geen urgentie. De verbetering in grafische kwaliteit in tv-modus is merkbaar maar niet generationeel. Als je voornamelijk in handheld-modus speelt: de Switch 2 heeft een 7,9-inch OLED-scherm (tegenover 6,2 inch bij de OLED-Switch) en een aanzienlijk langere batterijduur. Die upgrade voelt wél generationeel.

**De Dutch gaming community over de Switch 2**

In onze enquête onder 2.400 Nederlandse gamers geeft 68% aan "tevreden tot zeer tevreden" te zijn met de Switch 2. De belangrijkste kritiekpunten: de €80 launch-prijs voor Mario Kart World en de beperkte beschikbaarheid van consoles in de eerste zes weken na launch.

**Gameinside's advies**

Koop de Switch 2 als je nu een eerste Switch aanschaft of als je in handheld-modus speelt. Wacht als je tevreden bent met je huidige setup — de Switch 1 wordt nog jarenlang ondersteund.`,
    category: 'nieuws',
    categoryLabel: 'Nieuws',
    author: 'Lisa Jansen',
    date: '2025-11-15',
    image: 'https://img.youtube.com/vi/itpcsQQvgAQ/maxresdefault.jpg',
    views: 21400,
    readTime: 5,
  },

  {
    id: 19,
    slug: 'battlefield-6-review-comeback-die-iedereen-nodig-had',
    title: 'Battlefield 6 review — de comeback die de hele genre-scene nodig had',
    excerpt:
      'Na Battlefield 2042\'s rampzalige launch was de verwachting laag. Battlefield 6 is echter precies wat de franchise en het genre nodig had: grootschalige chaos, destructible environments en een campagne die je meeneemt. Gameinside speelt 40 uur en geeft zijn volledige oordeel.',
    content: `Het is moeilijk te overdrijven hoe diep Battlefield 2042 de franchise had beschadigd. Slechte launch, lege servers, verwijderde features, maandenlange patches. EA en DICE moesten meer dan het gebroken vertrouwen repareren — ze moesten de reden heruitvinden waarom mensen überhaupt Battlefield speelden. Met Battlefield 6 hebben ze dat gedaan.

**De campagne: eindelijk serieuze inhoud**

Battlefield heeft historisch gezien een bijrol gegeven aan zijn campagnes. Battlefield 6 breekt met die traditie: een twintig-uur durend verhaal over een internationale coalitie die een Russisch-geleid gaspijplijnconflict in het Caribisch gebied probeert te stoppen. Het is niet Call of Duty-strak, maar het heeft momentum, karakterontwikkeling en enkele verbluffende setpieces. Bijzonder: de meeste campagne-levels zijn speelbaar in co-op voor twee spelers — een functie die we al jaren vroegen.

**De multiplayer: dit is de reden**

Conquest-modus op kaarten met 128 spelers, volledig destructible environments op basis van de Frostbite 2.0-engine en een voertuigenpool die groter en gevarieerder is dan ooit — Battlefield 6's multiplayer is de beste in de serie. De eerste uren zijn overweldigend. Daarna settelt het neer in een ritme van grootschalig strategisch genieten dat geen ander spel biedt.

De nieuwe "Sector Rush"-modus, waarbij teams van 32 spelers snel wisselende doelen moeten veroveren, is bijzonder succesvol. Sneller dan Conquest maar met dezelfde schaal. De beste nieuwe modus die de serie in tien jaar heeft toegevoegd.

**Technische staat bij launch**

Respectabel. Er waren bugs, maar geen game-breaking issues. De servers hielden stand op dag 1 (zelden bij Battlefield). DICE heeft geleerd van 2042 — en het is te zien.

**Gameinside's oordeel**

Battlefield 6 is de comeback die het genre nodig had. Voor multiplayer-enthousiasten is dit een must-buy. DICE verdient de lof.

**Score: 8.5/10**`,
    category: 'reviews',
    categoryLabel: 'Reviews',
    author: 'Kevin de Groot',
    date: '2025-10-10',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2807960/header.jpg',
    views: 33700,
    readTime: 7,
    score: 8.5,
  },

  {
    id: 20,
    slug: 'little-nightmares-3-review-co-op-horror',
    title: 'Little Nightmares 3 review — voor het eerst co-op, en het werkt verbluffend goed',
    excerpt:
      'Bandai Namco neemt de Little Nightmares-franchise een stap verder met de eerste co-op-modus in de serie. Low en Alone als nieuwe kinderkarakter in een wereld die nog donkerder en surrealer is dan zijn voorgangers. Werkt co-op-horror? Gameinside test het volledig uit.',
    content: `Little Nightmares is een serie die gebouwd is op eenzaamheid. De eerste twee games lieten je alleen, kwetsbaar en klein in een wereld van gigantische, groteske volwassenen. Die eenzaamheid was zowel thematisch als gameplay-essentieel. Little Nightmares 3 doet iets dat aanvoelde als onmogelijk: het voegt een tweede speler toe en verliest niets van de horror.

**Low en Alone: twee stemmen, één verhaal**

De twee nieuwe protagonisten zijn Alone — een kleine violist — en Low, een boogschutter die benodigdheden verzamelt. Ze zijn gevangen in The Nowhere, een surrealistisch netwerk van onmogelijke werelden verbonden door een wolk van duisternis. Het narratief is typisch Little Nightmares: fragmentarisch, visueel verteld, zonder dialoog. Maar de aanwezigheid van twee personages geeft de storytelling een nieuwe laag — je ziet hoe ze op elkaar reageren zonder dat er woorden nodig zijn.

**Co-op zonder de horror te breken**

Hoe maakt Supermassive Games co-op-horror? Door de twee spelers gescheiden te houden op sleutelspanning-momenten. Low kan boogschieten maar kan niet de zware objecten duwen die Alone nodig heeft. Alone's muziekinstrument heeft een verdovend effect op vijanden, maar alleen als ze stil spelen. De samenwerking is organisch en noodzakelijk — nooit voelt het als "druk hier op de knop om door te gaan".

De meest briljante co-op-momenten zijn die waarbij één speler gedwongen is te kijken terwijl de ander een angstaanjagend segment doorloopt. Je kunt helpen noch ingrijpen — alleen toekijken. Die machteloosheid werkt verplettend goed.

**Visuele evolutie**

Little Nightmares 3 ziet er prachtig uit op PS5, Xbox Series X en PC. De verlichting is dramatisch verbeterd ten opzichte van deel 2, en de art direction heeft een nieuwe surrealistische edge gekregen die de serie duidelijker onderscheidt van andere horror-platformers. Een specifieke wereld in het midden van het spel is een van de meest visueel memorabele niveaus in recent gaminggeheugen.

**Gameinside's oordeel**

Little Nightmares 3 bewijst dat co-op horror niet alleen mogelijk maar uitzonderlijk effectief is. De serie heeft zijn eigen stem gevonden en versterkt. Speelbaar solo maar het meest impactvol met een partner op de bank.

**Score: 8/10**`,
    category: 'reviews',
    categoryLabel: 'Reviews',
    author: 'Nina Hoekstra',
    date: '2025-10-05',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1392860/header.jpg',
    views: 14200,
    readTime: 6,
    score: 8,
  },
];

// ── Utility exports ────────────────────────────────────────────────────────

export const featuredArticle = articles.find((a) => a.isFeatured) ?? articles[0];

export const getArticleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

export const getArticlesByCategory = (category: string) =>
  articles.filter((a) => a.category === category);

export const getMostRead = () =>
  [...articles].sort((a, b) => b.views - a.views).slice(0, 5);

export const getLatestArticles = (count = 8, exclude?: number) =>
  articles.filter((a) => a.id !== exclude).slice(0, count);

export const getRelatedArticles = (article: Article, count = 3) =>
  articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, count);

export const categoryLabels: Record<Category, string> = {
  nieuws: 'Nieuws',
  reviews: 'Reviews',
  games: 'Games',
  tech: 'Tech',
  hardware: 'Hardware',
  video: 'Video',
};

export const categoryColors: Record<Category, string> = {
  nieuws: 'bg-cyan-500',
  reviews: 'bg-purple-600',
  games: 'bg-blue-500',
  tech: 'bg-emerald-500',
  hardware: 'bg-amber-500',
  video: 'bg-red-500',
};

export const categoryTextColors: Record<Category, string> = {
  nieuws: 'text-cyan-400',
  reviews: 'text-purple-400',
  games: 'text-blue-400',
  tech: 'text-emerald-400',
  hardware: 'text-amber-400',
  video: 'text-red-400',
};
