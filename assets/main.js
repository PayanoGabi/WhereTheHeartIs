//Mouseflow




  setTimeout(load_mf_file, 20000); // Delay 20 seconds in loading function
  function load_mf_file()
  {
      // Get the head tag
    //  var target_head = document.getElementsByTagName("head")[0];
      // Create script element
      //var mouseflow_script = document.createElement('script');
      // Set the script type to JavaScript
      //mouseflow_script.type = 'text/javascript';
      // External JS file
    //  mouseflow_script.src = 'https://cdn.mouseflow.com/projects/8e2122ae-1e98-4b29-a030-b5e5d7301b5c.js';
    //  target_head.appendChild(mouseflow_script);
    //console.image("https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fview%2Fhi-gif-3476047&psig=AOvVaw3hylXAkYQVdGOoK-yVQ9QU&ust=1651896422934000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD8mPf_yfcCFQAAAAAdAAAAABAJ");
  }
  






//<script>
  //!function(){ var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="oZqIbWF0AHJcEsnQytBoodaMW7TJ9KBT";;analytics.SNIPPET_VERSION="4.15.3";
  //analytics.load("oZqIbWF0AHJcEsnQytBoodaMW7TJ9KBT");
  //analytics.page();
  //}}();
//</script>







/** button Menu ***/


if(window.location.pathname == '/' || window.location.pathname == '/projects'){

var displayNav = document.getElementById('homeButton');
var buttonMenu = document.querySelector("#main");
//buttonMenu.style.display="none";

displayNav.onclick = function(e) {
buttonMenu.style.display = "block";
// }
}
}


/****** Responsive Menu *******/


function responsiveBreakpointFunction(x) {
  if (x.matches) { // If media query matches
      // document.body.style.backgroundColor = "yellow";


      if(window.location.pathname == '/' || window.location.href == 'http://gabipayano.com/' || window.location.pathname == '/projects.html'){
        document.querySelector("#homeButton").remove();
        var buttonMenu = document.querySelector("#main");
        buttonMenu.style.display="block";


      }


      var beenFired = false;
  


      const mainMenu = document.getElementById('main');


      const mobileMenu = document.createElement("div");
      mobileMenu.classList.add("hamburgerMenu");

      mainMenu.appendChild(mobileMenu);

      var ulMenuItems = document.querySelector("#main > ul")

      ulMenuItems.style="display:none;";


      var img = document.createElement("img");
      img.src = "images/hamburger.svg";
      img.classList.add('hamburgerIcon');

      mobileMenu.appendChild(img);


      document.querySelector("#main > ul")


        document.querySelector("#main > div").addEventListener("click", function() {
        //console.log('clicked-Mother fuckka');
        ulMenuItems.classList.toggle("openMenu");
        ulMenuItems.style="";

        });



  } else {
    //document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
responsiveBreakpointFunction(x)

if(window.location.href.indexOf('projects') > 0){
document.getElementsByClassName('hoverNotify')[0].onclick = function(){
  alert('Please hover over tiles')

}
}

if(window.location.href.indexOf('projects') > 0){
document.getElementById('comingSoon').onclick = function(e){

  alert('Coming Soon to Chrome Web Store Extensions.');
  return;

  e.stopPropagation();

}
document.getElementById('comingSoon').onclick = function(e){

  alert('Coming Soon to Chrome Web Store Extensions.');
  return;

  e.stopPropagation();


}

document.getElementById('comingSoon').ontouchstart = function(e){

  alert('Coming Soon to Chrome Web Store Extensions');
  e.stopPropagation();


}
document.getElementById('comingSoon2').ontouchstart = function(e){

  alert('Coming Soon to Chrome Web Store Extensions.');
  e.stopPropagation();



}
}







//*Experiences Leaflet API*///

if(window.location.pathname == '/experience'){
 

var map = L.map('map').setView([42.3551685, -71.0617590], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([42.3551685, -71.0617590]).addTo(map)
    .bindPopup('Home Base')
    .openPopup();

    function travelSpots (e) {
    L.marker([32.3580800, -117.0490100]).addTo(map).bindPopup('Rosarito'); //Mexico
    L.marker([50.0878045, 14.4210868]).addTo(map).bindPopup('Praha'); // Czech
    L.marker([52.5107074, 13.3966566]).addTo(map).bindPopup('Berlin'); //Germany
    L.marker([48.1384014, 11.5710215]).addTo(map).bindPopup('Munchen'); //Germany
    L.marker([31.2195000, 121.4718000]).addTo(map).bindPopup('Shanghai'); //China
    L.marker([30.2441752, 120.2126782]).addTo(map).bindPopup('Hangzhou'); //China
    L.marker([55.6850006, 12.5677720]).addTo(map).bindPopup('København'); //Denmark
    L.marker([48.8523196, 2.3435292]).addTo(map).bindPopup('Paris'); //France
    L.marker([51.2016178, 3.2235234]).addTo(map).bindPopup('Brugge'); //Brussels
    L.marker([52.3718480, 4.8910650]).addTo(map).bindPopup('Amsterdam'); //Holland
    L.marker([41.3820438, 2.1739339]).addTo(map).bindPopup('Barcelona'); //Spain
    L.marker([40.4187647, -3.6995338]).addTo(map).bindPopup('Madrid'); //Spain
    L.marker([45.5344088, -73.6167155]).addTo(map).bindPopup('Montreal'); //Canada
    L.marker([19.0974031, -70.3028026]).addTo(map).bindPopup('Santa Domingo'); //Dominican Republic
    L.marker([18.1152684, -77.1598363]).addTo(map).bindPopup('Kingston'); //Jamaica
    L.marker([64.1379748, -21.9575688]).addTo(map).bindPopup('Reykjavik'); // Iceland

    }

    travelSpots();

}
