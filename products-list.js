//  через атрибут onclick
function toggleFilterAttr(id) {
    const el = document.getElementById(id);
    el.classList.toggle('show');
}

//  через властивість елемента
const priceBtn = document.querySelector("#price-button");
priceBtn.onclick = function () {
    toggleFilterAttr('price-options');
};

//  з кількома обробниками
const brandBtn = document.querySelector("#brand-button");

function handler1() {
    toggleFilterAttr('brand-options');
    console.log('Handler 1 — відкриття фільтра бренду');
}
function handler2() {

    console.log('Handler 2 — переключено фільтр');
}

brandBtn.addEventListener('click', handler1);
brandBtn.addEventListener('click', handler2);



// handleEvent + event.currentTarget
const colorBtn = document.querySelector('button[onclick*="color-options"]');
const filterHandler = {
    handleEvent(event) {
        console.log('Натиснуто на: ' + event.currentTarget);
    }
};
colorBtn.addEventListener('click', filterHandler);



// removeEventListener
setTimeout(() => {
    brandBtn.removeEventListener('click', handler2);
    console.log('Handler 2 видалено');
}, 10000);



//  підсвічування
document.getElementById('color-options').onclick = function (event) {
    if (event.target.tagName === 'INPUT') {
        event.target.parentElement.classList.toggle('highlighted');
    }
};


//  меню
document.querySelector('.theme-menu').addEventListener('click', function (event) {
    const button = event.target.closest('[data-theme]');
    if (!button) return;

    const selectedTheme = button.dataset.theme;
    document.body.classList.remove('theme-light', 'theme-dark', 'theme-contrast');
    document.body.classList.add(`theme-${selectedTheme}`);
});




//  data-behavior
document.querySelector('.product_wrapper')?.addEventListener('click', function (event) {
    const action = event.target.closest('button')?.dataset.action;
    if (!action) return;

    const product = event.target.closest('.product');
    const name = product.querySelector('.name')?.textContent.trim();

    if (action === 'like') {
        const li = document.createElement('li');
        li.textContent = name;
        document.getElementById('likes-list').appendChild(li);
    } else if (action === 'addToCart') {
        const li = document.createElement('li');
        li.textContent = name;
        document.getElementById('cart-list').appendChild(li);
    }
});
document.querySelector('.header-buttons')?.addEventListener('click', function (event) {
    const button = event.target.closest('button');
    if (!button) return;

    const behavior = button.dataset.behavior;

    if (behavior === 'showLikes') {
        document.getElementById('likes-list')?.classList.toggle('visible');
    } else if (behavior === 'showCart') {
        document.getElementById('cart-list')?.classList.toggle('visible');
    }
});
