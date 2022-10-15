
let row1Left = document.getElementById("row1-left-products");
let row1Right = document.getElementById("row1-right-products");
let row2_products = document.getElementById("row2-products");
let row3_products = document.getElementById("row3-products");

let basket = JSON.parse(localStorage.getItem("cartItems")) || [];


let row1Left_Shop = () => {

    return (row1Left.innerHTML = storeItems[0].map((x) => {
        let {id, name, price, img} = x;
        ifExists = basket.find((x) => x.id === id) || [];
        return `
        <div id = product-id-${id} class = "row1-left-items-container product">
        <div class="each-item-full-container"><img class = "product-img" src=${img} alt="">
            <div class="add-to-cart-more">
            <div onclick = "addToCart(${id})" class="add-to-cart" id = "${id}">      
                <i class="fa-solid fa-cart-plus add-item-to-cart"></i>
                </div>
                <div class="more">
                <i class = "fa-solid fa-info"></i>
                </div>
            </div>
        </div>
        <div class="name-price">
            <p class="item-name">${name}</p><span class = "item-price">$${price}</span> 
        </div>
    </div>
        `
    }).join(""))
}

let row1Right_Shop = () => {
    return (row1Right.innerHTML = storeItems[1].map((x) => {
        let {id, name, price, img} = x
        return `
        <div class="row1-right-each-items-container product" id = product-id-${id}>
                <div class="row1-right-item-info-container"><img class = "product-img" src=${img} alt="">
                <div class="add-to-cart-more">
                    <div class="add-to-cart" onclick = "addToCart(${id})" id = "${id}">
                    <i class="fa-solid fa-cart-plus add-item-to-cart"></i>
                    </div>
                    <div class="more">
                    <i class = "fa-solid fa-info"></i>
                    </div>
                </div>
                </div>  
                <div class="name-price">
                <p  class="item-name">${name}</p><span class="item-price">$${price}</span>
                </div>
            </div>
        `
    }).join(""))
}


let row2_Shop = () => {
    return (row2_products.innerHTML = storeItems[2].map((x) => {
        let {id, name, price, img} = x
        return  `
        <div class="row2-each-item-container product" id = product-id-${id}>
            <div class = "row2-each-item-information-container">
            <img class = "product-img" src=${img} alt="">
            <div class="add-to-cart-more">
                <div class="add-to-cart" onclick = "addToCart(${id})" id = "${id}">
                <i class="fa-solid fa-cart-plus add-item-to-cart"></i>
                </div>
                <div class="more">
                <i class = "fa-solid fa-info"></i>
                </div>
            </div>
            </div>
            <div class="price-name">
                <p class="item-name">${name}</p>
                <p class="item-price">$ ${price}</p>
            </div>
        </div>
        `
    }).join(""))
}


let row3_Shop = () => {
    return (row3_products.innerHTML = storeItems[3].map((x) => {
        let {id, name, price, img} = x
        return  `
        <div class="row3-items-container product" id = product-id-${id}>
            <div class="row3-item-information-container">
            <img class = "product-img" src=${img} alt="">
            <div class="add-to-cart-more">
                <div class="add-to-cart" onclick = "addToCart(${id})" id = "${id}">
                <i class="fa-solid fa-cart-plus add-item-to-cart"></i>
                </div>
                <div class="more">
                <i class = "fa-solid fa-info"></i>
                </div>
            </div>
            </div>
            <div class="name-price">
            <p class="item-name">${name}</p><span class="item-price">$${price}</span>
            </div>
        </div>
        `
    }).join(""));
}

row1Left_Shop();
row1Right_Shop();
row2_Shop();
row3_Shop();



let addToCart = (id) => {
    selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
            msg:"In cart"
        });
        let msgParent = document.getElementById(selectedItem.id);
        let msg = document.createElement('div');
        msgParent.append(msg);
        msg.innerHTML = '<h4 class = "in-cart">In cart</h4>';
        msgParent.style.pointerEvents = 'none';
    }     
    else if(ifExists) {
        let msgParent = document.getElementById(selectedItem.id);
        let msg = document.createElement('div');
        msgParent.append(msg);
        msg.innerHTML = '<h4 class = "in-cart">In cart</h4>';
        msgParent.style.pointerEvents = 'none';

    }

    updateCartQuantity()
    localStorage.setItem("cartItems", JSON.stringify(basket));
}


let updateCartQuantity = () => {
    let noOfItemsInCart = document.getElementById('cart-items-no');
    noOfItemsInCart.innerHTML = basket.map((x) => x.item).reduce((x,y)=> x + y, 0)
}
updateCartQuantity();


