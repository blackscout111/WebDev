// -----------------------------------------------------------------------------
// This script defines the navigation abilities of the slideshow
// Created by: Bryan Clifford
// -----------------------------------------------------------------------------


//______________________________________________________________________________
// GLOBALS

// Number of slides
var num_slides = 0;
var slides;

// Current slide number
var cur_slide = 1;

// Last slide number
var last_slide = 0;




//------------------------------------------------------------------------------
// Initialize the slide show
function initializeSlides() {
    slides = document.getElementsByClassName("slide");
    num_slides = slides.length;

    var footer_beg = '<div id="footer">'+
                     '  <div id="footer-left" style="float:left; width:10%; text-align:left;">'+
                          footer_left+
                     '  </div>'+
                     '  <div id="footer-middle" style="float:left; width:80%; text-align:center;">'+
                          footer_middle+
                     '  </div>'+
                     '  <div id="slide_num" style="float:left; width:10%; text-align:right;">';

    var footer_end = '/'+num_slides+'</div></div>';


    for (var i=0; i<num_slides; ++i){
        slides[i].id = i+1;
        if ( show_footer && (i>0) ){
            slides[i].innerHTML += footer_beg+(i+1)+footer_end;
        }
    }

    setAspectRatio();
}




//______________________________________________________________________________
// Move to current slide
function moveSlide() {

    var url = location.href;  // Save the URL without hash.

    // @@ debug
    // console.log('Moving to #'+cur_slide);

    location.href = "#"+cur_slide;         //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
}

//______________________________________________________________________________
// Get a click and navigate to the next or previous slide
function clickMove (e) {

    var doMove = false;
    var isMovOk = cur_slide >=1 && cur_slide <=num_slides;

    // @@ debug
    // console.log("url= " + url);
    // console.log("cur_slide= " + cur_slide);

    // Move to next or previous slide
    if (isMovOk) {
        if ( e.shiftKey  && !e.altKey
             && (cur_slide !== 1) ){ // shift click
            last_slide = cur_slide;
            --cur_slide;
            doMove = true;
        }
        else if (!e.shiftKey && !e.altKey
                 && (cur_slide !== num_slides) ){ // regular click
            last_slide = cur_slide;
            ++cur_slide;
            doMove = true;
        }
    }

    // Move slides
    if (doMove) {
        doMove = false;
        moveSlide();
    }
};




//______________________________________________________________________________
// Get a key press and navigate to the next or previous slide
function keyMove(e) {

    var doMove = false;
    var isMovOk = cur_slide >=1 && cur_slide <=num_slides;
    var url = location.href;  // Save the URL without hash.

    // @@ debug
    // console.log("keyCode= " + e.keyCode);
    // console.log("url= " + url);
    // console.log("cur_slide= " + cur_slide);

    // Prompt to jump to a slide
    if (e.keyCode === 71){
        var new_slide = prompt("Enter slide number (1 to "+num_slides+"):");
        new_slide = Math.round(new_slide);
        // console.log("new_slide= "+new_slide);

        if (new_slide >=1 && new_slide <=num_slides) {
            last_slide = cur_slide;
            cur_slide = new_slide;
            doMove = true;
        }
    }

    // Jump to last slide
    if (e.keyCode === 66){
        var new_slide = last_slide;
        last_slide = cur_slide;
        cur_slide = new_slide;
        doMove = true;
    }

    // Move to next or previous slide
    if (isMovOk) {
        if ( ( e.keyCode === 37 )                   // left arrow
            && cur_slide !== 1) {
            last_slide = cur_slide;
            --cur_slide;
            doMove = true;
        }
        else if ( ( e.keyCode === 39 )              // right arrow
            && cur_slide !== num_slides) {
            last_slide = cur_slide;
            ++cur_slide;
            doMove = true;
        }
    }

    // Move slides
    if (doMove) {
        doMove = false;
        moveSlide();
    }
};




//------------------------------------------------------------------------------
function setAspectRatio(){
    // Get current window dimensions
    var w = window.innerWidth;
    var h = window.innerHeight;

    var maxw = (aspect_ratio*h)/w;
    if (maxw > 1){
        maxw = 1;
    }

    // console.log("caught window resize: w=" + w + " h=" + h + " maxw=" + maxw*w);

    // Set the new width based on the window height
    var i =0;
    for (i=0; i < num_slides; ++i){
        slides[i].style.maxWidth = maxw*100+"%";
    }
};




//______________________________________________________________________________
// Add event listeners to DOM
document.addEventListener("keydown",keyMove);
document.addEventListener("click",clickMove);
window.addEventListener("resize",setAspectRatio);