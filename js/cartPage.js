let label = document.getElementById("label");
let productRows = document.getElementById("product-rows");


let basket = JSON.parse(localStorage.getItem("cartItems")) || [];
let updateCartQuantity = () => {
    let noOfItemsInCart = document.getElementById("cart-items-no");
    noOfItemsInCart.innerHTML = basket
        .map((x) => x.item)
        .reduce((x, y) => x + y, 0);
};
updateCartQuantity();

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (productRows.innerHTML = basket
            .map((x) => {
                let { id, item } = x;
                let search =
                    storeItems[0].find((y) => y.id === id) ||
                    storeItems[1].find((y) => y.id === id) ||
                    storeItems[2].find((y) => y.id === id) ||
                    storeItems[3].find((y) => y.id === id) ||
                    [];
                let {img, name, price} = search;
                return `
            <div class="product-row">
            <div class="item-info">
                <div class="item-img-container">
                    <img src="${img}" alt="img" class = "item-img">
                </div>
                <div class="item-name-item-price">
                    <p class = "item-name">${name}</p>
                    <p class="item-price">$${price}</p>
                </div>
            </div>
            <div class="quantity">
                <i onclick = "decrement(${id})" class="fa-solid fa-minus"></i>
                <div class="no-of-quantity" id = "${id}">${item}</div>
                <i onclick = "increment(${id})" class="fa-solid fa-plus"></i>
            </div>
            <div class="item-price-sum">
                <h5>$ ${item * search.price}</h5>
            </div>
            <div onclick = "removeItem(${id})" type="button" class="remove-item">
                <i class="fa-solid fa-times"></i>
            </div>
        </div>
            `;
            })
            .join(""));
    } else {
        productRows.innerHTML = ``;
        label.innerHTML = `
        <h2 class = "cart-empty">Cart is Empty</h2>
        <a href = "../html/index.html">
            <button class = "homeBtn">Back to home </button>
        </a>
        `;
    }
};

generateCartItems();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    update(selectedItem.id);
    generateCartItems()
    localStorage.setItem("cartItems", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) return;
    else if (search.item === 1) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
    generateCartItems()
    localStorage.setItem("cartItems", JSON.stringify(basket));
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    totalAmount()
};

let calculation = () => {
    let noOfItemsInCart = document.getElementById("cart-items-no");
    noOfItemsInCart.innerHTML = basket
        .map((x) => x.item)
        .reduce((x, y) => x + y, 0);
};
calculation();

let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x)=> x.id !== selectedItem.id);
    generateCartItems();
    calculation();
    totalAmount();
    localStorage.setItem("cartItems", JSON.stringify(basket));
};

let clearCart = () => {
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("cartItems", JSON.stringify(basket));
}

let purchaseItems = () => {
    basket = [];
    generateCartItems();
    calculation();
    localStorage.setItem("cartItems", JSON.stringify(basket));
    label.innerHTML = `<h1>Thanks for purchasing our items, God bless you </h1>
    <a href = "../html/index.html">
    <button class = "homeBtn">Back to home </button>
</a>
    `;
}

let totalAmount = () => {
    if(basket.length !== 0) {
        let amount = basket.map((x) => {
            let {item, id} = x;
            let search =
            storeItems[0].find((y) => y.id === id) ||
            storeItems[1].find((y) => y.id === id) ||
            storeItems[2].find((y) => y.id === id) ||
            storeItems[3].find((y) => y.id === id) ||
            [];
            return item * search.price;
        }).reduce((x,y) => x + y, 0)
        label.innerHTML = ` <div class="total">
        <h2>Total:</h2>
        <span class="total-price">${amount}</span>
    </div>

    <div class="purchase-items-or-back-to-home">
        <div class="back-to-home">
            <i class="fa-solid fa-arrow-left-long"></i>
            <a href="index.html"class="home">Continue Shopping</a>
        </div>
        <div class="purchase-items" onclick = "purchaseItems()">
            <button type = "button">Purchase</button>
            <i class="fa-solid fa-shopping-basket"></i>
        </div>
        <div class="clear-items" onclick = "clearCart()">
            <button type = "button">Clear Cart</button>
            <i class="fa-solid fa-times"></i>
        </div>
    </div>`
    }
    else return
}

totalAmount()
