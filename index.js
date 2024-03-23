
var elements = document.getElementsByClassName("image1");

for (var i = 0; i < elements.length; i++) {
    // Attach event listener to each element
    elements[i].addEventListener('mouseenter', function() {
        console.log("Okay")
        this.play();
      
    });

    elements[i].addEventListener('mouseleave', function() {
        console.log("Okay leave")
        this.pause();
      
    });

}

