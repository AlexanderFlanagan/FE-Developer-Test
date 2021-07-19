// JavaScript Document
const text = document.querySelector('.mainText');
const readMoreBtn  = document.querySelector('.read_more_btn');

readMoreBtn.addEventListener('click',(e)=>{
	text.classList.toggle('show_more');
	if(readMoreBtn.innerText ==='Read More'){
		readMoreBtn.innerText = 'Raed Less';
	}else{
		readMoreBtn.innerText = 'Read More';
	}
})

