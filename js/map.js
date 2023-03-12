function makeMap() {
    // MapBox API Access Token.
    mapboxgl.accessToken = 'pk.eyJ1IjoiY3JsaWxseSIsImEiOiJjbGY0YnBjbXEwcmd0M3NvNDQ0NzJrY243In0.y62PDs53srP8p8sj90g2XA';

    // Creates and declares a map object to be used via the MapBox API.
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Style created using a dataset comprised of information collected on various petitions.
        style: 'mapbox://styles/crlilly/clf4ap806000601qdyny9z6kw', // Style URL.
        center: [-101.31857987634056, 39.916663896170874], // Starting position [lng, lat].
        zoom: 3, // Starting zoom.
        projection: 'mercator' // How the map presents itself.
    });

    // Allows users to control the map via on-screen controls.
    map.addControl(new mapboxgl.NavigationControl());
    
    // This click event allows the changing of the sidebar to view the current petition.
    map.on('click', (event) => {
        // Acquires the required data in a JSON-like format.
        const features = map.queryRenderedFeatures(event.point, {
            layers: ['enviro-data']
        });
        if (!features.length) {
            return;
        }
        // Takes the clicked-on object and converts it into an JSON-like Object that can be manipulated.
        const feature = features[0];
        
        // Selects the "Current Petition" window.
        document.getElementById("tagElement").click();

        // Grabs the necessary information from the JSON-like Object.
        const title = feature.properties.title;
        const description = feature.properties.description;
        const url = feature.properties.URL;

        // Inserts the HTML into the Current Petition IDed div tags.
        document.getElementById("Current_Petition").innerHTML =
        `<h4>${title}</h4>
        <p>${description}</p>
        <p><a href="${url}">Link to the petition</a></p>
        `;
    });
}

