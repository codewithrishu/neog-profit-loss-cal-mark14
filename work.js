var initialPirce = document.querySelector('#initial-price')
var stockQuantity = document.querySelector('#quantity')
var currentPrice = document.querySelector('#current-price')
var checkBtn = document.querySelector('#check-btn')
var outputBox = document.querySelector('#output-box')



//calculate profit and loss
function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPer = ((loss/initial) * 100).toFixed(2)
        document.body.style.backgroundColor = "#EF4444"
        
        showOutput(`sorry, you got loss of ${loss} and loss percentage is ${lossPer}`)

    }else if(initial < current){
        var profit = (current - initial)*quantity
        var profitPer = ((profit/initial) * 100).toFixed(2)

       document.body.style.backgroundColor = "#6EE7B7"
        showOutput(`yupee, you made a proft of ${profit} and profit percentage is ${profitPer}`)
    }
    else{
        showOutput("no pain no gain")
    }
}


//show output message
function showOutput(message) {
    outputBox .innerText = message
}

//checks valid 
function clickHandler() {

    var initialValue = initialPirce.value;
    var quantityStock = stockQuantity.value;
    var currentValue = currentPrice.value;

    if(initialValue === "" || quantityStock === "" || currentValue ===""){
        outputBox.innerText = "please fill all the field"
    }
    else{
        calculateProfitAndLoss(initialValue , quantityStock, currentValue) 
    }
    
}
checkBtn.addEventListener('click',clickHandler)