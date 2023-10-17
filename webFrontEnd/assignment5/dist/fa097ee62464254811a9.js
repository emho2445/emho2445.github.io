import * as variables from "./script3.js";
import * as funcs from "./script2.js";

variables.colorButton.addEventListener('click', funcs.changeColor);// listens for the click of the button
variables.colorButton.addEventListener('click', funcs.changePhoto); // listens for the click of the button

variables.mainImg.addEventListener('mouseover', funcs.darkenImg); // listens for when the mouse is over the image
variables.mainImg.addEventListener('mouseout', funcs.lightenImg); // listens for when the mouse moves off the image
variables.mainImg.addEventListener('click', funcs.changePhoto); // listens for when the image is clicked
