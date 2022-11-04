
window.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');

quoteButton.addEventListener('click', getQuote);

const authorButton = document.querySelector('.twitter');

authorButton.addEventListener('click', getAuthor);

let quoteNumber = 0; //This is how I'm going to keep track of array numbers for the quotes and authors

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

//gets a new quote
async function getQuote(){
    console.log('test quote worked');

    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            quoteNumber = getRandomInt(0, 1643);
            displayQuote(data[quoteNumber].text);
            displayAuthor(' ');
        });

}

//Gets the author for the quote
async function getAuthor(){ 
    console.log('test author worked');

    fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            displayAuthor(data[quoteNumber].author)
            console.log(data[quoteNumber]); //this verifies that the quote and author match
        });
}
    
function displayQuote(x){
    document.getElementById('js-quote-text').textContent = x;
}

function displayAuthor(x){
    document.getElementById('js-author-text').textContent = x;
}
