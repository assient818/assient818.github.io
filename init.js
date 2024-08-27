var glow = document.querySelector('.mouse-move-effect');
document.onmousemove = (event) => {
    if (glow) {
        var x = event.clientX * 100 / window.innerWidth + "%";
        var y = event.clientY * 100 / window.innerHeight + "%";
        
        glow.style.left = x;
        glow.style.top = y;
    }
};

// INTRO-TEXT TYPING EFFECT
var typedText = ["INTERFACE 2037 READY FOR QUERY", "WHO IS ASTRID WIMMER?"];
var textArea = document.querySelector("h1");
if (textArea) {
    typingContainer(0);
}

function typing(text, i, callback) {
    if (i < text.length) {
        textArea.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
        setTimeout(function() {typing(text, i + 1, callback);}, 50);
    }
    else if (typeof callback == 'function') {
        setTimeout(callback, 1750);
        textArea.style.animation = "underline-text 0.1s 0.5s linear forwards, blink-cursor .75s step-end infinite"; 
    }
}

function typingContainer(i) {
    if (i < typedText.length) {
        // reset underline animation
        textArea.style.backgroundImage = "linear-gradient(white, white)";
        textArea.style.backgroundSize = "0% 30px";
        textArea.style.animation = "blink-cursor .75s step-end infinite";
        
        typing(typedText[i], 0, function() { typingContainer(i + 1); })
    }
    else {
        // make the last line of text clickable
        textArea.onmouseover = (event) => {
            textArea.style.cursor = "pointer";
        };
        textArea.onclick = (event) => {
            document.location.href = "homepage.html";
        };

    }
}

if (document.URL.includes("homepage")) {    
    // education popup 
    educationPopup = document.getElementById("education-popup");
    educationLink = document.getElementById("education-link");
    educationExit = document.getElementById("education-exit");
    educationLink.onclick = function() {openPopup(educationPopup)};
    educationExit.onclick = function() {exitPopup(educationPopup)};
   
    // experience popup 
    experiencePopup = document.getElementById("experience-popup");
    experienceLink = document.getElementById("experience-link");
    experienceExit = document.getElementById("experience-exit");
    experienceLink.onclick = function() {openPopup(experiencePopup)};
    experienceExit.onclick = function() {exitPopup(experiencePopup)};

    // projects popup 
    projectPopup = document.getElementById("projects-popup");
    projectLink = document.getElementById("projects-link");
    projectExit = document.getElementById("projects-exit");
    projectLink.onclick = function() {openPopup(projectPopup)};
    projectExit.onclick = function() {exitPopup(projectPopup)};

    // skills popup
    skillsPopup = document.getElementById("skills-popup");
    skillsLink = document.getElementById("skills-link");
    skillsExit = document.getElementById("skills-exit");
    console.log(skillsPopup);
    console.log(skillsLink);
    console.log(skillsExit);
    skillsLink.onclick = function() {openPopup(skillsPopup)};
    skillsExit.onclick = function() {exitPopup(skillsPopup)};

    // logo "easter egg"
    wyLogo = document.getElementById("wy-logo");
    easterEgg = document.getElementById("easter-egg");
    wyLogo.addEventListener("mouseenter", (e) => {
        easterEgg.style.color = "#4d9b31";
    });
    wyLogo.addEventListener("mouseleave", (e) => {
        easterEgg.style.color = "black";
    });
}

function openPopup(popup) {
    popup.style.display = "block";

}

function exitPopup(popup) {
    popup.style.display = "none";
}