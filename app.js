console.log('Hello')

const svgElements = [
    './assets/image2vector.svg',
    './assets/image2vector (1).svg',
    './assets/image2vector (2).svg',
    './assets/image2vector (3).svg'
];

const changingSVG = document.getElementById('svgElement');

let i = 0;

function changeSVG() {
    changingSVG.src = svgElements[i];
    i = (i + 1) % svgElements.length;
}

setInterval(changeSVG, 200);
