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
    'btn.play': 'Play', 'btn.soon': 'Coming soon', 'btn.later': 'Later',
    'fairy.title': 'Helpful Fairy',
    'fairy.meta': 'For kids 5–8 · English, Polish, French',
    'fairy.text': 'A calm platformer about helping others. Fly, collect pollen, set clocks, count stars and help 50 forest friends. No ads, no reading needed.',
    'race.title': 'Racing game',
    'race.meta': 'Inspired by GeneRally · no name yet',
    'race.text': 'Small 3D racing seen from above. Many tracks, AI drivers, pit stops, and a track editor.',
    'snails.title': 'Snails',
    'snails.meta': 'Inspired by Worms',
    'snails.text': 'Two teams of snails take turns on a crumbly island. Check the wind, aim, boom!',
    'erep.title': 'Nation game',
    'erep.meta': 'Inspired by eRepublik · no name yet',
    'erep.text': 'An online world of players. Work, trade, vote, and build a country together.',
    'sup.title': 'Like my games?',
    'sup.text': 'They are free and will stay free, with no ads. If you want to help, you can buy me a coffee.',
    'sup.btn': 'Buy me a coffee',
    'foot.made': 'Made with code, AI and coffee.',
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
    'btn.play': 'Graj', 'btn.soon': 'Wkrótce', 'btn.later': 'Później',
    'fairy.title': 'Pomocna Wróżka',
    'fairy.meta': 'Dla dzieci 5–8 lat · polski, angielski, francuski',
    'fairy.text': 'Spokojna platformówka o pomaganiu innym. Lataj, zbieraj pyłek, ustawiaj zegary, licz gwiazdy i pomóż 50 leśnym przyjaciołom. Bez reklam, bez czytania.',
    'race.title': 'Gra wyścigowa',
    'race.meta': 'Inspirowana GeneRally · jeszcze bez nazwy',
    'race.text': 'Małe wyścigi 3D widziane z góry. Wiele tras, kierowcy AI, pit stopy i edytor tras.',
    'snails.title': 'Ślimaki',
    'snails.meta': 'Inspirowana Worms',
    'snails.text': 'Dwie drużyny ślimaków na zmianę walczą na kruszącej się wyspie. Sprawdź wiatr, celuj, bum!',
    'erep.title': 'Gra o państwach',
    'erep.meta': 'Inspirowana eRepublik · jeszcze bez nazwy',
    'erep.text': 'Świat online pełen graczy. Pracuj, handluj, głosuj i buduj razem państwo.',
    'sup.title': 'Lubisz moje gry?',
    'sup.text': 'Są darmowe i takie zostaną, bez reklam. Jeśli chcesz pomóc, możesz postawić mi kawę.',
    'sup.btn': 'Postaw mi kawę',
    'foot.made': 'Zrobione z kodem, AI i kawą.',
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
    'btn.play': 'Jouer', 'btn.soon': 'Bientôt', 'btn.later': 'Plus tard',
    'fairy.title': 'Fée Serviable',
    'fairy.meta': 'Pour les 5–8 ans · français, anglais, polonais',
    'fairy.text': 'Un jeu de plateforme calme sur l’entraide. Vole, récolte du pollen, règle des horloges, compte les étoiles et aide 50 amis de la forêt. Sans pub, sans lecture.',
    'race.title': 'Jeu de course',
    'race.meta': 'Inspiré de GeneRally · pas encore de nom',
    'race.text': 'Petites courses en 3D vues d’en haut. Plein de circuits, des pilotes IA, des arrêts au stand et un éditeur de circuits.',
    'snails.title': 'Escargots',
    'snails.meta': 'Inspiré de Worms',
    'snails.text': 'Deux équipes d’escargots jouent chacune leur tour sur une île qui s’effrite. Regarde le vent, vise, boum !',
    'erep.title': 'Jeu de nations',
    'erep.meta': 'Inspiré d’eRepublik · pas encore de nom',
    'erep.text': 'Un monde en ligne plein de joueurs. Travaille, échange, vote et construis un pays ensemble.',
    'sup.title': 'Tu aimes mes jeux ?',
    'sup.text': 'Ils sont gratuits et le resteront, sans pub. Si tu veux aider, tu peux m’offrir un café.',
    'sup.btn': 'Offre-moi un café',
    'foot.made': 'Fait avec du code, de l’IA et du café.',
  },
};

const KEY = 'neu5-lang';

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
  document.querySelector('meta[name=description]').content = d['doc.desc'] ?? en['doc.desc'];
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
