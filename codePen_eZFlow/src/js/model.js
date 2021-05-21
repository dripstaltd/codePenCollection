import { AJAX } from './helpers.js';
import { API_URL } from './config.js';

export class State {
  constructor(word, rhymesWith, rhymeString = []) {
    this._id = State.incrementId();
    this._word = word;
    this._rhymeString = rhymeString;
    this._rhymesWith = rhymesWith;
  }
  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }
}

const createRhymeObject = function (data) {
  for (rhymeObject of data) {
    const _markup = `<div class="flexbox-item results-item">${rhymeObject.word}</div>`;
    _parentElement = document.querySelector('.results-container');
    _parentElement.insertAdjacentHTML('beforeend', _markup);
  }
};

export const loadSearchResults = async function (query) {
  try {
    const maxRes = 18;
    const max = `max=${maxRes}&`;
    const approxRhy = 'rel_nry=';
    const smartRhy = 'rel_rhy=';
    const data = await AJAX(`${API_URL}${max}${smartRhy}${query}`);
    if (!data) throw new Error();
    createRhymeObject(data);
  } catch (err) {
    console.error(`${err} 🔥🔥🔥🔥`);
    throw err;
  }
};

export const savedRhymes = [
  {
    id: 0,
    word: 'rambo',
    rhymeString: 'i spy with my little rambo',
    rhymesWith: ['mango', 'tango', 'django', 'candle', 'gang go', 'bando', 'bangbros', 'phone'],
  },
  {
    id: 1,
    word: 'mango',
    rhymeString: '1 more wig to split like a mango',
    rhymesWith: ['nando', 'rambo', 'tango', 'django', 'blanco', 'Van Gogh', 'tobacco', 'commando'],
  },
  {
    id: 2,
    word: 'tango',
    rhymeString: 'man so shook, looks like he has just been tango',
    rhymesWith: ['mango', 'rambo', 'bang goes', 'piano', 'rambo', 'santo', 'orlando', 'back home'],
  },
  {
    id: 3,
    word: 'djangos',
    rhymeString: 'chains, bring me down all the same, hate me, not weighty like djangos',
    rhymesWith: ['nando', 'rambo', 'back home', 'dangles', 'angles', 'bangles', 'spaniels', 'ankles'],
  },
  {
    id: 4,
    word: 'trap phone',
    rhymeString: 'when im back home, delete these neeks off the trap phone',
    rhymesWith: ['back home', 'lactose', 'hack codes', 'back bone', 'rambo', 'cash loan'],
  },
  {
    id: 5,
    word: 'hack code',
    rhymeString: 'gets deep when i hack code',
    rhymesWith: ['nank bone', 'shank clothes', 'jack jones', 'map shows', 'rambo', 'back home', 'had known', 'stats show'],
  },
  {
    id: 6,
    word: 'web',
    rhymeString: 'flies i spy trapped the web',
    rhymesWith: ['head', 'dead', 'fed', 'med', 'pleb', 'bed'],
  },
  {
    id: 7,
    word: 'head',
    rhymeString: 'yo, my guys tapped in the head',
    rhymesWith: ['lead', 'infrared', 'dread', 'dead', 'fed', 'ahead', 'instead', 'web'],
  },
  {
    id: 8,
    word: 'vexing',
    rhymeString: 'perplexing i know when i use these words its vexing',
    rhymesWith: ['flexing', 'guessing', 'messing', 'complexing', 'bedding', 'checking', 'collecting', 'blessing'],
  },
  {
    id: 9,
    word: 'flexing',
    rhymeString: 'op is bruck, that is why i am still flexing',
    rhymesWith: ['vexing', 'sexting', 'texting', 'distressing', 'bedding', 'head in', 'sensing', 'possessing'],
  },
  {
    id: 10,
    word: 'bedding',
    rhymeString: 'left alone at home in my bedroom, no bedding',
    rhymesWith: ['heading', 'head in', 'flexing', 'texting', 'teddy', 'threading', 'sledding', 'reading', 'upsetting', 'forgetting'],
  },
  {
    id: 11,
    word: 'head in',
    rhymeString: 'cannot feed bro, all his crying is doing my head in',
    rhymesWith: ['heading', 'vexing', 'wedding', 'trending', 'wrestleing', 'begging', 'pretending', 'bled him'],
  },
  {
    id: 12,
    word: 'doctor',
    rhymeString: 'i still get scripts from the doctor',
    rhymesWith: ['proctor', 'locker', 'adopter', 'mopper', 'copper', 'propper', 'mocker', 'rocker'],
  },
  {
    id: 13,
    word: 'propper',
    rhymeString: 'my ex gone, so back to bang proper',
    rhymesWith: ['topper', 'doctor', 'doctors', 'otter', 'popular', 'helicopter', 'helicopters', 'chopper', 'whopper'],
  },
  {
    id: 14,
    word: 'toppers',
    rhymeString: 'spin these toppers',
    rhymesWith: ['propper', 'conkers', 'spotters', 'shoppers', 'potters', 'imposters', 'bonkers', 'droppers'],
  },
  {
    id: 15,
    word: 'helicopters',
    rhymeString: 'let the white mandigo swing just like helicopters',
    rhymesWith: ['conkers', 'bonkers', 'fosters', 'toppers', 'doctors', 'bonkers', 'fosters', 'posture'],
  },
  {
    id: 16,
    word: 'bonkers',
    rhymeString: 'take me back to the day when ever rave played bonkers',
    rhymesWith: ['blockers', 'knockers', 'sponsers', 'conkers', 'conquers', 'yonkers', 'responders', 'helicopters', 'stop us'],
  },
  {
    id: 17,
    word: 'conkers',
    rhymeString: 'i swing that blade like i play conkers',
    rhymesWith: ['plonkers', 'rockers', 'lockers', 'sponsers', 'conquers', 'oscars', 'bonkers', 'yonkers'],
  },
  {
    id: 18,
    word: 'bones',
    rhymeString: 'hashtag camelot when i pull swords from bones',
    rhymesWith: ['stones', 'zones', 'drones', 'froze', 'loads', 'pose', 'rows', 'lobes'],
  },
  {
    id: 19,
    word: 'shadows',
    rhymeString: 'since 2010 i be spitting in shadows',
    rhymesWith: ['arrows', 'gallows', 'hallows', 'dad goes', 'flag rose', 'rat holes', 'macros', 'cash flows'],
  },
  {
    id: 20,
    word: 'gallows',
    rhymeString: 'know the dotted line, cant be signed from the gallows',
    rhymesWith: ['narrow', 'shadows', 'backbones', 'tobacco', 'crack hoe', 'back home', 'nano', 'el passo'],
  },
  {
    id: 21,
    word: 'marrow',
    rhymeString: 'embedded deep in bone marrow',
    rhymesWith: ['gallow', 'gallows', 'narrow', 'arrows', 'farell', 'bando', 'apparel'],
  },
  {
    id: 22,
    word: 'arrows',
    rhymeString: 'words hurt like shots, alcaholics shooting arrows',
    rhymesWith: ['marrow', 'shallows', 'nandos', 'cam toes', 'nachos', 'black rose', 'harrow', 'gallows'],
  },
  {
    id: 23,
    word: 'cowards',
    rhymeString: 'over time yeh thats sweet and cowards',
    rhymesWith: ['sour', 'sours', 'howards', 'flowers', 'powers', 'towels', 'vowels', 'hour', 'hours'],
  },
  {
    id: 24,
    word: 'camera',
    rhymeString: 'my only memories i dont keep on camera',
    rhymesWith: ['hour', 'samara', 'pamela', 'matter of', 'amatuer', 'lazarus', 'canada'],
  },
  {
    id: 25,
    word: 'hour',
    rhymeString: 'general b dot, gash by the hour',
    rhymesWith: ['cowards', 'power', 'tower', 'howard', 'devour', 'trouser', 'powder', 'router'],
  },
];
