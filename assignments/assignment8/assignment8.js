const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for some icecream. As they approached :inserty:, they started to do a happy dance. After they :insertz:. Bob saw them dance, and thought about how much icecream they consumed — :insertx: weighs 300 pounds and was dripping sweat.";
let insertX = ["Frosty the Snowman", "The Pizza Guy", "President Lyndon B. Johnson"];
let insertY = ["Benjamin and Jeremy's", "their car with a flat tire", "the center of Mordor"];
let insertZ = ["turned around and went home", "befriended a crow using paper clips to barter", "went to go find an ATM"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name )

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14).toString() + ' stone';
    const temperature =  Math.round((94-32)*(5/9)).toString() + ' centigrade';

    newStory = newStory.replace("94 fahrenheit", temperature );
    newStory = newStory.replace("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}