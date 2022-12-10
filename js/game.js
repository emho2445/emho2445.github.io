// get elements //
var nums = document.getElementsByClassName("num");
var radioContainer = document.getElementById("radiocontainer");
var phoneNumber = document.getElementById("phonenumber");
var phoneNumberValue = "";
var mathEq = document.getElementById("mathEq");
var scorePara = document.getElementById("score");

var eq = ["12-3", "3+3", "2+5", "6-2", "8-8", "1+2", "6-1", "2+7", "3+4", "2+3", "2+4", "2+6", "1+3", "4+1", "1+6", "7+1", "8+1", "3+5", "3+6", "4+4", "4+5", "2-1", "1+0", "3-2", "7-4", "8-3", "9-1", "7-2"];
var sol = [9,6,7,4,0,3,5,9,7,5,6,8,4,5,7,8,9,8,9,8,9,1,1,1,3,5,8,5 ];
var score = 0;
var x;

/*Random number function*/
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}



/* initialize */
function init() {
  for (var i=0;i<nums.length;i++) {
    // set speeds
    nums[i].setAttribute("speedX", Math.random()*4 - 2); 
    nums[i].setAttribute("speedY", Math.random()*4 - 2);
    // set positions
    nums[i].style.top = "128px";
    nums[i].style.left = "128px";
    //
    nums[i].firstChild.addEventListener("click", radioClick);
  }

  x = getRandomInt(0,28);
  mathEq.innerText = eq[x];
  // begin updating //
  update();
}
function update() {
  for (var i=0;i<nums.length;i++) {
    // randomly jostle speedX //
    nums[i].setAttribute("speedX", parseFloat(nums[i].getAttribute("speedX")) + Math.random()*(0.4+phoneNumberValue.length*0.1) - (0.2+phoneNumberValue.length*0.05));
    // set speedX
    nums[i].style.left = Math.floor(parseFloat(nums[i].style.left) + parseFloat(nums[i].getAttribute("speedX"))) + "px";
    
    
    // randomly jostle speedY //
    nums[i].setAttribute("speedY", parseFloat(nums[i].getAttribute("speedY")) + Math.random()*(0.4+phoneNumberValue.length*0.1) - (0.2+phoneNumberValue.length*0.05));
    // set speedY
    nums[i].style.top = Math.floor(parseFloat(nums[i].style.top) + parseFloat(nums[i].getAttribute("speedY"))) + "px";
    
    // bound speeds to [-2,2] //
    if (parseFloat(nums[i].getAttribute("speedX")) > 2+phoneNumberValue.length*0.2) {
      nums[i].setAttribute("speedX", 2+phoneNumberValue.length*0.2);
    }
    if (parseFloat(nums[i].getAttribute("speedY")) > 2+phoneNumberValue.length*0.2) {
      nums[i].setAttribute("speedY", 2+phoneNumberValue.length*0.2);
    }
    if (parseFloat(nums[i].getAttribute("speedX")) < -2-phoneNumberValue.length*0.2) {
      nums[i].setAttribute("speedX", -2-phoneNumberValue.length*0.2);
    }
    if (parseFloat(nums[i].getAttribute("speedY")) < -2-phoneNumberValue.length*0.2) {
      nums[i].setAttribute("speedY", -2-phoneNumberValue.length*0.2);
    }
    
    // bounce off of edges of container //
    if (nums[i].getBoundingClientRect().x <= radioContainer.getBoundingClientRect().x) {
      nums[i].setAttribute("speedX", Math.abs(parseFloat(nums[i].getAttribute("speedX"))) + 1);
    }
    
    if (nums[i].getBoundingClientRect().y <= radioContainer.getBoundingClientRect().y) {
      nums[i].setAttribute("speedY", Math.abs(parseFloat(nums[i].getAttribute("speedY"))) + 1);
    }
    // adding 26 instead of width because the text still wraps
    if (nums[i].getBoundingClientRect().x + 26 >= radioContainer.getBoundingClientRect().x + radioContainer.getBoundingClientRect().width) {
      nums[i].setAttribute("speedX",-Math.abs(parseFloat(nums[i].getAttribute("speedX")))-1);
    }
    if (nums[i].getBoundingClientRect().y+nums[i].getBoundingClientRect().height>=radioContainer.getBoundingClientRect().y+radioContainer.getBoundingClientRect().height) {
      nums[i].setAttribute("speedY",-Math.abs(parseFloat(nums[i].getAttribute("speedY")))-1);
    }
  }
  
  requestAnimationFrame(update);
}

// clicking a button //
function radioClick(e) {
  e.target.checked = false;
  phoneNumberValue += e.target.value;
  phoneNumber.innerText = phoneNumberValue;
}

function reset() {
  phoneNumberValue = "";
  phoneNumber.innerText = "____";
  //score = 0;
}

function submit(){
  console.log(phoneNumberValue);
  console.log(sol[x]);
  if (phoneNumberValue == sol[x]){
    score = score +1;
  } else{
    score = score - 1;
  }
  scorePara.innerText = score;
  console.log(score);
  phoneNumber.innerText = "____"
  x = getRandomInt(0,28);
  mathEq.innerText = eq[x];
  phoneNumberValue = "";

  if(score == 6){
    alert('You WON!!');
    
  }

  if(score == -6){
    alert('You LOST')
    
  }

}

function startOver(){
  phoneNumberValue = "";
  phoneNumber.innerText = "____";
  score = 0;
  scorePara.innerText = 0;
}

init();

