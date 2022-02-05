const savedImg = document.createElement("img");

const im0g = ["1.jpg", "2.jpg", "3.jpg", "4.png"];

const imgs = im0g[Math.floor(Math.random() * im0g.length)];

savedImg.classList.add("back");

savedImg.src = `img/${imgs}`;

document.body.prepend(savedImg);
