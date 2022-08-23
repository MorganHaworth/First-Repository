function checkInput() {
    let inputElement = document.getElementById("greeting");
    alert(inputElement.value);

    if (inputElement.value === "red") {
        inputElement.style.border = "2px solid red";
    } 
    /* if they type "carrot", the border turns orange */
    else if (inputElement.value == "orange") {
        inputElement.style.border = "2px solid orange";
    }
    else {
        inputElement.style.border = "2px solid gray";
    }
}