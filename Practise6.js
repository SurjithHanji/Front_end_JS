const canDrive=(age)=>{
    return age>18?true:false
}

let runagain=true

while(runagain){
    let age=prompt("entr your age:")
    age=Number.parseInt(age)

    if(age<0){
        console.error("please enter a valid age")
        break;
    } 
    
    if(canDrive(age)){
        alert("you can drive")
    }
    else{
        alert("you cant")
    }
    runagain=confirm("do you want to play again?")
}

