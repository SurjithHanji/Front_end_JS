for(let i=0;i<3;i++){
    console.log(i)
  }
  
  for(let i=0;i<101;i++){
    console.log(i+1)
  }
  //add of two numbers
  let sum=0
  let n=prompt("tner the n value")
  n=Number.parseInt(n)
  for(let i=0;i<n;i++){
    sum=sum+i
  }
  console.log("sum of"+n+" natural numbers is:"+sum)
  
  //factorial of number
  let a=prompt("enter a value")
  let fact=1
  for(let i=1;i<=a;i++){
      fact*=i;
  }
  console.log(fact)