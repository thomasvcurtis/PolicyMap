function makeMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3JsaWxseSIsImEiOiJjbGY0YnBjbXEwcmd0M3NvNDQ0NzJrY243In0.y62PDs53srP8p8sj90g2XA';
    //set bound to United States of America
    const bounds = [21.880392, -160.158985], //Hawaii
                   [44.780716, -67.078542];  // Maine
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });

    const mapDiv = document.getElementById('map');
    if (mapDiv.style.visibility === true) map.resize();
}
