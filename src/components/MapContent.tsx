'use client';

import Map, { Source, Layer, Marker } from 'react-map-gl';
import { useMemo } from 'react';
import type { FeatureCollection } from 'geojson';
import type { CircleLayerSpecification, FillLayer } from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibnVyYmFraXQiLCJhIjoiY2s2bDMxNHV4MDl1bzNvcGFtbzN4aW9oaiJ9.UJwM6VtXrk62p_s54jGU5A';

const CENTER = {
  latitude: -7.915042,
  longitude: 112.588883,
  bearing: 243,
};

const INITIAL_VIEW = {
  latitude: -7.915073,
  longitude: 112.588874,
};

const MARKER_POSITION = {
  latitude: -7.915105,
  longitude: 112.589012,
};



const GRID_CONFIG = {
  cellSize: 5, // meters
  cellCount: 10, // 10x10 grid = 50m x 50m
};

const METERS_TO_DEGREES = {
  latitude: 1 / 111_320,
  longitude: 1 / (111_320 * Math.cos(CENTER.latitude * Math.PI / 180)),
};

function rotateCoordinate(
  latitude: number,
  longitude: number,
  centerLatitude: number,
  centerLongitude: number,
  angleDegrees: number
): [number, number] {
  const angleRadians = (angleDegrees * Math.PI) / 180;
  const deltaX = longitude - centerLongitude;
  const deltaY = latitude - centerLatitude;

  const newLongitude = deltaX * Math.cos(angleRadians) - deltaY * Math.sin(angleRadians) + centerLongitude;
  const newLatitude = deltaX * Math.sin(angleRadians) + deltaY * Math.cos(angleRadians) + centerLatitude;

  return [newLongitude, newLatitude];
}


function createRotatedGrid(
  centerLatitude: number,
  centerLongitude: number,
  bearing: number
): FeatureCollection {
  const features = [];
  const { cellSize, cellCount } = GRID_CONFIG;
  const halfCells = cellCount / 2;

  for (let i = -halfCells; i < halfCells; i++) {
    for (let j = -halfCells; j < halfCells; j++) {
      // Calculate corner coordinates of each cell
      const lat0 = centerLatitude + i * cellSize * METERS_TO_DEGREES.latitude;
      const lon0 = centerLongitude + j * cellSize * METERS_TO_DEGREES.longitude;
      const lat1 = centerLatitude + (i + 1) * cellSize * METERS_TO_DEGREES.latitude;
      const lon1 = centerLongitude + (j + 1) * cellSize * METERS_TO_DEGREES.longitude;

      // Create polygon corners
      let corners = [
        [lon0, lat0],
        [lon1, lat0],
        [lon1, lat1],
        [lon0, lat1],
        [lon0, lat0],
      ];

      corners = corners.map(([lon, lat]) =>
        rotateCoordinate(lat, lon, centerLatitude, centerLongitude, -bearing)
      );

      features.push({
        type: 'Feature' as const,
        geometry: {
          type: 'Polygon' as const,
          coordinates: [corners],
        },
        properties: {},
      });
    }
  }

  return {
    type: 'FeatureCollection',
    features,
  };
}

const GRID_LAYER_STYLE: FillLayer = {
  id: 'grid-layer',
  type: 'fill',
  source: 'grid',
  paint: {
    'fill-color': '#000000',
    'fill-opacity': 0.05,
    'fill-outline-color': '#000000',
  },
};

const colorConfig = {
  red: '#ff0000',
  green: '#00ff00'
}

const listbuoy = [
  [-7.915142, 112.588939, 'red'],
  // [-7.9151345, 112.588935, 'green'],
  [-7.9151262, 112.5889310, 'green'],
  [-7.915158, 112.588908, 'red'],
  [-7.915150, 112.588904, 'green'],
  [-7.915166, 112.588880, 'red'],
  [-7.915158, 112.588876, 'green'],
];


// Create GeoJSON data for all buoys
const createBuoyGeoJSON = (): FeatureCollection[] => {
  return listbuoy.map(([latitude, longitude, color], index) => ({
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [longitude as number, latitude as number]
      },
      properties: { title: `buoy-${index}`, color: color as string }
    }]
  }));
};

// Create layer style for each buoy based on its color
const createBuoyLayerStyle = (id: number, color: string): CircleLayerSpecification => ({
  id: `point-${id}`,
  type: 'circle',
  source: `buoy-data-${id}`,
  paint: {
    'circle-radius': 3,
    'circle-color': colorConfig[color as keyof typeof colorConfig],
    'circle-stroke-width': 0.5,
    'circle-stroke-color': '#000000'
  }
});

const MAP_CONFIG = {
  zoom: 19.95,
  mapStyle: 'mapbox://styles/mapbox/streets-v12',
};




export default function MapGrid() {
  // Memoize the grid data to prevent recalculation on re-renders
  const gridData = useMemo(
    () => createRotatedGrid(CENTER.latitude, CENTER.longitude, CENTER.bearing),
    []
  );

  // console.log('Grid Data:', gridData.features.map(f => (f.geometry.coordinates[0])));
  
  // Memoize buoy data
  const buoyData = useMemo(() => createBuoyGeoJSON(), []);

  return (
    <div className="relative w-full !max-h-[50vh] flex items-center justify-center flex-col gap-2.5 pb-1">
      <h1>Map</h1>
      <Map
        initialViewState={ {
          latitude: INITIAL_VIEW.latitude,
          longitude: INITIAL_VIEW.longitude,
          zoom: MAP_CONFIG.zoom,
          bearing: CENTER.bearing,
        } }
        // scrollZoom={ false }
        cursor="default"
        // dragPan={ false }
        // doubleClickZoom={ false }
        // minZoom={ MAP_CONFIG.zoom }
        // maxZoom={ MAP_CONFIG.zoom }
        attributionControl={ false }
        antialias={ true }
        boxZoom={ false }
        dragRotate={ false }
        keyboard={ false }
        mapStyle={ MAP_CONFIG.mapStyle }
        mapboxAccessToken={ MAPBOX_ACCESS_TOKEN }
        style={ {
          minWidth: '100%',
          height: '100%',
          borderRadius: '0.5rem',
          aspectRatio: '1 / 1',
        } }
      >
        {/* Anchor marker */ }
        <Marker
          longitude={ MARKER_POSITION.longitude }
          latitude={ MARKER_POSITION.latitude }
          anchor="bottom"
        >
          <img
            src="/anchor.png"
            className="w-6 h-6 max-w-none object-contain"
            alt="Anchor marker"
          />
        </Marker>

        <Source id="grid" type="geojson" data={ gridData }>
          <Layer { ...GRID_LAYER_STYLE } />
        </Source>

        {/* Render all buoys from the listbuoy array */}
        {buoyData.map((buoyGeoJSON, index) => (
          <Source key={`buoy-source-${index}`} id={`buoy-data-${index}`} type="geojson" data={buoyGeoJSON}>
            <Layer {...createBuoyLayerStyle(index, listbuoy[index][2] as string)} />
          </Source>
        ))}
      </Map>
    </div>
  );
}
