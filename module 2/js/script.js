
// Question 1

const button = document.querySelector("#bg");

button.onclick = function() {
    console.dir(event.target);


    document.body.style.background = "green";
}


// Question 2

const togglerButton = document.querySelector("div .togglee");
const buttonTwo = document.querySelector(".toggler");


buttonTwo.onclick = function() {
    console.log(event.target);

    event.target.classList.toggle("extra");

    console.log(togglerButton);
};



// Question 3 

const container = document.querySelector("select");
const paragraphContainer = document.querySelector(".paragraphs-container");

container.onchange = function () {
console.log(event.target.value);

const selectedValue = this.value;

paragraphContainer.innerHTML = "";

for (let i = 1; i <= selectedValue; i++) {
    

    paragraphContainer.innerHTML += `<p class="content" ${selectedValue}>${[i] + " is the number"}</p>`;
}

};


// Question 4

const input = document.querySelector(".input");
const charCount = document.querySelector(".char-count b");

input.onkeyup = function() {
    console.log(event.target.value.length);

    const len = event.target.value.length;

    charCount.innerHTML = len;

};

// Question 5

const highlight = document.querySelector("highlight");

function scrollColour() {
    console.log(window.scrollY);

    const scrolledY = window.scrollY;

    if (scrolledY > 35) {
        document.body.classList.add("highlight");
    } else {
        document.body.classList.remove("highlight");
    }
}

window.addEventListener("scroll", scrollColour);

