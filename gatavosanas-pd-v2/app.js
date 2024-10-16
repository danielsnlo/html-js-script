console.log("js loaded!");

//  document.querySelector("#box-container");
const boxContainer = document.getElementById('box-container');
const toggleBtn = document.getElementById('toggle-btn');
const toggleColor = document.getElementById('toggle-color');
const toggleDelete = document.getElementById('toggle-delete')


toggleBtn.addEventListener('click', processBtnClick);
toggleColor.addEventListener('click', processColorSwitch);
toggleDelete.addEventListener('click', processDeleteClick)

function processBtnClick(event) {
    //  console.log(event);
    boxContainer.classList.toggle('hidden');
}

function processColorSwitch(event) {
    boxContainer.classList.toggle('color');
}

function processDeleteClick(event) {
    boxContainer.remove();
}