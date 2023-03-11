function makeMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3JsaWxseSIsImEiOiJjbGY0YnBjbXEwcmd0M3NvNDQ0NzJrY243In0.y62PDs53srP8p8sj90g2XA';
    //set bound to United States of America
    const bounds = [
        [-160.158985, 21.880392], //Hawaii
        [-67.078542, 44.780716] // Maine
    ];

    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-101.31857987634056, 39.916663896170874], // starting position [lng, lat]
        zoom: 3, // starting zoom
        projection: 'mercator'
        //maxBounds: bounds // boundary
    });

    map.addControl(new mapboxgl.NavigationControl());
}
