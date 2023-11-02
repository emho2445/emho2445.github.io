import * as d3 from "d3";
import data from './data/LunaSatAccelerometerTest.csv'

const dataPoint = {
    time: "",
    x: 0.0,
    y: 0.0,
    z: 0.0
}

// console.log(data);

const parseDate = d3.timeParse("%H:%M:%S.%L")

let dataSet = [];

let totalDataPoints = 0;

let maximum = 0;
let minimum = 0;

function findMax(x, y, z){
    let max = 0;
    if(x > y && x > z){
        max = x;
    }else if(y > x && y > z){
        max = y;
    }else if(z > x && z > y){
        max = z;
    }else{
        // console.log("No max")
    }

    if(max > maximum){
        maximum = max;
        // console.log("New Max Value")
        // console.log(maximum)
        // console.log(max)
    }

}

function findMin(x, y, z){
    let min = 0;
    if(x < y && x < z){
        min = x;
    }else if(y < x && y < z){
        min = y;
    }else if(z < x && z < y){
        min = z;
    }else{
        // console.log("No min")
    }

    if(min < minimum){
        minimum = min;
        // console.log("New Min Value");
        // console.log(minimum);
        // console.log(min);
    }

}


for (const row in data){
        const point = Object.create(dataPoint);
        point.time = parseDate(data[row][0]);
        point.x = +data[row][1];
        point.y = +data[row][2];
        point.z = +data[row][3];
        
        dataSet.push(point);

        findMax(point.x, point.y, point.z);
        findMin(point.x, point.y, point.z);

    totalDataPoints ++;
    
}
console.log("a");
console.log(dataSet);

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;



// Declare the x (horizontal position) scale.
const x = d3.scaleTime()
    .domain(d3.extent(dataSet, d => d.time))
    .range([marginLeft, width - marginRight]);

// Declare the y (vertical position) scale.
const y = d3.scaleLinear()
    .domain([minimum, maximum])
    .range([height - marginBottom, marginTop]);

// Create the SVG container.
const svg = d3.create("svg")
    .attr("width", width)
    .attr("height", height);

// Add the x-axis.
svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(d3.axisBottom(x)
        .tickFormat(d3.timeFormat("%M %S.%L")));

// Add the y-axis.
svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y));

// Add the line
const lineOne = d3.line()
    .x(d => x(d.time))
    .y(d => y(d.x));

const lineTwo = d3.line()
    .x(d => x(d.time))
    .y(d => y(d.y));

const lineThree = d3.line()
    .x(d => x(d.time))
    .y(d => y(d.z))

svg.append("path")
    .datum(dataSet)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1)
    .attr("d", lineOne)

svg.append("path")
    .datum(dataSet)
    .attr("fill", "none")
    .attr("stroke", "#ed09b0")
    .attr("stroke-width", 1)
    .attr("d", lineTwo)

svg.append("path")
    .datum(dataSet)
    .attr("fill", "none")
    .attr("stroke", "#ed9209")
    .attr("stroke-width", 1)
    .attr("d", lineThree)

// Append the SVG element.
container.append(svg.node());

function createAccelGraph(){
    
}
