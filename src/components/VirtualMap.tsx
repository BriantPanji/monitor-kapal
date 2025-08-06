'use client';

import { useState, useEffect } from 'react';


type Lintasan = 'A' | 'B' | null;
type Lintasan2 = 'a' | 'b';

interface VMapPoint {
  x: number;
  y: number;
}
interface VMapPointColor extends VMapPoint {
  color: string;
}
interface VMapPointId extends VMapPoint {
  id: number;
}

interface VMapPointColorId extends VMapPointId {
  color: 1 | 0; // 1 for green, 0 for red
}

const GRID_SIZE = 50; // 50px per cell
const GRID_ROWS = 5;
const GRID_COLS = 5;

const idColors = ['green', 'red'];

const buoys: Record<Lintasan2, VMapPointColorId[]> = {
  a: [
    { id: 1, x: 4.4, y: 3.15, color: 1 },
    { id: 2, x: 4.65, y: 3.15, color: 0 },
    { id: 3, x: 4.25, y: 2.625, color: 1 },
    { id: 4, x: 4.5, y: 2.625, color: 0 },
    { id: 5, x: 4.55, y: 2.055, color: 1 },
    { id: 6, x: 4.80, y: 2.055, color: 0 },
    { id: 7, x: 3.3, y: 0.75, color: 1 },
    { id: 8, x: 3.3, y: 0.5, color: 0 },
    { id: 9, x: 2.87, y: 0.75, color: 1 },
    { id: 10, x: 2.87, y: 0.5, color: 0 },
    { id: 11, x: 2.56, y: 0.75, color: 1 },
    { id: 12, x: 2.56, y: 0.5, color: 0 },
    { id: 13, x: 2.25, y: 0.75, color: 1 },
    { id: 14, x: 2.25, y: 0.5, color: 0 },
    { id: 15, x: 0.62, y: 1.6, color: 1 },
    { id: 16, x: 0.87, y: 1.6, color: 0 },
    { id: 17, x: 0.45, y: 2.3, color: 1 },
    { id: 18, x: 0.7, y: 2.3, color: 0 },
    { id: 19, x: 0.45, y: 3.065, color: 1 },
    { id: 20, x: 0.7, y: 3.065, color: 0 },
  ],
  b: [
    { id: 1, x: 0.75, y: 3.15, color: 1 },
    { id: 2, x: 0.5, y: 3.15, color: 0 },
    { id: 3, x: 0.925, y: 2.625, color: 1 },
    { id: 4, x: 0.675, y: 2.625, color: 0 },
    { id: 5, x: 0.6, y: 2.065, color: 1 },
    { id: 6, x: 0.35, y: 2.065, color: 0 },
    { id: 7, x: 1.925, y: 0.75, color: 1 },
    { id: 8, x: 1.925, y: 0.5, color: 0 },
    { id: 9, x: 2.25, y: 0.75, color: 1 },
    { id: 10, x: 2.25, y: 0.5, color: 0 },
    { id: 11, x: 2.6, y: 0.75, color: 1 },
    { id: 12, x: 2.6, y: 0.5, color: 0 },
    { id: 13, x: 2.925, y: 0.75, color: 1 },
    { id: 14, x: 2.925, y: 0.5, color: 0 },
    { id: 15, x: 4.4, y: 1.6, color: 1 },
    { id: 16, x: 4.15, y: 1.6, color: 0 },
    { id: 17, x: 4.57, y: 2.3, color: 1 },
    { id: 18, x: 4.32, y: 2.3, color: 0 },
    { id: 19, x: 4.57, y: 3.065, color: 1 },
    { id: 20, x: 4.32, y: 3.065, color: 0 }]
};


const startPoint: Record<Lintasan2, VMapPointColor> = {
  a: { x: 4.5, y: 4.5, color: 'red' },
  b: { x: 0.9, y: 4.5, color: 'green' },
}
const boatStartPoint: Record<Lintasan2, VMapPointId> = {
  a: { id: 1, x: 4.5, y: 4.5 },
  b: { id: 1, x: 0.55, y: 4.5 },
}



