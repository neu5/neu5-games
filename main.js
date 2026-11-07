// Languages: add a new one by adding a block here. Missing keys fall back to English.
const LANGS = {
  en: {
    _name: 'English',
    'doc.desc': 'Small, free games made for fun by a programmer and AI.',
    'hero.kicker': 'Small games, made with care',
    'hero.title': 'Games I make for fun.',
    'hero.text': "I'm a programmer. Making games with AI is my hobby: I dream them up, build them with AI helpers and test them at home.",
    'hero.cta': 'See the games',
    'hero.support': 'Support',
    'games.title': 'Games',
    'st.live': 'Play now', 'st.wip': 'In progress', 'st.idea': 'Planned',
    'btn.play': 'Play', 'btn.soon': 'Coming soon', 'nav.all': 'All games',
    'art.concept': 'Concept art',
    'fairy.title': 'Helpful Fairy',
    'fairy.meta': 'For kids 5–8 · English, Polish, French',
    'fairy.text': 'A calm platformer about helping others. Fly, collect pollen, set clocks, count stars and help 50 forest friends. No ads, no reading needed.',
    'fairy.desc': 'A calm platformer for kids aged 5–8 about helping forest friends.',
    'fairy.f1': '5 chapters, 50 short levels',
    'fairy.f2': 'No dying and no reading needed',
    'fairy.f3': 'Several kid profiles with saved progress',
    'fairy.f4': 'Works with keyboard and touch',
    'laps.title': 'Tiny Laps',
    'laps.meta': '3D racing · 1–8 players',
    'laps.text': 'Small 3D racing seen from above. Ten tracks, AI drivers, pit stops, online rooms and a track editor.',
    'laps.desc': 'A small 3D racing game in the browser, with AI drivers, online rooms and a track editor.',
    'laps.f1': 'Ten tracks and five cars',
    'laps.f2': 'Up to 8 cars, with AI drivers filling the grid',
    'laps.f3': 'Online rooms, or two players on one keyboard',
    'laps.f4': 'Championships and your own tracks',
    'snails.title': 'Snails',
    'snails.meta': 'Turn-based artillery · two teams',
    'snails.text': 'Two teams of snails take turns on a crumbly island. Check the wind, aim, boom!',
    'snails.desc': 'A turn-based artillery game: two teams of snails fight on a crumbly island.',
    'snails.f1': 'The island breaks where you hit it',
    'snails.f2': 'Bazookas, grenades, mines, ropes and more',
    'snails.f3': 'Play against a friend or a bot',
    'realm.title': 'Realm War',
    'realm.meta': 'Online fantasy world · working title',
    'realm.text': 'Humans, elves, dwarves and orcs work, trade, elect a president and go to war in one shared world.',
    'realm.desc': 'An online fantasy world where nations work, trade, vote and fight.',
    'realm.f1': 'Four peoples in one open world',
    'realm.f2': 'Work, hunt and trade',
    'realm.f3': 'Vote for a president and fight big battles',
    'sup.title': 'Like my games?',
    'sup.text': 'They are free and will stay free, with no ads. If you want to help, you can buy me a coffee.',
    'sup.btn': 'Buy me a coffee',
    'foot.made': 'Made with code, AI and coffee.',
    'foot.privacy': 'No cookies, no personal data, only anonymous stats.',
  },
  pl: {
    _name: 'Polski',
    'doc.desc': 'Małe, darmowe gry robione dla frajdy przez programistę i AI.',
    'hero.kicker': 'Małe gry, robione z sercem',
    'hero.title': 'Gry, które robię dla frajdy.',
    'hero.text': 'Jestem programistą. Robienie gier z AI to moje hobby: wymyślam je, buduję z pomocą AI i testuję w domu.',
    'hero.cta': 'Zobacz gry',
    'hero.support': 'Wesprzyj',
    'games.title': 'Gry',
    'st.live': 'Zagraj', 'st.wip': 'W budowie', 'st.idea': 'W planach',
    'btn.play': 'Graj', 'btn.soon': 'Wkrótce', 'nav.all': 'Wszystkie gry',
    'art.concept': 'Grafika koncepcyjna',
    'fairy.title': 'Pomocna Wróżka',
    'fairy.meta': 'Dla dzieci 5–8 lat · polski, angielski, francuski',
    'fairy.text': 'Spokojna platformówka o pomaganiu innym. Lataj, zbieraj pyłek, ustawiaj zegary, licz gwiazdy i pomóż 50 leśnym przyjaciołom. Bez reklam, bez czytania.',
    'fairy.desc': 'Spokojna platformówka dla dzieci w wieku 5–8 lat o pomaganiu leśnym przyjaciołom.',
    'fairy.f1': '5 rozdziałów, 50 krótkich poziomów',
    'fairy.f2': 'Bez przegrywania i bez czytania',
    'fairy.f3': 'Kilka profili dzieci z zapisem postępów',
    'fairy.f4': 'Działa na klawiaturze i ekranie dotykowym',
    'laps.title': 'Tiny Laps',
    'laps.meta': 'Wyścigi 3D · 1–8 graczy',
    'laps.text': 'Małe wyścigi 3D widziane z góry. Dziesięć tras, kierowcy AI, pit stopy, pokoje online i edytor tras.',
    'laps.desc': 'Małe wyścigi 3D w przeglądarce, z kierowcami AI, pokojami online i edytorem tras.',
    'laps.f1': 'Dziesięć tras i pięć aut',
    'laps.f2': 'Do 8 aut, resztę stawki uzupełniają kierowcy AI',
    'laps.f3': 'Pokoje online albo dwie osoby na jednej klawiaturze',
    'laps.f4': 'Mistrzostwa i własne trasy',
    'snails.title': 'Ślimaki',
    'snails.meta': 'Turowa artyleria · dwie drużyny',
    'snails.text': 'Dwie drużyny ślimaków na zmianę walczą na kruszącej się wyspie. Sprawdź wiatr, celuj, bum!',
    'snails.desc': 'Turowa gra artyleryjska: dwie drużyny ślimaków walczą na kruszącej się wyspie.',
    'snails.f1': 'Wyspa kruszy się tam, gdzie trafisz',
    'snails.f2': 'Bazooki, granaty, miny, liny i więcej',
    'snails.f3': 'Graj ze znajomym albo z botem',
    'realm.title': 'Realm War',
    'realm.meta': 'Fantastyczny świat online · nazwa robocza',
    'realm.text': 'Ludzie, elfy, krasnoludy i orki pracują, handlują, wybierają prezydenta i toczą wojny w jednym wspólnym świecie.',
    'realm.desc': 'Fantastyczny świat online, w którym państwa pracują, handlują, głosują i walczą.',
    'realm.f1': 'Cztery rasy w jednym otwartym świecie',
    'realm.f2': 'Praca, polowanie i handel',
    'realm.f3': 'Wybory prezydenta i wielkie bitwy',
    'sup.title': 'Lubisz moje gry?',
    'sup.text': 'Są darmowe i takie zostaną, bez reklam. Jeśli chcesz pomóc, możesz postawić mi kawę.',
    'sup.btn': 'Postaw mi kawę',
    'foot.made': 'Zrobione z kodem, AI i kawą.',
    'foot.privacy': 'Bez ciasteczek i danych osobowych, tylko anonimowe statystyki.',
  },
  fr: {
    _name: 'Français',
    'doc.desc': 'Petits jeux gratuits, faits pour le plaisir par un programmeur et l’IA.',
    'hero.kicker': 'Petits jeux, faits avec soin',
    'hero.title': 'Des jeux que je fais pour le plaisir.',
    'hero.text': 'Je suis programmeur. Créer des jeux avec l’IA est mon loisir : je les imagine, je les construis avec des assistants IA et je les teste à la maison.',
    'hero.cta': 'Voir les jeux',
    'hero.support': 'Soutenir',
    'games.title': 'Jeux',
    'st.live': 'Jouer', 'st.wip': 'En cours', 'st.idea': 'Prévu',
    'btn.play': 'Jouer', 'btn.soon': 'Bientôt', 'nav.all': 'Tous les jeux',
    'art.concept': 'Art conceptuel',
    'fairy.title': 'Fée Serviable',
    'fairy.meta': 'Pour les 5–8 ans · français, anglais, polonais',
    'fairy.text': 'Un jeu de plateforme calme sur l’entraide. Vole, récolte du pollen, règle des horloges, compte les étoiles et aide 50 amis de la forêt. Sans pub, sans lecture.',
    'fairy.desc': 'Un jeu de plateforme calme pour les 5–8 ans, où l’on aide les amis de la forêt.',
    'fairy.f1': '5 chapitres, 50 niveaux courts',
    'fairy.f2': 'On ne perd jamais et il n’y a rien à lire',
    'fairy.f3': 'Plusieurs profils d’enfants, avec sauvegarde',
    'fairy.f4': 'Au clavier ou sur écran tactile',
    'laps.title': 'Tiny Laps',
    'laps.meta': 'Course 3D · 1 à 8 joueurs',
    'laps.text': 'Petites courses en 3D vues d’en haut. Dix circuits, des pilotes IA, des arrêts au stand, des salons en ligne et un éditeur de circuits.',
    'laps.desc': 'Un petit jeu de course 3D dans le navigateur, avec pilotes IA, salons en ligne et éditeur de circuits.',
    'laps.f1': 'Dix circuits et cinq voitures',
    'laps.f2': 'Jusqu’à 8 voitures, complétées par des pilotes IA',
    'laps.f3': 'Salons en ligne, ou à deux sur un clavier',
    'laps.f4': 'Championnats et circuits perso',
    'snails.title': 'Escargots',
    'snails.meta': 'Artillerie au tour par tour · deux équipes',
    'snails.text': 'Deux équipes d’escargots jouent chacune leur tour sur une île qui s’effrite. Regarde le vent, vise, boum !',
    'snails.desc': 'Un jeu d’artillerie au tour par tour : deux équipes d’escargots s’affrontent sur une île qui s’effrite.',
    'snails.f1': 'L’île s’effrite là où tu frappes',
    'snails.f2': 'Bazookas, grenades, mines, cordes et plus',
    'snails.f3': 'Joue contre un ami ou un robot',
    'realm.title': 'Realm War',
    'realm.meta': 'Monde fantastique en ligne · titre provisoire',
    'realm.text': 'Humains, elfes, nains et orques travaillent, échangent, élisent un président et partent en guerre dans un seul monde partagé.',
    'realm.desc': 'Un monde fantastique en ligne où les nations travaillent, échangent, votent et se battent.',
    'realm.f1': 'Quatre peuples dans un monde ouvert',
    'realm.f2': 'Travailler, chasser et échanger',
    'realm.f3': 'Élire un président et livrer de grandes batailles',
    'sup.title': 'Tu aimes mes jeux ?',
    'sup.text': 'Ils sont gratuits et le resteront, sans pub. Si tu veux aider, tu peux m’offrir un café.',
    'sup.btn': 'Offre-moi un café',
    'foot.made': 'Fait avec du code, de l’IA et du café.',
    'foot.privacy': 'Sans cookies ni données personnelles, juste des statistiques anonymes.',
  },
};

