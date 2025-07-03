
// function sum(a, b){
    // console.log(a+b);
// }
// 
// function calculator(a, b, sumCallbck){
    // sumCallbck(a, b);
// }
// 
// calculator(1, 2, sum);

//a function(eg. sum) which is passed as an argument in another function- that function is called callback functionz











// const URL = "https://alexwohlbruck.github.io/cat-facts/";
const URL = "https://catfact.ninja/facts?limit=5";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn") ;


const getFacts = async () => {
    console.log("getting data...")
    let response = await fetch(URL);
    console.log(response); //JSON Format
    console.log(response.status);
    let data = await response.json();
    factPara.innerText = data.data[4].fact;
};
// getFacts()


//AONTHER METHOD

// function getFacts(){
//     fetch(URL).then((response) =>{
//         return response.json();
//     }).then((data) =>{
//         console.log(data);
//         factPara.innerText = data.data[3].fact;
//     })
// }

btn.addEventListener("click",getFacts);