(function() {                                                                                       // Step 1 OK
  let imageList = [];                                                                               // Step 3 OK
  let counter = 0;                                                                                  // Step 4 OK 
  const images = document.querySelectorAll(".store-img");                                           // Step 5 OK
  const container = document.querySelector(".lightbox-container");                                  // Step 6 OK
  const item = document.querySelector(".lightbox-item");                                            // Step 7 OK
  const closeIcon = document.querySelector(".lightbox-close");                                      // Step 8 OK
  const btnLeft = document.querySelector(".btnLeft");                                               // Step 9 OK
  const btnRight = document.querySelector(".btnRight");                                             // Step 10 OK
  // add all images to the modal
  images.forEach(function(img) {                                                                    // Step 11 OK
    imageList.push(img.src);                                                                        // Step 12 OK
  });

  //add event listener to open modal and show image
  images.forEach(function(img) {                                                                    // Step 13 OK
    img.addEventListener("click", function(event) {                                                 // Step 14 OK
      // show modal
      container.classList.add("show");                                                              // Step 15 OK
      // get source
      let src = event.target.getAttribute('src');                                                   // Step 18 HERE IT IS. THANKS, ALISA
      console.log(src);
      // change counter
      counter = imageList.indexOf(src);                                                             // Step 19 OK
      console.log(counter);
      // show modal with image
      item.style.backgroundImage = `url(${src})`;                                                   // Step 20 OK
    });
  });
  // hide modal
  closeIcon.addEventListener("click", function() {                                                  // Step 16 OK
    container.classList.remove("show");                                                             // Step 17 OK
  });
  // loop back (left button)
  btnLeft.addEventListener("click", function() {                                                    // Step 21 OK
    counter--;                                                                                      // Step 22 OK
    if (counter < 0) {                                                                              // Step 23 OK
      counter = imageList.length - 1;                                                               // Step 24 OK
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;                                      // Step 25 OK
  });
  // loop forward (right button)
  btnRight.addEventListener("click", function() {                                                   // Step 26 OK
    counter++;                                                                                      // Step 27 OK
    if (counter > imageList.length - 1) { 
      counter = 0;                                                                                  // Step 28 OK
    }
    item.style.backgroundImage = `url(${imageList[counter]})`;                                      // Step 29 OK 
  });
})();                                                                                               // Step 2 OK