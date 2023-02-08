document.getElementById("navlink").addEventListener("mouseover", function(){
this.innerHTML = "Tanmay.Home";
});
document.getElementById("navlink").addEventListener("mouseout", function(){
this.innerHTML = "Tanmay.";
});



document.getElementById("email").addEventListener("mouseover", function(){
this.innerHTML = "Copy to clipboard";
});
document.getElementById("email").addEventListener("mouseout", function(){
this.innerHTML = "tanmay.agrawl@gmail.com";
});

function copyText() {
      
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("tanmay.agrawl@gmail.com");
}