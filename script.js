// Select all elements with "i" tag and store them in a NodeList called "starts"
const stars = document.querySelectorAll(".ratings i");

//Loop through the "stars" NodeList
stars.forEach((star, index1) => {
    //add an event listener that runs a function when the "click" even is triggered
    star.addEventListener("click", () => {
            //Loop through the "stars" NodeList
            stars.forEach((star, index2) => {
                //Add the "active" class to the clicked stars and any stars with a lower index
                //and remove the "active" class from any stars with a highlight index
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
            });   
        });
})