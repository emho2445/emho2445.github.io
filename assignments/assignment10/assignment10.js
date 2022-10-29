//Problem 1 and 2

let json = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
        "firstName": "Sam",
        "department": "tech",
        "designation": "manager",
        "salary": 40000,
        "raise eligible": true
      },
      {
        "firstName": "Mary",
        "department": "finance",
        "designation": "trainee",
        "salary": 18500,
        "raise eligible": true
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "executive",
        "salary": 21200,
        "raise eligible": false
      }
    ]
};

console.log(json); 

//Problem 3

const newemployee = {
    "firstName": "Anna",
    "department": "tech",
    "designation": "executive",
    "salary": 25600,
    "raise eligible": false
};

json["employees"].push(newemployee);  

console.log(json); //print updated JSON to console for #3

//Problem 4

totalSalary = 0;
  
for (let i = 0; i < 4; i++) { //this iterates through employee salaries, how can you use this to find the total salary for #4?
    console.log(json["employees"][i].salary);
    totalSalary += json["employees"][i].salary;
}

console.log('Total Salary: ', totalSalary );

//Problem 5

for (let i = 0; i < 4; i++){
    if(json["employees"][i]["raise eligible"]==true){
        json["employees"][i].salary = json["employees"][i].salary + json["employees"][i].salary*0.1;
        json["employees"][i]["raise eligible"] = false;
        console.log('Raise! ',json["employees"][i].salary);
    } else{
        console.log('No Raise. ',json["employees"][i].salary);
    }

}

//Problem 6


const homeStatus = ['Anna', 'Sam'];

for (let i = 0; i < 4; i++){

    if(json.employees[i].firstName == homeStatus[0] || json.employees[i].firstName == homeStatus[1]){
        Object.assign(json.employees[i], {
            wfh: true
        });
    }else{
        Object.assign(json.employees[i], {
            wfh: false
        });
    }

}

