
var butnModal = document.querySelector(".cyan");
var modal =document.querySelector(".modalContainer"); 
var btnClose = document.querySelector(".close");

function toggleModal(){
	modal.classList.toggle("show-modal");
}

function windowOnClick(event){
	if (event.target=== modal){
		toggleModal();
	}
}


butnModal.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);