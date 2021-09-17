function clicked(value){
  
    let resultBox = document.getElementById("result");
    resultBox.value += value; 
}

function evaluteResult(){
    let resultBox = document.getElementById("result");

    if (resultBox.value != ""){
        resultBox.value =eval(resultBox.value);

    }
    else{
        resultBox.value = 0;

    }
}

function deleteAll(){
    let resultBox = document.getElementById("result");
    resultBox.value = "";

}

function deletePrev(){
    let resultBox = document.getElementById("result");
    let resultVal = resultBox.value;
    resultBox.value = resultVal.substring(0,resultVal.length-1)
}


function evaluatePer(){
    let resultBox = document.getElementById("result");
    resultBox.value = resultBox.value / 100; 
}


function convertMode(){
    let theme = document.getElementById("theme");
    let darkMode = document.getElementsByTagName("darkMode");
     if(theme.getAttribute("href") === "./Styles/lightMode.css"){
     theme.href ="./Styles/darkMode.css";
     darkMode.value = "Dark Mode ON";
     }
     else{
         darkMode.value = "Light Mode ON";
         theme.href ="./Styles/lightMode.css";
        //  let result = document.getElementById("sun");
        //  result.getAttribute("style")
     }
}