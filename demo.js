var arr=[];
var eventarr=[];


function validateForm(){
    var employeeName = document.getElementById("empName").value;
    let regexEmployeeName = /^[a-zA-Z ]+$/;
    // check if the passed number is integer or float
    let resultName = regexEmployeeName.test(employeeName);
    if(employeeName == "" || !resultName )
        document.getElementById("div_empName").innerHTML="Please enter a valid employee name";
    else
        document.getElementById("div_empName").innerHTML="";
        var employeeName = document.getElementById("empName").value;
    //check if email is valid
    var mailformat = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9.-]+\.[a-z]+$/;
     var employeeMail = document.getElementById("mail").value;    
    let resultMail = mailformat.test(employeeMail);
    if(employeeMail == "" || !resultMail )
        document.getElementById("div_mail").innerHTML="Please enter a valid email id";
    else
        document.getElementById("div_mail").innerHTML="";
    //check for valid phone number
   var contactNumber = /^\+[0-9]{2,3}-[0-9]{7,10}$/;
     var employeeContact = document.getElementById("contact").value;    
    let resultContact = contactNumber.test(employeeContact);
    if(employeeContact == "" || !resultContact )
        document.getElementById("div_contact").innerHTML="Please enter a valid contact number in the form '+(country code)-(number)'";
    else
        document.getElementById("div_contact").innerHTML="";
        var dobreg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
        var employeedob = document.getElementById("dob").value;    
       let resultDob = dobreg.test(employeedob);
       if(employeedob == "" || !resultDob )
           document.getElementById("div_dob").innerHTML="Please enter a valid date in the format dd/mm/yyyy";
       else{
           document.getElementById("div_dob").innerHTML="";
       }

       var passwordReg = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
        var emplPass = document.getElementById("password").value;    
       let resultPass = passwordReg.test(emplPass);
       if(emplPass == "" || !resultPass )
           document.getElementById("div_psd").innerHTML="Password must have minimum 8 characters</br> with atleast 1 uppercase and 1 specail character";
       else{
           document.getElementById("div_psd").innerHTML="";
       
       }
 
        var confirmPass = document.getElementById("cpass").value;    
        var emplPass = document.getElementById("password").value;  
           if(emplPass == "" || confirmPass == "" || confirmPass != emplPass )
               document.getElementById("div_cpass").innerHTML="The passwords are not matching! Please reenter";
           else{
                document.getElementById("div_cpass").innerHTML="";
       
       }
       //check if gender is entered
       var radios = document.getElementById('gender').checked;
       if(!radios)
       document.getElementById("div_gender").innerHTML="Please enter a gender";
         else
        document.getElementById("div_gender").innerHTML="";
         //check for department
       var dept = document.getElementById('dept').value;
            if(dept == "")
         document.getElementById("div_dept").innerHTML="Please enter a department";
         else
        document.getElementById("div_dept").innerHTML="";
          //check the length of text area
       var addr = document.getElementById('address').value;
       addr = addr.trim();
        if(addr == "" || addr.trim() == "")
            document.getElementById("div_addr").innerHTML="Please enter an address.";
        else if(addr.length > 25)
            document.getElementById("div_addr").innerHTML="The maximum address length is 25";
       else
            document.getElementById("div_addr").innerHTML="";
}


function checkMaxLenth(){
       var addr = document.getElementById('address').value;
       addr = addr.trim();
        if(addr == "" || addr.trim() == "")
            document.getElementById("div_addr").innerHTML="Please enter an address.";
        else if(addr.length >= 25)
            document.getElementById("div_addr").innerHTML="The maximum address length is 25";
       else
            document.getElementById("div_addr").innerHTML="";
    
}

function generate(){
    var num = document.getElementById("multi").value;
    if(num <= 0){
        document.getElementById("result").innerHTML="<h3>Please enter a valid number!</h3>";
        document.getElementById("result").style.color="red";
    } else{
        var str = "";
        for(var i = 1 ; i <= 10 ; i++ ){
            str = str + i + " * " + num + " = " + (i*num)+"</br>";
        }
        document.getElementById("result").innerHTML=str;
        document.getElementById("result").style.color="black";
      
    }

}

function validate(){
    var bride = document.getElementById("bride").value;
    var groom = document.getElementById("groom").value;
    if(bride == "" || groom == "" || bride <= 0 || groom <= 0){
             document.getElementById("result").innerHTML="<h3>Please enter valid age!</h3>";
             document.getElementById("result").style.color="red";
    } else{
            if(bride < 18 || groom < 21){

                document.getElementById("result").innerHTML="<h3>Invalid Marriage!</h3>";
                document.getElementById("result").style.color="red";
            }
            else{
                document.getElementById("result").innerHTML="";
           
            }
    }
}


