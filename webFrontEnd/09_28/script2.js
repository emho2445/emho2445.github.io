const helloString = 'hello world';

const year = 2023;

function printTheYear() {
    document.querySelector("p").innerText += year;
}

export {helloString as hello, year, printTheYear};