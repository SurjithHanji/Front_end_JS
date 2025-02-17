let num=[1,2,2,3,4,5,5,6,7,8]
delete num[0]
console.log(num)

let a1=[1,2,3,4,5]
let a2=[8,9,7,4,4]
let ar=a1.concat(a2)
console.log(ar)

//sort method
let num1=[1,2,3443,212,2123,5667]
console.log(num1.sort())

let compare=(a,b)=>{
    return b-a
}
num1.sort(compare)
console.log(num1)


console.log(num1.reverse())


//splice and slice


let n=[12,23,34,56,67,78]
n.splice(2,3,1021,1022,1023)
console.log(n)


n.slice(3)
console.log(n)