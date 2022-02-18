function compute() {
    var principal = document.getElementById("principal").value,
        rate = document.getElementById("rate").value,
        years = document.getElementById("years").value;
    
    // Principal amount validation
    if(principal <= 0){
    		alert("Enter a non-zero positive number");
        document.getElementById("principal").focus();
        return;
    }
    
    // compute the interest amount
    var interest = principal * years * rate /100;

    // Convert the entered No:of years to show actual year
    var year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML=`
    <span>If you deposit <mark>${principal}</mark>,</span>
    <span>at an interest rate of <mark>${rate}%</mark>.</span>
    <span>You will receive an amount of <mark>${interest}</mark>,</span>
    <span>in the year <mark>${year}</mark></span>`
}

function updateRate() 
{
    //Update the rate value text to show the value selected
    //by the slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}