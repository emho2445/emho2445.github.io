// get elements //
var nums = document.getElementsByClassName("num");
var radioContainer = document.getElementById("radiocontainer");
var phoneNumber = document.getElementById("phonenumber");
var phoneNumberValue = "";

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
  phoneNumber.innerText = "(";
  for (var i=0;i<3;i++) {
    if (phoneNumberValue.charAt(i)!="") {
      phoneNumber.innerText += phoneNumberValue.charAt(i);
    } else {
      phoneNumber.innerText += "_";
    }
  }
  phoneNumber.innerText += ") ";
  for (var i=3;i<6;i++) {
    if (phoneNumberValue.charAt(i)!="") {
      phoneNumber.innerText += phoneNumberValue.charAt(i);
    } else {
      phoneNumber.innerText += "_";
    }
  }
  phoneNumber.innerText += "-";
  for (var i=6;i<10;i++) {
    if (phoneNumberValue.charAt(i)!="") {
      phoneNumber.innerText += phoneNumberValue.charAt(i);
    } else {
      phoneNumber.innerText += "_";
    }
  }
}

function reset() {
  phoneNumberValue = "";
  phoneNumber.innerText = "(___) ___-____";
}

init();