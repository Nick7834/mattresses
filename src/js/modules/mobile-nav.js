// fixed header 

const header = document.querySelector('.header__top');
const catalogA = document.querySelector('.catalog');
const menuHeader = document.querySelector('.menu')

window.addEventListener('scroll', () => {
    let scrollsY = window.scrollY;

    if (scrollsY >= 95) {
        header.classList.add('fixed');
        catalogA.classList.add('acriveC');
		menuHeader.style.marginTop = '95.4px';
    } else {
        header.classList.remove('fixed');
        catalogA.classList.remove('acriveC');
		menuHeader.style.marginTop = 0;
    }
});

// catalog open/close

const buttonCatalog = document.querySelector('.menu__catalog');
const closeCatalog = document.querySelector('.catalog__close')

buttonCatalog.addEventListener('click', () => {
	catalogA.classList.add('activeK');
});

closeCatalog.addEventListener('click', () => {
    catalogA.classList.remove('activeK');
});

document.addEventListener('click', (e) => {
	if(!e.target.closest('.catalog') && !e.target.closest('.menu__catalog')) {
		catalogA.classList.remove('activeK');
	}
});

// active button catalog

const buttonCatalogList = document.querySelectorAll('.catalog__li');

function showCatalog() {
    buttonCatalogList.forEach(el => {
        el.classList.remove('activeM');
        this.classList.add('activeM');
    });
}

buttonCatalogList.forEach(e => {
    e.addEventListener('mouseover', showCatalog);
    e.addEventListener('mouseout', showCatalog);
});
