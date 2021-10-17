import '../map/map.css'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import { useEffect, useState, useRef } from 'react';
import configGeo from '../../config/map';
import axios from 'axios';

const GeoMap = () => {

    const mapContainer = useRef();

    const [config] = useState(configGeo);
    const [country, setCountry] = useState([]);
    const [dataCovid, setDataCovid] = useState([]);
    const [mapState, setMapState] = useState('')

   

    useEffect(() => {
        const map = L.map(mapContainer.current)
            .setView(
                [config.lat, config.long],
                config.zoom);     
               
            addLayerEsri(map)    
                         
       return () => map.remove();

    }, [country, config])

    useEffect(() => {

        const axioCountry = async () => {

            const response = await axios('https://datahub.io/core/geo-countries/r/countries.geojson');
            setCountry(response.data);

        };

        const axioDataCovid = async () => {

            const response = await axios('https://coviddata.github.io/coviddata/v1/countries/stats.json');
            setDataCovid(response.data);

        };

        axioCountry();

        axioDataCovid();


    }, []);



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
        L.geoJson(country, {
            onEachFeature: countryOnEachFeatureFunction,

        }).addTo(map);

    }

    function countryOnEachFeatureFunction(feature, layer) {

        let name = feature.properties.ADMIN
        dataCovid.forEach(element => {

            if (name === element.country.name) {

                const infocovid = dataCovid.find(country => country.country.name === `${name}`);

                for (infocovid.date in infocovid.dates) {
                    // console.log(`${infocovid} - ${infocovid.dates[infocovid.date]} cases`);

                    layer.bindPopup(`
                    <div class='card-body'>
                       
                    <div class='title-poup'>
                    <h1> ${name} 
    
                    </h1>
                    </div>
                    <div  class='content-poup'>
                       
                       <ul>  
                       <span> Date: </span>
                       
                       ${infocovid.date
                        .toLocaleString('en-IN')} 
                       </ul>
                       <ul>  
                       <span> Cases: </span>
                       
                       ${infocovid.dates[infocovid.date].cumulative.cases
                        .toLocaleString('en-IN')}
                        </ul>
                        <ul> 
                        <ul>  
                        <span> Recoveries: </span>
                        
                        ${infocovid.dates[infocovid.date].cumulative.recoveries
                            .toLocaleString('en-IN')
                            }
                          </ul>
                    
                        <span> Deaths: </span>
                        
                        ${infocovid.dates[infocovid.date].cumulative.deaths
                            .toLocaleString('en-IN')

                            }
                          </ul>
                   

                       
    
                     </div>  
                     
                     <div class='footer-poup'>
                     source: 
                     https://coviddata.github.io/coviddata

                     </div>
    
                </div>
                
                
                `);

                }


            }


        });
        


    }

    return (
        <div>

            <div ref={el => mapContainer.current = el} className="map">

            </div>
        </div>


    )
}

export default GeoMap