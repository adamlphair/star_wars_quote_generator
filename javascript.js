var quotes = [
  'Help me, Obi-Wan Kenobi. You\’re my only hope. — Leia Organa',
  'I find your lack of faith disturbing. — Darth Vader',
  'It\’s the ship that made the Kessel run in less than twelve parsecs. I\’ve outrun Imperial starships. Not the local bulk cruisers, mind you. I\’m talking about the big Corellian ships, now. She\’s fast enough for you, old man. — Han Solo',
  'The Force will be with you. Always. — Obi-Wan Kenobi',
  'Why, you stuck-up, half-witted, scruffy-looking nerf herder! — Leia Organa',
  'Never tell me the odds! — Han Solo',
  'Do. Or do not. There is no try. — Yoda',
  'No. I am your father. — Darth Vader',
  'When gone am I, the last of the Jedi will you be. The Force runs strong in your family. Pass on what you have learned. — Yoda',
  'I\’ll never turn to the dark side. You\’ve failed, your highness. I am a Jedi, like my father before me. — Luke Skywalker',
  'Now, young Skywalker, you will die. — Emperor Palpatine',
  'Just for once, let me look on you with my own eyes. — Anakin Skywalker',
  'There\’s always a bigger fish. — Qui-Gon Jinn',
  'Fear is the path to the dark side. Fear leads to anger; anger leads to hate; hate leads to suffering. I sense much fear in you. — Yoda',
  'You were my brother, Anakin. I loved you. — Obi-Wan Kenobi'
]

function newQuote() {
  var randonNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randonNumber];
}
