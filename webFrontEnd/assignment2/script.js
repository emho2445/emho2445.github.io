let animal;
let adjective;
let number;
let phoneNumber;

let count = 0; //Counts the story array so that you get a new story

//defines the form
const form = document.querySelector('form');
//defines the paragraph output
const formOutput = document.getElementById('output');
const newStory = document.getElementById('newStory');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  formOutput.textContent = '';

  const data = new FormData(form);
  //Sets form values to variables
  animal = data.get('animal');
  adjective = data.get('adjectiveOne');
  number = data.get('distance');
  phoneNumber = data.get('phoneNumber');
  
  let stories = [
    `Once there was a big fuzzy ${animal} and her name is Bertha. Bertha is a very ${adjective} ${animal}. Bertha normally walks ${number} miles a day but today she got very tired. So halfway through her walk she called her best friend at ${phoneNumber}.`,
    `The little ${adjective} ${animal} slept for ${number} hours. Their friends got so scared that they called the vet at ${phoneNumber}.`,
    `If you're looking to buy a ${animal} you need to call ${phoneNumber} TODAY! You will get a ${number}% discount if you wear a ${adjective} ${animal} costume. Call NOW!`,
    `${adjective} ${animal}s are a huge risk to society. There are more than ${number} trillion human deaths per year from ${animal}s. If you see a ${adjective} ${animal} call for help at ${phoneNumber}!` 
    ]

    //Checks to see which story index to write
    if(count == 4){
        count = 0;
        formOutput.append(stories[count]);
        count ++;
    }else{
        formOutput.append(stories[count]);
        count ++;
    }

    if(count != 0){
        newStory.textContent = 'Click Submit for new stories!'
    }else{
        newStory.textContent = ' '
    }
});

// Reset button functions
const resetButton = document.querySelector('button');

resetButton.addEventListener('click', reset);

//Resets the variables in JavaScript, the paragraph and in the form
function reset(){
    animal = '';
    adjective = '';
    number = 0;
    phoneNUmber = 0;
    formOutput.textContent = '';
    form.reset();
}