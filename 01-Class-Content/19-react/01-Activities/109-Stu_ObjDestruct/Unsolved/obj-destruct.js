// Borrub is an object representing a video game avatar
const borrub = {
  race: "Orc",
  gender: "male",
  name: "Borrub",
  className: "Hunter",
  level: 14
};

// avatars is an array of video game avatar objects
let avatars = [
  {
    race: "Undead",
    gender: "female",
    name: "Tameli",
    className: "Rogue",
    level: 33
  },
  {
    race: "Human",
    gender: "female",
    name: "Fiana",
    className: "Mage",
    level: 10
  }
];

// 1. Update this function so it uses array spread to append the new avatar to the array
const addAvatar = avatar => avatars.concat(avatar);
// const addAvatar = avatar => [...avatars, avatar];

const greet = avatar => {
  // 2. Update this function to use object destructuring to access the avatar object properties
  const {race, gender, name, className, level} = avatar;
  // const race = avatar.race;
  // const name = avatar.name;
  // const level = avatar.level;
  // const gender = avatar.gender;
  // const className = avatar.className;
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// destructure function parameters
const greet2 = ({race, gender, name, className, level}) => {
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// Adds borrub to the list of avatars
avatars = addAvatar(borrub);

// For each avatar, call the greet function and pass in the avatar as an argument
avatars.forEach(greet);
avatars.forEach(greet2);
