function add(a,b){
    return a+b;
}
let result;
for(let i=0;i<1000000000;i++){
    result = add(i,i+1);
}
console.log(result);