const KEY = 'neu5-lang';
// Umami website ID. Empty means no analytics are loaded.
const UMAMI_ID = '';

function pickLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (q && LANGS[q]) return q;
  try { const s = localStorage.getItem(KEY); if (s && LANGS[s]) return s; } catch { /* storage blocked */ }
  for (const l of navigator.languages || [navigator.language]) {
    const code = (l || '').slice(0, 2).toLowerCase();
    if (LANGS[code]) return code;
  }
  return 'en';
}

function setLang(lang) {
  const d = LANGS[lang], en = LANGS.en;
  document.documentElement.lang = lang;
  for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = d[el.dataset.i18n] ?? en[el.dataset.i18n];
  const { title, desc = 'doc.desc' } = document.documentElement.dataset;
  document.querySelector('meta[name=description]').content = d[desc] ?? en[desc];
  if (title) document.title = `${d[title] ?? en[title]} · neu5 games`;
  for (const b of document.querySelectorAll('#langs button')) b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  try { localStorage.setItem(KEY, lang); } catch { /* storage blocked */ }
}

const nav = document.getElementById('langs');
for (const [code, d] of Object.entries(LANGS)) {
  const b = document.createElement('button');
  b.type = 'button';
  b.dataset.lang = code;
  b.textContent = code.toUpperCase();
  b.title = d._name;
  b.setAttribute('aria-label', d._name);
  b.onclick = () => setLang(code);
  nav.append(b);
}
document.getElementById('year').textContent = String(new Date().getFullYear());
setLang(pickLang());

if (UMAMI_ID) {
  const s = document.createElement('script');
  s.defer = true;
  s.src = 'https://cloud.umami.is/script.js';
  s.dataset.websiteId = UMAMI_ID;
  document.head.append(s);
}

// Wait briefly for the Play event, or leaving the page can cancel it.
document.addEventListener('click', async (e) => {
  const link = e.target.closest('a[data-play]');
  if (!link || !window.umami) return;
  const newTab = e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0;
  if (!newTab) e.preventDefault();
  try {
    await Promise.race([
      window.umami.track('play-click', { game: link.dataset.play }),
      new Promise((done) => setTimeout(done, 400)),
    ]);
  } catch { /* analytics must never block play */ }
  if (!newTab) location.href = link.href;
});
