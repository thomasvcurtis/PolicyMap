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
        style: 'mapbox://styles/crlilly/clf4ap806000601qdyny9z6kw', // style URL
        center: [-101.31857987634056, 39.916663896170874], // starting position [lng, lat]
        zoom: 3, // starting zoom
        projection: 'mercator'
        //maxBounds: bounds // boundary
    });

    map.addControl(new mapboxgl.NavigationControl());
    
    map.on('click', (event) => {
        const features = map.queryRenderedFeatures(event.point, {
            layers: ['temp-data']
        });
        if (!features.length) {
            return;
        }
        const feature = features[0];
        console.log(feature);
        document.getElementById("tagElement").click();
        const title = feature.properties.title;
        const description = feature.properties.description;
        const url = feature.properties.URL;
        document.getElementById("Current_Petition").innerHTML =
        `<h4>${title}</h4>
        <p>${description}</p>
        <p><a href="${url}">Link to the petition</a></p>
        `;
    });
}

