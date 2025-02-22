alert("hello your script tworks")

let a=prompt("enter a")
a=Number.parseInt(a)

alert("you entered a of type " + (typeof a))

let write=confirm("do you want to write it to the page")
if(write){
    document.write(a)
}
else{
    document.write("Pllz allow me to write")
}