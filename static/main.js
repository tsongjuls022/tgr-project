
function sendtoSlack() {
    var message = $("#inquire-message").val();
    var name = $("#inquire-name").val();
    var number = $("#inquire-number").val();
    var allmessage = "Name: "+name+"\n"+"Phone Number: "+number+"\n"+"Message: "+message;
    var settings = {
        url : "https://hooks.slack.com/services/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",
        method : "POST",
        dataType : "application/x-www-form-urlencoded",
        data : {
            "payload" : JSON.stringify({text : allmessage })
        }
    }

    $.ajax(settings).done(function (response){
        console.log(response);
    });
}

function styleFields(){
    //clear label
    document.getElementById("label-message").innerHTML = "";
    document.getElementById("label-name").innerHTML = "";
    document.getElementById("label-number").innerHTML = "";
    //clear border style
    document.getElementById("inquire-message").style.border = "";
    document.getElementById("inquire-name").style.border = "";
    document.getElementById("inquire-number").style.border = "";
}

$(document).ready(function() {
    $("#inquire-button").click(function (){
        //get value of fields
        var message = $("#inquire-message").val();
        var name = $("#inquire-name").val();
        var number = $("#inquire-number").val();
        var counter = 0;

        //style fields
        styleFields();

        //validation of fields
        if(message == ""){
            document.getElementById("label-message").innerHTML = "Inquiry Message is REQUIRED!";
            document.getElementById("inquire-message").style.border = "1px solid red";
            counter++;
        }
        if(name == ""){
            document.getElementById("label-name").innerHTML = "Inquiry Name is REQUIRED!";
            document.getElementById("inquire-name").style.border = "1px solid red";
            counter++;
        }
        if(number == ""){
            document.getElementById("label-number").innerHTML = "Inquiry Number is REQUIRED!";
            document.getElementById("inquire-number").style.border = "1px solid red";
            counter++;
        }

        //trigger funtion
        if(counter == 0){
            sendtoSlack();
            alert("You are successfully send your inquiry to administrator!")
            $("#inquire-message").val('');
            $("#inquire-name").val('');
            $("#inquire-number").val('');
        }
    });
});
  
  