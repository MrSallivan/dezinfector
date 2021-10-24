let burger = document.querySelector('.header-burger')
let header__menu = document.querySelector('.header__menu')
burger.addEventListener('click', () => {
	if (burger.classList.contains('active')&&header__menu.classList.contains('active')) {
		burger.classList.remove('active')
		header__menu.classList.remove('active')
	} else {
		burger.classList.add('active')
		header__menu.classList.add('active')
	}
})

