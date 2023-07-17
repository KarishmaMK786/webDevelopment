// fetch("https://reqres.in/api/users?page=2")
// .then(function(res){
//     res.json().then(function(res){
//         console.log(res.data);
//     })

// }) // two promises 
// .catch(function(err){
//     console.log('err', err)
// })
// .finally(function(){
//     console.log("api call done");
// })


// async function makeRequest(){
//     let res = await fetch("https://reqres.in/api/users?page=2")
//     let data = await res.json();
//     console.log(data.data);
// }
// makeRequest();