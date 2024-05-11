
let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts(){
    const para = document.getElementById('prods')
    productString = ''
    for (prod of products){
        console.log(prod)
        productString = productString + `${prod["name"]}: ${prod["price"]} - ${prod["description"]}\n`
    }
    para.innerText = `${productString}`
}

function handleSubmit(event){
    event.preventDefault();
    let user = {
        username: event.target.elements.username.value,
        email: event.target.elements.email.value,
        message: event.target.elements.message.value,
    }
    console.log(user)
}

function style1(){
    const div = document.getElementById('prods')
    div.style["background-color"] = "red"
}

function style2(){
    const div = document.getElementById('submit')
    div.style["border"] = "solid blue"
}

function style3(){
    const div = document.getElementById('hidden')
    div.style["color"] = "green"
    div.style["background-color"] = "whitesmoke"
    div.style["border"] = "solid green"


}

function style4(){
    const div = document.getElementById('hidden')
    let mar = div.style["margin-left"]
    mar = mar.slice(0,-2)
    mar = parseInt(mar)
    mar += 200
    mar = mar += 'px'
    div.style["margin-left"] = mar
}

function style5(){
    const div = document.getElementById('box')
    div.style["width"] = "500px"
    div.style["margin"] = "20px"


}
