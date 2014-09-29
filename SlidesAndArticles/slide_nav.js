// Current slide number
var cur_slide = 1;

// Get footer and clean it
var footer = document.getElementById("footer").innerHTML;
var footer_on = true;

// Turn off footer
document.getElementById("footer").innerHTML = "";
footer_on = false;


//______________________________________________________________________________
// Get a key press and navigate to the next or previous slide
document.onkeydown = function (e) {

  var doMove = false;
  var url = location.href;  //Save down the URL without hash.

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
      cur_slide = new_slide;
      doMove = true;
    }
  }

  // Move to next or previous slide
  if (cur_slide >=1 && cur_slide <=num_slides) {
    if ( ( e.keyCode === 37 )
         && cur_slide !== 1) {
      --cur_slide;
      doMove = true;
    }
    else if ( ( e.keyCode === 39 ) 
              && cur_slide !== num_slides) {
      ++cur_slide;
      doMove = true;
    }
  }

  if (doMove) {
    doMove = false;

    // Set the page number
    if (cur_slide > 1) {
      if (!footer_on){
        document.getElementById("footer").innerHTML = footer;
        footer_on = true;
      }
      document.getElementById("slide_num").innerHTML = cur_slide+"/"+num_slides;
    }
    else{
      document.getElementById("footer").innerHTML = "";
      footer_on = false;
    }

    // @@ debug
    // console.log('Moving to #'+cur_slide);

    location.href = "#"+cur_slide;         //Go to the target element.
    history.replaceState(null,null,url);   //Don't like hashes. Changing it back.
  }
};