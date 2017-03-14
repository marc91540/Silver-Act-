



var mapCanvas = document.getElementById( 'map-canvas' );
var mapMarkers = [];
// Placeholder markers are in the HTML

// if HTML DOM Element that contains the map is found...
if ( mapCanvas ) {
 
  // Coordinates to center the map
  var myLatlng = new google.maps.LatLng( 48.854607, 2.370043 );

  // Other options for the map, pretty much selfexplanatory
  var mapOptions = {
    zoom: 12,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  // Attach a map to the DOM Element, with the defined settings
  var map = new google.maps.Map( mapCanvas, mapOptions );
  
  markers.forEach( function ( marker, index ) {
    
    var markerLatlng = new google.maps.LatLng( marker.lat, marker.lng );
    var marker = new google.maps.Marker({
      position: markerLatlng,
      map: map,
      title: marker.title
    });
    
    mapMarkers.push( marker );
    
  } );

}



$('.button1').click(function() {
 $('.content1').toggleClass('full-size  animated bounce');              
});

$('.button2').click(function() {
 $('.content2').toggleClass('full-size  animated bounce');              
});

$('.button3').click(function() {
 $('.content3').toggleClass('full-size  animated bounce');              
});

$('.button4').click(function() {
 $('.content4').toggleClass('full-size  animated bounce');              
});


var activeDropdown = {};
document.getElementById('icecream-dropdown').addEventListener('click',showDropdown);
document.getElementById('music-dropdown').addEventListener('click', showDropdown);                                                              
function showDropdown(event){
  if (activeDropdown.id && activeDropdown.id !== event.target.id) {
    activeDropdown.element.classList.remove('active');
  }
  //checking if a list element was clicked, changing the inner button value
  if (event.target.tagName === 'LI') {
    activeDropdown.button.innerHTML = event.target.innerHTML;
    for (var i=0;i<event.target.parentNode.children.length;i++){
      if (event.target.parentNode.children[i].classList.contains('check')) {
        event.target.parentNode.children[i].classList.remove('check');
      }
    }
    //timeout here so the check is only visible after opening the dropdown again
    window.setTimeout(function(){
          event.target.classList.add('check');
    },500)
  }
  for (var i = 0;i<this.children.length;i++){
    if (this.children[i].classList.contains('dropdown-selection')){
        activeDropdown.id = this.id;
        activeDropdown.element = this.children[i];
        this.children[i].classList.add('active');
     }
    //adding the dropdown-button to our object
    else if (this.children[i].classList.contains('dropdown-button')){
      activeDropdown.button = this.children[i];
    }
  }
}

window.onclick = function(event) {
  if (!event.target.classList.contains('dropdown-button')) {
    activeDropdown.element.classList.remove('active');
  }
}


$(".inputCalendar").on("change", function() {
    this.setAttribute(
        "data-date",
        moment(this.value, "YYYY-MM-DD")
        .format( this.getAttribute("data-date-format") )
    )
}).trigger("change")




