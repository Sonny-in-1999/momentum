const images = ["1.jpeg", "2.jpeg", "3.jpeg", 
"4.jpeg", "5.jpeg", "6.jpeg", "7.jpeg", "8.jpeg", "9.jpeg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");
//js에 필요한 tag를 document에서 가져옴

bgImage.src = `img/${chosenImage}`;
console.log(bgImage);

document.body.appendChild(bgImage);
//prepend: 맨 위에 생성, append: 맨 뒤에 생성