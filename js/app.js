document.querySelector("#submitButton").addEventListener("click", function(e){
    e.preventDefault()
    let name = document.querySelector("#nameInput").value 
    let order = document.querySelector("#foodInput").value.slice(9, document.querySelector("#foodInput").value.length)
    let amount = document.querySelector("#amountInput").value 

   console.log(order);
   

    printToText(name, order, amount)


})

function printToText(n, o, a){
    document.querySelector("#freak").innerHTML = "Thanks, " + n +"! Your total is "
}

