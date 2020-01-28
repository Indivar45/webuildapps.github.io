function paraUpdate(){
    document.getElementById('para').innerHTML = "This is the updated text and this text will be lost once this page is refreshed";
}
function paraWriteDisp(){
    document.write("Hello, Hope you are enjoying JavaScript Language<br>To view data again refresh the page");
}
function myAlert(){
    window.alert("Hello, Hope you are enjoying learning JavaScript");
}
function myLog() { 
    console.log("You clicked loc console button");
}

function sum() {
    var x, y, z;
    x = 12;
    y = 23;
    z = x + y;
    document.write("Sum is "+z);    
}
function sub(x, y) { 
    window.alert(x - y);
}

function carDetails() { 
    var car = { 
        model : "Maruti Suzuki Dzire",
        yom : "2019",
        owner: "Tarun Chuahan",
    }
    window.alert("I am " +car.owner+ ". I own a " +car.model+ "-" + car.yom + " Model");
}

