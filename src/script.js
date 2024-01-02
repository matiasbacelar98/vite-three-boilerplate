import * as THREE from 'three';

// Config Scene
const scene = new THREE.Scene();

// Config Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5; // Update camera pos

// Config renderer
const renderer = setupRenderer();

// Build Cube_MESH & add to SCENE
const cubeMesh = buildCubeMesh();
scene.add(cubeMesh);

// Run 3D APP
function run() {
  // Loop (60 FPS)
  requestAnimationFrame(run);

  // Rotate cube
  rotateCube(cubeMesh);

  renderer.render(scene, camera);
}

run();

// Utilities
function setupRenderer() {
  const canvas = document.querySelector('canvas.threejs');
  const renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);
  return renderer;
}

function buildCubeMesh() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  return cube;
}

function rotateCube(cubeMesh) {
  cubeMesh.rotation.x += 0.01;
  cubeMesh.rotation.y += 0.01;
}
