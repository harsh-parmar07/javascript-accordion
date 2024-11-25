function accordation_toggle(target){
    console.log("open");
    console.log(target);

    // Create a reference to all section using a class ame.
    var divto = document.getElementsByClassName("accordion-section");
    //Loop through each section
    for(var i = 0; i < divto.length; i++){
        //Hide each section
        divto[i].style.display = "none";
    }

    //Create a reference to an element with the same name as the target variable
    var content = document.getElementById(target);

    //check if the content is currently displayed
    if(content.style.display === "block"){
        //hide the content
        content.style.display = "none";
    }else{
        //display the content
        content.style.display = "block"
    }
}
