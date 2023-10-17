import imageOne from '../../img/img11.jpg';
import imageTwo from '../../img/img12.jpg';
import imageThree from '../../img/img10.JPG';
import imageFour from '../../img/img6.JPEG';



const colorButton = document.getElementById('colorChange'); // Gets the button element

const mainImg = document.getElementById('darkHover'); // Gets the image element

const images = [imageOne, imageTwo, imageThree, imageFour]; //array of image paths
const alts = ['Skiing', 'Disney with Friends', 'Alpha Phi Preference', 'Seeing Play with Friends']; //array of alt descriptions for the images in the images array

// Counts which index in the images and alts array
//let imgCounter = 1; //It is already displaying the 0 index photo so we want it to start at index 1
window.imgCounter = 1

export {colorButton, mainImg, images, alts};