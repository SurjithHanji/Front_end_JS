let name="navin"
for(let i=0; i<name.length;i++){
    console.log(name[i])
}

//strings are immutable

let nam="harry bhai namaste"
console.log(nam.includes("namaste"))
console.log(nam.startsWith("harry"))
console.log(nam.endsWith("harry"))


console.log(nam.toLowerCase())
console.log(nam.toUpperCase())

let str2="please give RS 1000"
let amnt=str2.slice('please give Rs'.length)
let amount=Number.parseInt(amnt)
console.log(amount)

let hlo="namaste"
console.log(hlo.replace(3,"z"))
//strings are immutable


