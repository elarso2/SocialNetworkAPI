const names = [
  "ted",
  "barney",
  "lily",
  "marshall",
  "robin",
  "chandler",
  "monica",
  "rachel",
  "phoebe",
  "ross",
  "joey",
  "rossi",
  "jj",
  "prentiss",
  "spencer",
  "hotch",
  "morgan",
  "penelope",
];

const thoughts = [
  "Someone asked me where I live...I told them my parents live in Chicago..but I live in the moment",
  "Get a girl without speaking to her?? Challenge accepted!!",
  "If Barney tries to disrepect Canada again, I'm going to go all Hoser on him!",
  "I passed the New York Bar Exam! Judge Fudge, here I come!",
  "A goat ate me during class today and my devil kindergarteners loved it",
  "Wheels up in 20, team.",
  "I've narrowed down the unsub's geoprofile to a 5 mile radius.",
  "The unsub was spotted on 5th and Maple; Reid and JJ, you're closest. We'll meet you there.",
  "A plan? I don't even have a pla-",
  "Did you guys watch me on Days of Our Lives last night??",
  "Ross keeps claiming we were on a break, but that doesn't mean we weren't together!",
  "What part of pivot is so hard to understand??",
  "Jack, work the case buddy",
  "The BAU is the best team out there; no one can tell me differently",
  "My new intern, Tag, is so cute!! I'm gonna scream!",
];

// get random item
const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// random username
const getUsername = () => `${getRandom(names)}`;

// random thought
const getThought = () => `${getRandom(thoughts)}`;

module.exports = { getUsername, getThought };
