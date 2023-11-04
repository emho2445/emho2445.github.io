import * as d3 from "d3";
//Data from the first accelerometer test
import data from './data/LunaSatAccelerometerTest.csv'
//Data from the second accelerometer test
import dataTwo from './data/LunaSatMultipleDropsVB.csv'
//Data for the drops times for the second accelerometer test
import dropData from './data/MultipleDropTestReleaseTimes.csv'
//Data for the 10% power spacecraft test
import tenPowerData from './data/TenPercentPowerTest.csv'
//Data for the 20% power spacecraft test
import twentyPowerData from './data/TwentyPercentPowerTest.csv'
//Data for the 30% power spacecraft test
import thirtyPowerData from './data/ThirtyPercentPowerTest.csv'


const fieldAccelButton = document.getElementById('fieldTest');

const vbAccelButton = document.getElementById('vbTest');

const tenPercentButton = document.getElementById('tenPercent');

const twentyPercentButton = document.getElementById('twentyPercent');

const thirtyPercentButton = document.getElementById('thirtyPercent');


const dataPoint = {
    time: "",
    x: 0.0,
    y: 0.0,
    z: 0.0
}

const spacecraftDataPoint = {
    x: 0.0,
    y: 0.0,
    flipped: false
}

let plotArea = d3.select("#scatterplot")

console.log(plotArea);

const parseDate = d3.timeParse("%H:%M:%S.%L")

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
    
    return max
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

    return min;
}

function createAccelGraph(data, bool){

    clearDiv(container);

    let dataSet = [];

    let totalDataPoints = 0;

    let maximum = 0;
    let minimum = 0;

    for (const row in data){
        const point = Object.create(dataPoint);
        point.time = parseDate(data[row][0]);
        point.x = +data[row][1];
        point.y = +data[row][2];
        point.z = +data[row][3];
        
        dataSet.push(point);

        let max = findMax(point.x, point.y, point.z);
        if(max > maximum){
            maximum = max;
        }
        
        let min = findMin(point.x, point.y, point.z);
        if(min < minimum){
            minimum = min;
        }

        totalDataPoints ++;
    
    }

    // Declare the chart dimensions and margins.
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 40;
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
        .attr("transform", `translate(0,${height - (marginBottom)})`)
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

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width/2)
        .attr("y", height)
        .text("Time (M s.ss)");

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", marginLeft-30)
        .attr("x", (-height/2)+20)
        .text("Acceleration (g)")

    let dropTimes = [];
    if(bool == true){
        console.log("Before calling create drop times:")
        console.log(dropData)
        dropTimes = createDropTimes(dropData)

        console.log("After calling create drop times:")
        console.log(dropTimes);

        svg.append("g")
            .selectAll("dot")
            .data(dropTimes)
            .enter()
            .append("circle")
                .attr("cx", function(d) { return x(d.time) } )
                .attr("cy", function(d) { return y(d.x) } )
                .attr("r", 5)
                .attr("fill", "#69b3a2")
    }else{
        console.log("no drop times entered")
    }

    

    //dropTimes(dropData, svg);
    // Append the SVG element.
    container.append(svg.node());

}

function createDropTimes(dropData){
    
    let dropSet = [];
    console.log("Entered Creating Drop Times")
    console.log(dropSet);

    for (const row in dropData){
        const point = Object.create(dataPoint);
        point.time = parseDate(dropData[row][0]);
        point.x = +dropData[row][1];
        point.y = 0;
        point.z = 0;
        
        dropSet.push(point);
    }

    console.log(dropSet);
    console.log("Exiting creating drop times")
    
    return dropSet;
}


function createSpacecraftPlot(data){
    clearDiv(plotArea._groups[0][0]);

    let plotPoints = []

    let max = 0.0

    for (const row in data){
        const point = Object.create(spacecraftDataPoint);
        point.x = +data[row][0];
        point.y = +data[row][1];

        if (point.x > max){
            max = point.x
        }
        
        plotPoints.push(point);
    
    }
    
    console.log(max)

    // Declare the chart dimensions and margins.
    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 40;
    const marginLeft = 40;



    // Declare the x (horizontal position) scale.
    const x = d3.scaleLinear()
        .domain([0,max])
        .range([marginLeft, width - marginRight]);
    
    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
        .domain([-20,20])
        .range([height - marginBottom, marginTop]);

    console.log("before SVG container")
    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height);

    console.log("after SVG container")
    // Add the x-axis.
    svg.append("g")
        .attr("transform", `translate(0,190)`)
        .call(d3.axisBottom(x));

    // Add the y-axis.
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y));

    svg.append("g")
        .selectAll("dot")
        .data(plotPoints)
        .enter()
        .append("circle")
            .attr("cx", function(d) { return x(d.x) } )
            .attr("cy", function(d) { return y(d.y) } )
            .attr("r", 5)
            .attr("fill", "#69b3a2")

    svg.append("text")
        .attr("text-anchor", "end")
        .attr("x", width/2 + marginLeft)
        .attr("y", height - 30)
        .text("Distance from Lander (in)");
    
    svg.append("text")
        .attr("text-anchor", "end")
        .attr("transform", "rotate(-90)")
        .attr("y", marginLeft-28)
        .attr("x", (-height/2 + 90))
        .text("Distance from Center Line (in)")

    console.log("before appending")
    // Append the SVG element.
    plotArea._groups[0][0].append(svg.node());
    
    console.log("After appending")
}

function clearDiv(div){
    div.innerHTML = "";
}

function clicked(){
    console.log("clicked the button");
}

createAccelGraph(data, false);

createSpacecraftPlot(tenPowerData);



fieldAccelButton.addEventListener('click', function(){
    createAccelGraph(data, false);
});

vbAccelButton.addEventListener('click', function(){
    createAccelGraph(dataTwo, true);
})

tenPercentButton.addEventListener('click', function(){
    createSpacecraftPlot(tenPowerData);
})

twentyPercentButton.addEventListener('click', function(){
    createSpacecraftPlot(twentyPowerData);
})

thirtyPercentButton.addEventListener('click', function(){
    createSpacecraftPlot(thirtyPowerData);
})
