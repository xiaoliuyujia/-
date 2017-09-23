document.getElementById("save").onclick = function (){
    var transactor_name = document.getElementById("name").value;
    var transaction_date = document.getElementById("mail").value;  
    var payment = document.getElementById("payment").value;
    var in_out = document.getElementById("check");
    var in_out_value;
    
    for (var i = 0; i < in_out.length; i++) {
        console.log(in_out[i]);
    if (in_out[i].checked) {
        // do whatever you want with the checked radio
//        alert(in_out[i].value);
        in_out_value = in_out[i].value;
        console.log(in_out_value)
        // only one radio can be logically checked, don't check the rest
        break;
    }
}
    
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function () {
    if (xml.readyState==4 && xml.status==200) {
        var display = document.getElementById("receive");
        var server_response = this.responseText;
        if (server_response == "login successful") {
            $("button").remove(".b");
            $("input").remove(".b");
            $("label").remove(".b");
            document.getElementById("title").innerHTML = "Login Successful!";  
//            window.location.href = "/usr_main.html";
        }
        else {
            display.innerHTML = server_response;
            display.style.color = "red";
        }
    }
    };
    xml.open("POST","/usr_add",true);
    xml.setRequestHeader("transactor_name", transactor_name);
    xml.setRequestHeader("transaction_date", transaction_date);
    xml.setRequestHeader("payment", payment);
    xml.send();
};

document.getElementById("reset").onclick = function () {
    document.getElementById("name").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("payment").value = "";
//    document.getElementById("check").setAttribute("checked","false");
//     document.getElementById("dropdown").setAttribute("label","Europe");
    document.getElementById("bio").value = "";
    
}

document.getElementById("get_date").onclick = function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var date_total = year.toString() + "-" + month.toString() + "-" + day.toString();
    document.getElementById("mail").value = date_total;
}