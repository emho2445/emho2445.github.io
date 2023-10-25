import * as d3 from "d3";
import data from './data/LunaSatAccelerometerTest.csv'

console.log(data);

let time = [];
let xVal = [];
let yVal = [];
let zVal = [];

for (const row in data){
    time.push(row[0]);
    xVal.push(row[1]);
    yVal.push(row[2]);
    zVal.push(row[3]);
}

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

// Declare the x (horizontal position) scale.
const x = d3.scaleUtc()
    .domain([new Date("2023-01-01"), new Date("2024-01-01")])
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Append the SVG element.
container.append(svg.node());


//trying to read in data
// const data = d3.csvParse("./data/LunaSatAccelerometerTest.csv", function(data){
//     console.log(data)
// });

// fetch("./data/LunaSatAccelerometerTest.csv")
//     .then(function(string) {
//         parseCSV(string);
// });

// function parseCSV(string){
//     const returnData = d3.csvParse(string, (d) => {
//         return {
//           year: new Date(+d.Year, 0, 1), // lowercase and convert "Year" to Date
//           make: d.Make, // lowercase
//           model: d.Model, // lowercase
//           length: +d.Length // lowercase and convert "Length" to number
//         };
//     });
// }



//console.log(data);
//console.log(data);
//console.log("hello");