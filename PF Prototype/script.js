//3:09:30



maptilersdk.config.apiKey = 'zRoK4dMSIAH71Y8FJ5OU';

const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element in which the SDK will render the map
    style: maptilersdk.MapStyle.STREET,
    center: [120.58812, 15.17882], // starting position [lng, lat]
    zoom: 13.7 // starting zoom 17
});

const marker = new maptilersdk.Marker({
    color: 'black', // Marker color
    // size: 'small', Marker size (small, medium, or large)
    symbol: 'marker' // Marker icon (you can use a custom image URL here)
})
    .setLngLat([120.58812, 15.17882]) // Replace with your center coordinates
    .addTo(map);

const anotherMarker = new maptilersdk.Marker({
    color: 'cyan', // Marker color
    // size: 'small', Marker size (small, medium, or large)
    symbol: 'marker' // Marker icon (you can use a custom image URL here)
})
    .setLngLat([120.60818, 15.16203]) // Replace with the coordinates for your new marker
    .addTo(map);

const geojsonData = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: [
                    [120.58812, 15.17882], // First marker coordinates
                    [120.60818, 15.16203], // Second marker coordinates
                ],
            },
        },
    ],
};

map.addSource('line-source', {
    type: 'geojson',
    data: geojsonData,
});

// Create a layer to style the line
map.addLayer({
    id: 'line-layer',
    type: 'line',
    source: 'line-source',
    layout: {
        'line-join': 'round',
        'line-cap': 'round',
    },
    paint: {
        'line-color': 'blue', // Line color
        'line-width': 3,       // Line width
    },
});


    // 120.589245, 15.1782 [longitude, latitude] EXACT LOCATION OF DAU TERMINAL
    // 120.60818, 15.16203 [longitude, latitude] EXACT LOCATION OF MARQUEE TERMINAL

