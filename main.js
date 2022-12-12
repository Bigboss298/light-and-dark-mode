var element = document.body
var light = document.querySelector('#light');
const dark = document.querySelector('#dark');
function myFunction() {
       element.classList.toggle('darkmode');
    if (light.style.display === 'none') {
        //i.e when is in dark mode
         light.style.display = 'block';
         dark.style.display = 'none';
      
     } else {
         // when in lightmode
         dark.style.display = "block";
         light.style.display = 'none';
     }
 }
 
 //Create a close button
 var myNodelist = document.getElementsByTagName("LI");
 var i;
 for (i = 0; i < myNodelist.length; i++) {
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     myNodelist[i].appendChild(span);
 }
 
 // Click on a close button to hide the current list item
 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
         var div = this.parentElement;
         div.style.display = "none";
     }
 }
 
 //automating the add button
function handleSubmit() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('list').value;
    var add = document.createTextNode(inputValue);
    li.appendChild(add);
        if (inputValue === '') {
            alert('Write a todo before adding')
        } else {
            document.querySelector('.mylist').appendChild(li);
            document.getElementById('para').style.display = 'none';
        }
    document.getElementById('list').value = '';
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
    }
        }
}
