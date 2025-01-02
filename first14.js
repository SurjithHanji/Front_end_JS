let marks={
    harry:90,
    shubham:98,
    hema:97
  }
  for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of "+ Object.keys(marks)[i] + "are" +     marks[Object.keys(marks)[i]])
  }
  
  
  //soltn 2
  for (let i in marks){
    console.log("the marks of "+ i + "are"+ marks[i])
    
  }