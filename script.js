 function save() {
     let x = document.getElementById("text_uzer").value;
     var newDiv = document.createElement("p");
     newDiv.className = 'notes';
     newDiv.innerHTML = x;
     my_div = document.getElementById("HREN");
     document.body.insertBefore(newDiv, my_div);
 }
 //ghbdtn