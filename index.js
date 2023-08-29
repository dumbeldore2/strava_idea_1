// Initialize and add the map
let map;
let featureLayer;

async function initMap() {
  // The location of center
  const position = {
    lat: 50.919632,
    lng: 4.186243
  };
  // Request needed libraries.
  //@ts-ignore
  const {Map} = await google.maps.importLibrary("maps");
  const {AdvancedMarkerElement} = await google.maps.importLibrary("marker");

  // The map, centered at asse
  map = new Map(document.getElementById("map"), {
    zoom: 14,
    center: position,
    //mapid must be created in google maps devops 
    //must also be vector
    mapId: "f784cacb8ed0ec4c",
    streetViewControl: false,

  });
  
  //@ts-ignore
  featureLayer = map.getFeatureLayer("LOCALITY");

  // Define a style with purple fill and border.
  //@ts-ignore
  const featureStyleOptions = {
    strokeColor: "#810FCB",
    strokeOpacity: 1.0,
    strokeWeight: 3.0,
    fillColor: "#810FCB",
    fillOpacity: 0.5,
  };

  // Apply the style to a single boundary.
  //@ts-ignore
  featureLayer.style = (options) => {
    if (options.feature.placeId == "ChIJcbtjQ5G_w0cR7hXie1KSXWw") {
      return featureStyleOptions;
    }
  };

  
  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "center",
  });
}

initMap();