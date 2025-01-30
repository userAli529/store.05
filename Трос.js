let promotion = [
    {
        name: "Wholesale",
        category: "Winter Blank ",
        price: "3,300 сом",
        image: "img/Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#1'
    },
    {
        name: "Wholesale",
        category: "Winter Blank ",
        price: "3,300 сом",
        image: "img/Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#2'
    },
    {
        name: "Wholesale",
        category: "Winter Blank ",
        price: "3,300 сом",
        image: "img/Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#3'
    },
    {
        name: "Wholesale",
        category: "Winter Blank ",
        price: "3,300 сом",
        image: "img/Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
        link: "https://wa.me/message/LCGVHSKPUUYKD1",
        nome: '#4'
    },
    {
        name: "Wholesale",
        category: "Winter Blank ",
        price: "3,300 сом",
        image: "img/Wholesale Winter Blank Cotton Fleece Hoodie Unisex Zipper Oversize Cotton Custom Hoodie High Quality Cotton Hoodies For Women - Buy Women Winter Blank Cotton Fleece Hoodie Men Casual Oversize Cotton Custom Hoodie H.jpg",
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
        <h2>${product.name}</h2>
        <h2>${product.category}</h2>
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
