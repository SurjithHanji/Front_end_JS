//problem 1
let obj={harry:90,
    lav:98,
    moni:78
}
for(let i=0;i<Object.keys(obj).length;i++){
    console.log("the marks of "+Object.keys(obj)[i]+"are"+obj[Object.keys(obj)[i]])
}

//problem 2
let marks={harry:90,
    lav:98,
    moni:78
}
for ( let key in marks){
    console.log("the marks of"+key+"are"+marks[key])
}

//problem 3

let cn=45
let i
while(i != cn){
    i = prompt("enter the number:")
    console.log("try again")
}
console.log("you have entered correct number")

//problem 4
 
const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/4
}
console.log(mean(4,5,6,8,7))