age=prompt("hey what is your age")
age=Number.parseInt(age)
if(age<0){
  console.log("invalid age")
}
else if(age>0 && age<18){
  console.log("you are a teen age")
}
else{
  console.log("you are an adult")
} 