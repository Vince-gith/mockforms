//Addition 
function add(a, b){
    console.log(a+b)
}
add(5,4);

function greet(a, b, c){
    console.log("Hello " + a)
}

greet("Vince", "Brown", "Tade")


function salute(name){
    console.log("Hi " + name)
}

salute("Wade");


function doubleNumber(num){
    console.log(num * 2)
}

doubleNumber(24);


//VerifyPassword 
function verifyPassword(){
    let firstPassword = document.getElementById('pass').value
    let secondPassword = document.getElementById('cpass').value

    if (firstPassword === secondPassword){
        alert("Grant Access")
    }else(
        alert("Deny Access")
    )
}

console.log(document)