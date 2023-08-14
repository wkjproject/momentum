const images = ["0.jpg","1.webp","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random()* images.length)];

const bgImage = `/img/${chosenImage}`;

document.body.style.background = `url(${bgImage}) no-repeat center/cover`;