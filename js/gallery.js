const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['../../../img/img4.jpg', '../../../img/img1.JPEG', '../../../img/img2.jpeg', '../../../img/img6.JPEG', '../../../img/img13.jpg'];/* Declaring the array of image filenames */

const altText = ['with sister in boat', 'with friends', 'Bid Day', 'With friends at a play', 'Maroon Bells'];/* Declaring the alternative text for each image file */

/* Looping through images */


for (i=0; i<=5; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', images[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e=> {displayedImage.src = e.target.src;});
};

