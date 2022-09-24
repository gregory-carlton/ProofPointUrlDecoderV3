function decodeUrlDefensev3(link) {
    var matches = link.match(new RegExp('v3/__(.+?)__;(.*?)!'))
    if (!matches || matches.length < 3) {
         alert("This is not a valid ProofPoint v3 URL. Please enter a valid ProofPoint v3 URL and try again.");
     }
     // mutable array
     var decode_pile = Array.from(matches[1]);
     var chars_pile = Array.from(atob(matches[2])).reverse();
     
     for (var match of link.matchAll(/\*/g)) {
         decode_pile[match.index] = match.pop()
     }
 
     return decode_pile.join('')
 }
 
 function handleClick() {
    var link = document.getElementById('textbox1').value;
    decodeUrlDefensev3(link);
    document.querySelector("#decodedURL").defaultValue = (decodeUrlDefensev3(link));
    console.log(decodeUrlDefensev3(link));
    //Uncomment the above line for debugging
 }

 function handleClickEdge() {
    var link = document.getElementById('textbox1').value;
    decodeUrlDefensev3(link);
    //document.querySelector("#decodedURL").defaultValue = (decodeUrlDefensev3(link));
    alert((decodeUrlDefensev3(link)))
    console.log(decodeUrlDefensev3(link));
    //Uncomment the above line for debugging
 }