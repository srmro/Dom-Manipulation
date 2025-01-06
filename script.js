//for some reason I keep getting null in my console.
//1
// document.getElementById("fav-header").textContent= `The Favorites!`;
//2
const newColor = document.querySelector("body");
newColor.style.backgroundColor = "#983636"

//3

const unOrderList = document.getElementById("fav-lists");
const newList = document.createElement("li");

unOrderList.appendChild("newList")

//
// //4 button
// const alertButton = document.getElementById("subscribeAlert");

// alertButton.addEventListener("click", function(){
//     window.alert("Thank you choosing to be a Subsriber!");
// });

//validation
const validatingEmail = document.getElementById("validEmail");
const email = document.getElementById("email");

validatingEmail.addEventListener("submit", e => { //prevent page from submitting. e is short for event
    let message = []
    if (emailValue === "") {
        message.push("Email is required!")
    }

    if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message.join(',')
    }

});
