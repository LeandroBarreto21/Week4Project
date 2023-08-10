let learnButton = document.getElementById("learn")
let body = document.getElementById("everything")

let buttons = document.getElementById("buttons")
 let morePlayers = document.getElementById("images_description2")
let isHomePageVisible = true;

learnButton.onclick = function (event){
    event.preventDefault()
if(isHomePageVisible){
    body.style.visibility = "hidden";
buttons.style.visibility = "visible";
learnButton.innerHTML = "Click here again to go back to the Home page"
morePlayers.style.visibility = "visible";

}else{
    body.style.visibility = "visible";
    learnButton.innerHTML = "Click Here to learn about other players"
morePlayers.style.visibility = "hidden";
}

isHomePageVisible = !isHomePageVisible;
}

let backgroundChange = document.getElementById("background");
let backgroundOfTheWeb = document.body;

let isGreenBackground = true;

backgroundChange.onclick = function (event){
    event.preventDefault();

if(isGreenBackground){
backgroundOfTheWeb.style.backgroundColor = "black";
backgroundChange.innerHTML = "Click here to change back to the default background";
learnButton.style.backgroundColor = "green";
backgroundChange.style.backgroundColor = "green";
survey.style.backgroundColor = "green";

}else{
    backgroundOfTheWeb.style.backgroundColor = "green"
    backgroundChange.innerHTML = "Click Here to change background";
    backgroundOfTheWeb.style.backgroundColor = "green";
    learnButton.style.backgroundColor = "black"
    backgroundChange.style.backgroundColor = "black"
    survey.style.backgroundColor = "black";
}

isGreenBackground = !isGreenBackground;
};

let survey = document.getElementById("survey")
let form = document.getElementById("form")
let option = document.getElementById("optional")
option.innerHTML = "(optional) Why do you like the player?";

survey.onclick = function(event){
    event.preventDefault();

    form.style.visibility = "visible";
    body.style.visibility = "hidden"
    buttons.style.visibility = "visible"

}

let surveySubmitButton = document.getElementById("submit");
let formContainer = document.getElementById("form-container")
let message = document.getElementById("finish")
surveySubmitButton.onclick = function(event){
    event.preventDefault();
    form.style.visibility = "hidden"
    alert("Thank you for taking the time to tell me your favorite player :)")
    body.style.visibility = "visible";
}
