'use client';
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';


const redIcon = new Icon({
    iconUrl: '/mark_loc.png',
    iconSize: [39, 39],
    iconAnchor: [19.5, 39],
});


// const mapTilerKeys = ["U6rASsnD66pPtU0WmVGB", "09C6pPzLTvswlTdHKaIn", "nWU24VjsXyJgG1t4slEd", "NdNJ1m1o2DxzW9NGLPcG", "JyWqTCEjkSpUB0HDgbue", "WZ0sdFIqkB9Op27P87FQ"];
// const mapboxKeys = ["pk.eyJ1IjoibW9zYWljc2VydmljZXMiLCJhIjoiY2w4ZGkzaTRmMDUzMzNwbnZ3cGw3N2t6MSJ9.Zbkp1mgAgfzBcmVhr4GG4A", "pk.eyJ1IjoiYm1pY2hlbHMiLCJhIjoiY2xpMzk4bXZiMjFycTN0cDlmMXgzYW51ayJ9.yKF8LEaBwb3BPGcujG3EpQ", "pk.eyJ1IjoieXJpZWl4IiwiYSI6ImNsc3J6ZW9hMjBqa2YycnMwMmhkaXY0bHQifQ.QtR_jFBuX04GFbnmot7yEg", "pk.eyJ1IjoiZnJhbnptYXQiLCJhIjoiY2xvdW04MXRrMGp1czJscnpzZXRtMmUwNSJ9.wTAtrL3MSHI-wnLaPaLD_Q", "pk.eyJ1IjoieW91cmVnb2luZ3RvZG9ncmVhdCIsImEiOiJjbHp4Z3h6YXMwcjJhMmtweHFkMjNhNGVvIn0.frJLiqLnISInCNjgV16kcw", "pk.eyJ1IjoibnVyYmFraXQiLCJhIjoiY2s2bDMxNHV4MDl1bzNvcGFtbzN4aW9oaiJ9.UJwM6VtXrk62p_s54jGU5A", ""]


export default function MapContent() {
    return (
        <div className="w-full min-h-full h-[50vh] flex items-center justify-center">
            <MapContainer center={ [-7.915046, 112.588974] } zoom={ 20 } scrollWheelZoom={ false } dragging={ false } minZoom={ 0 } maxZoom={ 22 } doubleClickZoom={ false } className="rounded-md w-full h-[50vh]">
                <TileLayer
                    url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibnVyYmFraXQiLCJhIjoiY2s2bDMxNHV4MDl1bzNvcGFtbzN4aW9oaiJ9.UJwM6VtXrk62p_s54jGU5A"
                    attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                    maxZoom={ 22 }
                    tileSize={ 512 }
                    zoomOffset={ -1 }
                // url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=U6rASsnD66pPtU0WmVGB"
                // attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a>'
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={ [-7.915046, 112.588974] } icon={ redIcon }></Marker>
            </MapContainer>
        </div>
    )
}
