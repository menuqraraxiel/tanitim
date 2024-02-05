// İlk açılışta tüm kategorileri göster
document.addEventListener('DOMContentLoaded', function () {
    showAllCategories();
});

function showAllCategories() {
    var categories = document.querySelectorAll('.menu-category');
    categories.forEach(function (cat) {
        cat.style.display = 'block';
    });
}

function showCategory(category) {
    // Tüm menü kategorilerini gizle
    var categories = document.querySelectorAll('.menu-category');
    categories.forEach(function (cat) {
        cat.style.display = 'none';
    });

    // Belirtilen kategoriyi göster
    var selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }
}
// script.js

document.addEventListener('DOMContentLoaded', function () {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(function (card) {
        card.addEventListener('click', function () {
            const name = card.querySelector('h4').innerText;
            const description = card.querySelector('p').innerText;
            const price = card.querySelector('span strong').innerText;
            const imageSrc = card.querySelector('.product-image img').src;

            showProductInfo(name, description, price, imageSrc);
        });
    });

    const closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            hideProductInfo();
        });
    }
});

function showProductInfo(name, description, price, imageSrc) {
    const popup = document.getElementById('product-popup');
    const popupImage = popup.querySelector('img');
    const popupInfo = popup.querySelector('.product-info');

    popupImage.src = imageSrc;
    popupInfo.innerHTML = `<h4>${name}</h4><p>${description}</p><span><strong>${price}</strong></span>`;

    popup.style.opacity = '0';
    popup.style.display = 'block';
    setTimeout(function () {
        popup.style.opacity = '1';
    }, 50);
}

function hideProductInfo() {
    const popup = document.getElementById('product-popup');
    popup.style.opacity = '0';
    setTimeout(function () {
        popup.style.display = 'none';
    }, 300);
}