function push(){
    var name = document.getElementById("eventname").value;
    if("" == name){
        document.getElementById("result").innerHTML="<h3>Please enter a value</h3>";
        document.getElementById("result").style.color="green";
        
    }
   
    else {
        let regexPattern = /^-?[0-9]+$/;
    
        // check if the passed number is integer or float
        let result = regexPattern.test(name);

        if(result){
            document.getElementById("result").innerHTML="<h3>Please enter a valid name</h3>";
            document.getElementById("result").style.color="green";
        } else{
        var flag = checkforduplicate(name);
        if(!flag){
        eventarr.push(name);
        var str = eventarr.length +"Event (";
        for(var i=0;i<eventarr.length ; i++){
            str = str+ eventarr[i] +",";
        }
        str = str.substring(0,str.length-1);
        str = str + ") added successfully!";
        document.getElementById("result").innerHTML = str;
        document.getElementById("result").style.color="green";
     } else{
        
        document.getElementById("result").style.color="green";
        document.getElementById("result").innerHTML="<h3>Event Name Already exists . Try with some other name!</h3>";
        }
     }
    }

}

function checkforduplicate(name){
    let regex =  /^-?[a-z]+$/;
    if(eventarr == null || eventarr.length == 0) {
        document.getElementById("result").innerHTML="<h3>Array is Empty</h3>";
        document.getElementById("result").style.color="green";
    }else{
        for(var i=0;i<eventarr.length ; i++){

            if(name.toUpperCase() == eventarr[i].toUpperCase() ) {             
                return true;
            }
             
        }
    }
    return false;

}

function pop(){
    var name = document.getElementById("eventname").value;
    if("" == name){
        document.getElementById("result").innerHTML="<h3>Array is Empty</h3>";
        document.getElementById("result").style.color="green";
        
    }
    else{
        
        if(eventarr == null || eventarr.length == 0) {
            document.getElementById("result").innerHTML="<h3>Array is Empty</h3>";
            document.getElementById("result").style.color="green";
        } else{          
        
          eventarr.pop(name);
          var str = "<h3>The Events in the array are :</h3></br><ol>";
          if(eventarr != null && eventarr.length > 0){
      
              for(var i=0;i<eventarr.length ; i++){
                  str=str+"<li>"+eventarr[i]+"</li>"
              }
              str = str + "</ol>";
              document.getElementById("result").innerHTML=str;
      
          }else{
            document.getElementById("result").style.color="green";
              document.getElementById("result").innerHTML="<h3>Array is Empty</h3>";
             
          }
            
        }
    
    }

}


function displayEvents(){
    var str = "<h2>The Events in the array are </h2></br><ol>";
    if(eventarr != null && eventarr.length > 0){

        for(var i=0;i<eventarr.length ; i++){
            str=str+"<li>"+eventarr[i]+"</li>"
        }
        str = str + "</ol>";
        document.getElementById("result").innerHTML=str;

    }else{
        document.getElementById("result").style.color="green";
        document.getElementById("result").innerHTML="<h3>Array is Empty</h3>";
       
    }

}

function addEmployee(){
    var name = document.getElementById("name").value;
    if("" == name){
        document.getElementById("result").innerHTML="Please enter a value";
    }else{
        arr.push(name);
        document.getElementById("result").innerHTML="Name is saved successfully...and length is"+arr.length;
    }

}

function display(){
    var str = "<h2>Employee Names are:</h2></br><ol>";
    if(arr != null && arr.length > 0){

        for(var i=0;i<arr.length ; i++){
            str=str+"<li>"+arr[i]+"</li>"
        }
        str = str + "</ol>";
        document.getElementById("result").innerHTML=str;

    }else{
        document.getElementById("result").innerHTML="Array is EMplty";
    }

}



function add(){
   
    var number1=parseInt(document.getElementById("num1").value);
    var number2=parseInt(document.getElementById("num2").value);
    var result=number1+number2;
    console.log("Answers is:"+result)
    document.getElementById("result").innerHTML="Answers is:"+result;


   
}

function subtract(){
   
    var number1=parseInt(document.getElementById("num1").value);
    var number2=parseInt(document.getElementById("num2").value);
    var resSub=number1 - number2;
    console.log("Answers is:"+resSub)
    document.getElementById("result").innerHTML="Answers is:"+resSub;


   
}

function multiply(){   
    var number1=parseInt(document.getElementById("num1").value);
    var number2=parseInt(document.getElementById("num2").value);
    var resMul=number1 * number2;
    console.log("Answers is:"+resMul)
    document.getElementById("result").innerHTML="Answers is:"+resMul;
   
}

function division(){   
    var number1=parseInt(document.getElementById("num1").value);
    var number2=parseInt(document.getElementById("num2").value);
    var resultDiv=number1/number2;
    console.log("Answers is:"+resultDiv)
    document.getElementById("result").innerHTML="Answers is:"+resultDiv;


   
}

var balance = 1000;

function withdraw(){
    var amt = document.getElementById("amt").value;
    
    if (amt == 0 || amt =="" || amt < 0) {
         alert("Please enter a valid amount");
    }else{
        
        if(balance < 1)
            alert("Low balance. Cannot Withdraw!!");
        else{
            bal1 = balance - amt;
            if(bal1 < 1)
            alert("Low balance. Cannot Withdraw!!");
            else
            balance = bal1;
           document.getElementById("bal").innerHTML = balance;
           
        }

    }

}

function deposit(){
    var amt = document.getElementById("amt").value;
    if (amt == 0 || amt =="" || amt < 0) {
         alert("Please enter a valid amount");
    }else{
        var amt = parseInt(document.getElementById("amt").value);
            balance = balance + amt;
           document.getElementById("bal").innerHTML = balance;
           
        }

}