const imageBox: Record<Lintasan2, VMapPointColor[]> = {
  a: [{
    x: 0.85,
    y: 3.82,
    color: 'green'
  }, {
    x: 1.25,
    y: 4.2,
    color: 'blue'
  }],
  b: [{
    x: 4.4,
    y: 3.82,
    color: 'green'
  }, {
    x: 3.965,
    y: 4.2,
    color: 'blue'
  }]
}


export default function VirtualMap({ lintasan = 'A' }: { lintasan: Lintasan }) {

  let curLintasan = lintasan?.toLowerCase() as Lintasan2;


  const [markers, setMarkers] = useState([boatStartPoint[curLintasan]]);

  useEffect(() => {
    setMarkers([
      boatStartPoint[curLintasan],
      // contoh markers untuk path (lintasan A)
      // { id: 2, x: 4.5, y: 3.5 },
      // { id: 3, x: 4.525, y: 3 },
      // { id: 4, x: 4.325, y: 2.5 },
      // { id: 5, x: 4.66, y: 2.2 },
      // { id: 6, x: 4.69, y: 1.5 },
    ]);
  }, [curLintasan, lintasan]);



  return (
    <div className="rounded-md w-full max-w-full">
      <div className="relative w-full" style={ { aspectRatio: '1/1' } }>
        <svg
          viewBox={ `0 0 ${GRID_COLS * GRID_SIZE} ${GRID_ROWS * GRID_SIZE}` }
          className="bg-wk-secondary w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid */ }
          { [...Array(GRID_ROWS)].map((_, row) =>
            [...Array(GRID_COLS)].map((_, col) => (
              <rect
                key={ `${row}-${col}` }
                x={ col * GRID_SIZE }
                y={ row * GRID_SIZE }
                width={ GRID_SIZE }
                height={ GRID_SIZE }
                fill="none"
                stroke="#666"
                strokeWidth={ 0.5 }
              />
            ))
          ) }

          <rect
            x={ startPoint[curLintasan].x * GRID_SIZE - 18 }
            y={ startPoint[curLintasan].y * GRID_SIZE }
            width={ 18 }
            height={ 10 }
            fill={ startPoint[curLintasan].color }
            stroke="#111"
            strokeWidth={ 0.5 }
          />

          { imageBox[curLintasan].map((img, idx) => (
            <rect
              key={ `imaging-${curLintasan}-${idx}` }
              x={ img.x * GRID_SIZE - 10 }
              y={ img.y * GRID_SIZE - 5 }
              width={ 10 }
              height={ 5 }
              fill={ img.color }
              stroke="#111"
              strokeWidth={ 0.5 }
            />
          )) }

          {/* Paths */ }
          { markers.map((m1, idx) => {
            const m2 = markers[idx + 1];
            if (!m2) return null; // Skip if there's no next marker
            return (
              <line
                key={ `${m1.id}-${m2.id}` }
                x1={ m1.x * GRID_SIZE + GRID_SIZE / 100 }
                y1={ m1.y * GRID_SIZE + GRID_SIZE / 100 }
                x2={ m2.x * GRID_SIZE + GRID_SIZE / 100 }
                y2={ m2.y * GRID_SIZE + GRID_SIZE / 100 }
                stroke="#10a7b4"
                strokeWidth={ 1 }
                strokeDasharray="4,2"
              />
            );
          }) }

          {/* Anchor at startPoint.a position */ }
          <image
            x={ markers[markers.length - 1].x * GRID_SIZE - 9 }
            y={ markers[markers.length - 1].y * GRID_SIZE - 17.75 }
            height="18"
            width="18"
            href="/anchor.png"
            className="invert-50"
          />

          <text
            x={ GRID_ROWS / 2 * GRID_SIZE - 4 }
            y={ GRID_ROWS / 2 * GRID_SIZE + 4 }
            fontSize={ 12 }
            fill="aqua"
            fontWeight={ 700 }
            className="select-none"
          >
            { lintasan }
          </text>

          {/* Buoys */ }
          { buoys[curLintasan].map((marker) => (
            <circle
              key={ marker.id }
              cx={ marker.x * GRID_SIZE + GRID_SIZE / 100 }
              cy={ marker.y * GRID_SIZE + GRID_SIZE / 100 }
              r={ 2.5 }
              fill={ idColors[marker.color] || 'red' }
              stroke='#ccc'
              strokeWidth={ 0.25 }
            />
          )) }
        </svg>
      </div>
    </div>
  );
}
