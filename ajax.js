'use strict'
let input=new XMLHttpRequest();
// console.log(input);
let url="https://jsonplaceholder.typicode.com/users";
// console.log(url);
    // console.log(input.readyState);

input .onreadystatechange = function () {
    if(input.readyState === 4){
let output=JSON.parse( input.response);
console.log(output)

let rrr=document.getElementById("tbodyy");

let tdcreatefun=function(value){
    let td1=document.createElement("td");
    td1.innerText=value;
    return td1;

}


output.forEach((a,b) => {
    let ttr=document.createElement("tr");
    let ra=[tdcreatefun(b+1)];
    for(let x in a){
        if(x === 'address'){
            let { geo, ...address} = a[x]
            address = Object.values(address);
            geo = Object.values(geo)
            a[x] = address + geo;
        }
        if( x === 'company'){
            a[x] = Object.values(a[x])
        }
        ra.push(tdcreatefun(a[x]));
    }
    ttr.append(...ra)
    rrr.append(ttr)
});

  



};
    
};

input.open("GET",url);
input.send();