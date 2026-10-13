document.querySelector("#submitButton").addEventListener("click", function(e){
    e.preventDefault()
    let name = document.querySelector("#nameInput").value 
    let order = document.querySelector("#foodInput").value
    let amount = document.querySelector("#amountInput").value 

   let price = Number(order) * Number(amount)
   

    printToText(name, price)


})

function printToText(n, p){
    document.querySelector("#freak").innerHTML = "Thanks, " + n +"! Your total is $" + p +".";
}

