let arr=[1,2,3]
let n=prompt("enter the number :")
n=Number.parseInt(n)
arr.push(n)
console.log(arr)
console.log(arr.concat(n))



let arr1=[1,2,3,4,5]
let a;
do{
    a=prompt("enter the numebr")
    a=Number.parseInt(a)
    arr1.push(a)
}while(a!=0);
console.log(arr1)




let arr2=[10,29,389,40]
let a2=arr2.filter((x)=>{
    return x%10==0
})
console.log(a2)




let arr3=[2,43,545,664,10]
let a3=arr3.map((x)=>{
    return x*x
})
console.log(a3)



let arr4=[1,2,3,4,5,6,7]
let a4=arr4.reduce((x1,x2)=>{
    return x1*x2
})
console.log(a4)