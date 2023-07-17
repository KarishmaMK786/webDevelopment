// fetch is going to take time
// it should not block other code
// fetch needs to be a promise
// this is async call

// .then & .catch
// async await


// i want to make an API call

// let x = fetch();
// console.log('x:', x);

// prototype (fetch) is a tool
//Inheritence is a tool or is it a concept

// Inheritence is js is implemented using prototype
//  API is used using a tool called fetch()



// fetch('https://fakestoreapi.com/products')
// .then(function(res){
//     return res.json(); // json() ===> collect()  1) Collecting the stream
//     // it will give the data in form stream
// })
//   .then(function (res) {
//     console.log('res:', res);
//   })
//   .catch(function(err) {
//     console.log('err:', err);
//   });



//  Converting above code into async await

// async function getData() {
//     let url = "https://fakestoreapi.com/products";

//     let prom = await fetch(url);
//     let data = await prom.json();
//     console.log(data);
    
// }
// getData()


let container = document.getElementById('container');


let data;
async function getData() {
    try{
        let url = "https://fakestoreapi.com/products";

        let prom = await fetch(url);
        data = await prom.json();
        appendProducts(data);
    }catch(err) {
        console.log('err:', err);
    }
    
}
getData();

function appendProducts(data) {

    // data - array of object
    container.innerHTML = "";
    data.forEach(function(el){

        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = el.image;
        let title = document.createElement('p');
        title.innerText = el.title;
        let price = document.createElement('p');
        price.innerText = "price:" + el.price;


        div.append(img, title, price);

        container.append(div);
    })
}

function sortLH() {

    data = data.sort(function(a,b){
    return a.price-b.price;
    });

    appendProducts(data)

}

function sortHL() {

    data = data.sort(function(a,b){
    return b.price- a.price;
    });

    appendProducts(data)

}

// how to keep original data?
// dynamic filtering

function filter() {
    let query = document.getElementById('query').value;
   
    let copy_data = data;

    copy_data = copy_data.filter(function (el){
        return el.title.toLowerCase().includes(query);
    })
    appendProducts(copy_data);

}


// create a copy of array which does not change original array
// let copy_data = [...data]  ---> spread operator

//  map and filter returns a new array without affecting old array