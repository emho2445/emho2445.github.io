const titles = document.getElementById('bookTitles'); // Display div

let empty = true; // Allows to check if display is empty or not

const form = document.querySelector('form'); // Form element

//Runs when the submit button is hit
form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('in the form')

    //Checks to see if there is already information on the page
    if(empty == false){
        removeTitles(); //Runs the clear function if there is previously displayed data
    }
    
    const data = new FormData(form);
    let genre = data.get('genres');

    //Creates the API url string based on the genre picked
    let url = `http://openlibrary.org/subjects/${genre}.json`;
    
    //Calls the url and calls the display function
    fetch(url)
        .then((response) => { return response.json() })
        .then(function(data) {
            displayBooks(data.works);
        });
});

// This function displays all of the book titles and authors from the API
// Inputs: An array called "works" from the API
// Outputs: nothing
function displayBooks(x){
    console.log(x);
    empty = false;

    for(let i=0; i< x.length; i++){
        let p = document.createElement("p")
        p.innerText = `${x[i].title} by ${x[i].authors[0].name}`;

        titles.append(p);
    }

}

// This function removes all elements in the display div. Essentially resets the display
// This is usful if the display function has already been called. 
function removeTitles(){
    console.log(titles.childNodes);
    while (titles.firstChild){
        titles.removeChild(titles.firstChild);
    }
    console.log(titles);
    empty = true;
}