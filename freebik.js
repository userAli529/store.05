let promotion = [
    {
        name: "Ethereum",
        category: "Cryptocurrency",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#1'
    },
    {
        name: "Ethereum",
        category: "Cryptocurrency",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#2'
    },
    {
        name: "Ethereum",
        category: "Cryptocurrency",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#3'
    },
    {
        name: "Ethereum",
        category: "Cryptocurrency",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#4'
    },
    {
        name: "Ethereum",
        category: "Cryptocurrency",
        price: "1,300 сом",
        image: "img/photo_2025-01-24_21-02-47.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#5'
    },

];

const productList = document.getElementById('product-card__wrapper2');

// Функция для создания карточки товара
function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    let nomeText = product.nome ? `<p>${product.nome}</p>` : '';
   

    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.category}</h2>
        <h2>${product.name}</h2>
        ${nomeText}
        <h1>${product.price}</h1>
        <a href="${product.link}">
            <button class="button">Заказать 🛒</button>
        </a>
    `;

    productList.appendChild(productCard);
}


function searchProduct(query) {
    const filteredProducts = promotion.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
    return filteredProducts;
}




const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (e) => {
    const query = e.target.value;
    const foundProducts = searchProduct(query);


    productList.innerHTML = '';
 
    foundProducts.forEach(createProductCard);
});


promotion.forEach(createProductCard);
