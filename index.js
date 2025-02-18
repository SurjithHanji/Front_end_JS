let num=[2,34,56,1]
for(let i=0;i<num.length;i++){
    console.log(num[i])
}

num.forEach((element)=>{
    console.log(element*element)
})

let name="harry"
let arr=Array.from(name)
console.log(arr)


for(let i of num){
    console.log(i)
}

for(let i in num){
    console.log(i)
}