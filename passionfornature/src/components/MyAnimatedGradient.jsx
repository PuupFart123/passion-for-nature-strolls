import React from 'react';
import MeshGradientWebGL from './MeshGradientWebGL';

// Gradient configuration
const meshGradientConfig = {
  colors: [
    '#008015',
    '#b3c491',
    '#084e23',
    '#497ee8',
    '#1d8b79',
    '#a47dcc',
    '#e7c0c0'
  ],
  numPoints: 7,
  animate: true,
  width: 900,
  height: 500
};

function MyAnimatedGradient() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <MeshGradientWebGL {...meshGradientConfig} />
    </div>
  );
}

export default MyAnimatedGradient; 