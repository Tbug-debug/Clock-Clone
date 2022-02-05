const quotes = [
  {
    quote:
      "And ever has it been that love knows not its own depth until the hour of separation.",
    author: "The Prophet",
  },

  {
    quote:
      "Is not dread of thirst when your well is full, the thirst that is unquenchable?",
    author: "The Prophet",
  },

  {
    quote:
      "For if you bake bread with indifference, you bake a bitter bread that feeds but half man’s hunger.",
    author: "The Prophet",
  },

  {
    quote:
      "When you are joyous, look deep into your heart and you shall find it is only that which has given you sorrow that is giving you joy.",
    author: "The Prophet",
  },

  {
    quote:
      "Your soul is oftentimes a battlefield, upon which your reason and your judgment wage war against your passion and your appetite.",
    author: "The Prophet",
  },

  {
    quote:
      "Much of your pain is self-chosen. It is the bitter potion by which the physician within you heals your sick self.",
    author: "The Prophet",
  },
  {
    quote:
      "And let there be no purpose in friendship save the deepening of the spirit.",
    author: "The Prophet",
  },

  {
    quote:
      "You are good when you are one with yourself. Yet when you are not one with yourself you are not evil.",
    author: "The Prophet",
  },

  {
    quote:
      "When, you work you are a flute through whose heart the whispering of the hours turns to music.",
    author: "The Prophet",
  },

  {
    quote:
      "No man can reveal to you anything at all but that which already lies half asleep in the dawning of your knowledge.",
    author: "The Prophet",
  },
  {
    quote:
      "Freedom comes not from waging battles against all the world's troubles, but from ceasing to be troubled by them.",
    author: "The Prophet",
  },
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const wiseSay = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = wiseSay.quote;
author.innerText = wiseSay.author;
