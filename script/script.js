const elemetsP = document.getElementsByClassName('hvr-wobble-horizontal');


function changeColorBlack(event) {
    event.target.style.color = 'black';
}

function changeColorToBefore(event) {
  event.target.style.color = '#909090';
}

for (let index = 0; index < elemetsP.length; index += 1) {
    elemetsP[index].addEventListener('mouseover', changeColorBlack)
    elemetsP[index].addEventListener('mouseout', changeColorToBefore)
}

window.onload = function() {
}