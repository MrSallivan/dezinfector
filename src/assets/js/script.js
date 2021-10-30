let burger = document.querySelector('.header-burger')
let header__menu = document.querySelector('.header__menu')
burger.addEventListener('click', () => {
	if (burger.classList.contains('active') && header__menu.classList.contains('active')) {
		burger.classList.remove('active')
		header__menu.classList.remove('active')
	} else {
		burger.classList.add('active')
		header__menu.classList.add('active')
	}
})

// var myModal = document.getElementById('myModal')
// var myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', function () {
// 	myInput.focus()
// })

let select = document.querySelector('.new-select')
// console.log(select)
// select.addEventListener('onclick', ()=>{
// 	console.log(select)
// })

select.addEventListener("DOMSubtreeModified", function () {
	if (select.textContent === 'Хабаровск') {
		document.getElementById("header-tel").innerHTML = "+7 924 300-11-17"
	}
	if (select.textContent ===  'Комсомольск-на-Амуре') {
		document.getElementById("header-tel").innerHTML = "+7 924 300-11-17"
	}
	if (select.textContent === 'Биробиджан') {
		document.getElementById("header-tel").innerHTML = "+7 924 300-11-17"
	}
	if (select.textContent === 'Владивосток') {
		document.getElementById("header-tel").innerHTML = "+7 902 075-24-24"
	}
	if (select.textContent === 'Уссурийск') {
		document.getElementById("header-tel").innerHTML = "+7 902 075-24-24"
	}
	if (select.textContent ===  'Артём') {
		document.getElementById("header-tel").innerHTML = "+7 902 075-24-24"
	}
});
// document.querySelector('.new-select').addEventListener("MutationObserver", function () {
// 	document.getElementById("header-tel").innerHTML = "555-555"
// });