const buttonTea = document.querySelector('.menu-buttons .button:nth-child(2)')
const buttonCoffee = document.querySelector('.menu-buttons .button:nth-child(1)')
const buttonDessert = document.querySelector('.menu-buttons .button:nth-child(3)')
const coffee_products = document.querySelector('.coffee-products')



const content = [{
        img: './img/irish-coffee.jpg',
        h3: 'Irish coffee',
        description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
        price: '$7.00',
        category: 'coffee'
    },
    {
        img: './img/kahlua.jpg',
        h3: 'Kahlua coffee',
        description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
        price: '$7.00',
        category: 'coffee'
    },
    {
        img: './img/honey-raf.jpg',
        h3: 'Honey raf',
        description: 'Espresso with frothed milk, cream and aromatic honey',
        price: '$5.50',
        category: 'coffee'
    },
    {
        img: './img/ice.jpg',
        h3: 'Ice cappuccino',
        description: 'Cappuccino with soft thick foam in summer version with ice',
        price: '$5.00',
        category: 'coffee'
    },
    {
        img: './img/espresso.jpg',
        h3: 'Espresso',
        description: 'Classic black coffee',
        price: '$4.50',
        category: 'coffee'
    },
    {
        img: './img/latte.jpg',
        h3: 'Latte',
        description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
        price: '$5.50',
        category: 'coffee'
    },
    {
        img: './img/macchiato.jpg',
        h3: 'Latte macchiato',
        description: 'Espresso with frothed milk and chocolate',
        price: '$5.50',
        category: 'coffee'
    }, {
        img: './img/cognac.jpg',
        h3: 'Coffee with cognac',
        description: 'Fragrant black coffee with cognac and whipped cream',
        price: '$6.50',
        category: 'coffee'
    },
    {
        img: './img/tea-1-moroccan.jpg',
        h3: 'Moroccan',
        description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
        price: '$4.50',
        category: 'tea'
    },
    {
        img: './img/tea-2-ginger.jpg',
        h3: 'Ginger',
        description: 'Original black tea with fresh ginger, lemon and honey',
        price: '$5.00',
        category: 'tea'
    },
    {
        img: './img/tea-3-cranberry.jpg',
        h3: 'Cranberry',
        description: 'Invigorating black tea with cranberry and honey',
        price: '$5.00',
        category: 'tea'
    },
    {
        img: './img/tea-4-sea_buckthorn.jpg',
        h3: 'Sea buckthorn',
        description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
        price: '$5.50',
        category: 'tea'
    },
    {
        img: './img/dessert-1-cheesecake.jpg',
        h3: 'Marble cheesecake',
        description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
        price: '$3.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-2-red_velvet.jpg',
        h3: 'Red velvet',
        description: 'Layer cake with cream cheese frosting',
        price: '$4.00',
        category: 'dessert'
    },
    {
        img: './img/dessert-3-cheesecakes.jpg',
        h3: 'Cheesecakes',
        description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
        price: '$4.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-4-creme_brulee.jpg',
        h3: 'Creme brulee',
        description: 'Delicate creamy dessert in a caramel basket with wild berries',
        price: '$4.00',
        category: 'dessert'
    },
    {
        img: './img/dessert-5- pancakes.jpg',
        h3: 'Pancakes',
        description: 'Tender pancakes with strawberry jam and fresh strawberries',
        price: '$4.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-6-honey_cake.jpg',
        h3: 'Honey cake',
        description: 'Classic honey cake with delicate custard',
        price: '$4.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-7-chocolate_cake.jpg',
        h3: 'Chocolate cake',
        description: 'Cake with hot chocolate filling and nuts with dried apricots',
        price: '$5.50',
        category: 'dessert'
    },
    {
        img: './img/dessert-8-black_forest.jpg',
        h3: 'Black forest',
        description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
        price: '$6.50',
        category: 'dessert'
    },

]

const func = (str) => {
    coffee_products.innerHTML = ''
    const res = content.filter(el => el.category === str)
    res.forEach(el => {
        const item_product = document.createElement('div')
        item_product.className = 'item-product'
        item_product.innerHTML = `<div class="img-wrapper">
                        <img src="${el.img}" alt="">
                    </div>
                    <div class="content">
                        <div class="description">
                            <h3>${el.h3}</h3>
                            <p>${el.description}</p>
                        </div>
                        <p class="price">${el.price}</p>
                    </div>`
        coffee_products.appendChild(item_product)
    })
}

func('coffee')

buttonTea.addEventListener('click', () => {
    func('tea')
})

buttonCoffee.addEventListener('click', () => {
    func('coffee')
})

buttonDessert.addEventListener('click', () => {
    func('dessert')
})

// const btnClose = document.querySelector('.modal .button-close')
const arrItem = document.querySelectorAll('.item-product')
const modal = document.querySelector('.modal')
const h2 = document.querySelector('.modal h2')
const about = document.querySelector('.about')

let flag = false;


coffee_products.addEventListener('click', (e) => {
    modal.style = 'display: flex'
    const background_style = document.querySelector('.background');
    background_style.style = 'position: fixed; width: 100%; height: 100%; background-color: #403F3D; opacity: 0.7; z-index: 10; top: 0; left: 0'
    let blockParent = e.target.closest('.item-product');
    const title = blockParent.querySelector('.description h3').textContent
    const description = blockParent.querySelector('.description p').textContent
    const img = blockParent.querySelector('.img-wrapper img').src
    const price = blockParent.querySelector('.price').textContent
    modal.innerHTML = `<div class="modal-img">
                <img src="${img}" alt="">
            </div>
            <div class="modal-text">
                <div class="description-text">
                    <h2>${title}</h2>
                    <p class="about">${description}</p>
                </div>

                <div class="option">
                    <p class="text-of-option">Size</p>
                    <div class="buttons-row">
                        <div class="button">
                            <div class="wrapper">
                                <p>S</p>
                            </div>
                            <p>200 ml</p>
                        </div>

                        <div class="button">
                            <div class="wrapper">
                                <p>M</p>
                            </div>
                            <p>300 ml</p>
                        </div>

                        <div class="button">
                            <div class="wrapper">
                                <p>L</p>
                            </div>
                            <p>400 ml</p>
                        </div>
                    </div>
                </div>

                <div class="option">
                    <p class="text-of-option">Additives</p>
                    <div class="buttons-row">
                        <div class="button">
                            <div class="wrapper">
                                <p>1</p>
                            </div>
                            <p>Sugar</p>
                        </div>

                        <div class="button">
                            <div class="wrapper">
                                <p>2</p>
                            </div>
                            <p>Cinnamon</p>
                        </div>

                        <div class="button">
                            <div class="wrapper">
                                <p>3</p>
                            </div>
                            <p>Syrup</p>
                        </div>
                    </div>
                </div>

                <div class="total">
                    <p>Total:</p>
                    <p class="total-price">${price}</p>
                </div>

                <div class="remark">
                    <div class="remark-icon">
                        <div></div>
                    </div>
                    <p>The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.</p>
                </div>
                <div class="button-close">
                    <p>Close</p>
                </div>
            </div>`
    document.querySelector('.button-close').addEventListener('click', () => {
        modal.style = 'display: none'
        background_style.style = 'display: none'
    })
})