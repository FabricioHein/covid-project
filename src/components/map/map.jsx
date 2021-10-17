import '../map/map.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';


const configGeo = {
    lat: 51.505,
    long: -0.09,
    zoom: 2
}

const GeoMap = (props) => {

    const [config] = useState(configGeo);
    const [dataCovid, setDataCovid] = useState('')

    useEffect(
        () => {
            setMapa()

        }, [config]
    )

    // useEffect(

    //     () => {
    //         fetch("https://coviddata.github.io/coviddata/v1/countries/stats.json")
    //             .then(response => response.json())
    //             .then(data => {
    //                 const country = data;
    //                 setDataCovid(country)

    //             })
    //     }, [dataCovid]

    // )

    function setMapa() {
        const map = L.map('map')
            .setView(
                [configGeo.lat, configGeo.long],
                configGeo.zoom)

        addLayerEsri(map);
        geodata(map)


    }
    function addLayerEsri(map) {
        /* Base Layers */
        let esri_image = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        }).addTo(map);

        let esri_terrain = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme, and NPS',
            maxZoom: 13
        });

        let baseLayers = {
            "ESRI World Imagery": esri_image,
            "ESRI World Terrain": esri_terrain,
        };

        L.control.layers(baseLayers).addTo(map);


    }
    function geodata(map) {

        function onEachFeature(feature, layer) {
            // does this feature have a property named popupContent?
            if (feature.properties && feature.properties.popupContent) {
                layer.bindPopup(feature.properties.popupContent);
            }
        }

        var geojsonFeature = {
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-104.99404, 39.75621]
            }
        };

        L.geoJSON(geojsonFeature, {
            onEachFeature: onEachFeature
        }).addTo(map);


    }

    return (
        <div>
            <div id={props.div || 'map'} className="map">

            </div>
        </div>


    )
}

export default GeoMap