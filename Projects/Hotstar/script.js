
let movies_div = document.getElementById('movies');

let id;

async function main() {

    try{
        let query = document.getElementById('query').value;
        //console.log(query);
        // we need data from omdb
        
        let url = `http://www.omdbapi.com/?apikey=7cc2c43f&s=${query}`;

        let res = await fetch(url);
        let data = await res.json();
        let actual_data = data.Search;
        if (actual_data != undefined){
            appendMovies(actual_data);
        }
    }catch(err){
        console.log('err', err);
    }

}
//  issue - data is undefined

function appendMovies(data){
    movies_div.innerHTML = null;
    data.forEach(function(el){

        let p = document.createElement('p');
        p.innerText = el.Title;
        movies_div.append(p);
    
    })
}

// debounce

function debounce(func, delay){
    // a -> debounce -> main -> setTimeout('a')
    if(id){
        clearTimeout(id);
    } 

    id = setTimeout(function(){
        func();
    },delay);
}