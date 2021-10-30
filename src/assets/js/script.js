let burger = document.querySelector('.header-burger')
let header__menu = document.querySelector('.header__menu')
let body = document.querySelector('.body')
burger.addEventListener('click', () => {
	if (burger.classList.contains('active') && header__menu.classList.contains('active') && body.classList.contains('active')) {
		burger.classList.remove('active')
		header__menu.classList.remove('active')
		body.classList.remove('active')
	} else {
		burger.classList.add('active')
		header__menu.classList.add('active')
		body.classList.add('active')

	}
})


let select = document.querySelector('.new-select')

select.addEventListener("DOMSubtreeModified", function () {
	if (select.textContent === 'Хабаровск') {
		document.getElementById("header-tel").innerHTML = "+7 924 300-11-17"
	}
	if (select.textContent === 'Комсомольск-на-Амуре') {
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
	if (select.textContent === 'Артём') {
		document.getElementById("header-tel").innerHTML = "+7 902 075-24-24"
	}
});
