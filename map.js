let arr=[45,21,23]
let a=arr.map((value,index,Array)=>{

    console.log(value,index,Array)
})
console.log(a)

//map creates a new array


//filter method

let arr2=[23,45,56,67,90,97,45]
let a2=arr2.filter((value)=>{
    return value>25
})
console.log(a2)


//reduce method in python

let arr3=[43,23,45,656,43,23,43,23]
let a3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(a3)
