const modalbtn= document.querySelector(".openmodal");
const modal=document.querySelector('form');
const modalclosed= document.getElementById("closemodal");
function close(){
    modal.style.display='none';
}
function open() {
    modal.style.display='flex';
}
modalclosed.addEventListener('click', close );
modalbtn.addEventListener('click', open );