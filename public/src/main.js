let shop = document.getElementById("shop")

console.log(shop)


//let basket = []
let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop =() => {

    /*
    return (shop.innerHTML =  `
        <div class="item">
            <img width="220" src="images/img-1.jpg">
            <div class="details">
                <h3>Casual Shirt</h3>
                <p>Marde de saintes fesses de charogne de mosus de sapristi de saint-ciarge.
                <div class="price-quantity">
                    <h2>$ 45</h2>
                    <div class="buttons">
                        <i class="bi bi-dash-lg"></i>
                            <div class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
                </p>
            </div>
        </div>
    `)
    */

    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let { id, name, price, desc, img } = x

            let search= basket.find((x) => x.id === id) || []
        return `
        <div id=product-id-${id} class="item">
            <img width="220" src=${img}>
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">
                                ${search.id === undefined ? 0: search.item}
                            </div>
                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join("")) 
}

generateShop()

let increment = (id)=>{
    let selectedItem = document.getElementById(id) 
    // console.log(selectedItem.id)

    let search = basket.find((x)=> x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1
        })
    } else {
        search.item += 1
    }

    update(selectedItem.id)
    localStorage.setItem("data", JSON.stringify(basket))
}

let decrement = (id)=>{
    let selectedItem = document.getElementById(id) 
    // console.log(selectedItem.id)

    let search = basket.find((x)=> x.id === selectedItem.id)

    if (search === undefined) return
    else if(search.item === 0){
    } else {
        search.item -= 1
    }

    // console.log(basket)
    update(selectedItem.id)

    basket = basket.filter((x)=>x.item !== 0)
    localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id)=>{

    let search = basket.find((x) => x.id === id)
    // console.log(search.id) 

    document.getElementById(id).innerHTML = search.item
    calculation()
}

let calculation = ()=>{
    let cartIcon = document.getElementById("cartAmount")

    // console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y, 0))
    cartIcon.innerHTML = (basket.map((x)=>x.item).reduce((x,y)=>x+y, 0))
}

calculation()