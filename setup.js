import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
    0.1, 10000);

const renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;

const cubeTextureLoader = new THREE.CubeTextureLoader();
const TextureLoader = new THREE.TextureLoader();
/*scene.background = cubeTextureLoader.setPath('/img/skybox3/').load([
    'right.png',
    'left.png',
    'top.png',
    'bottom.png',
    'front.png',
    'back.png'
]);*/

//OrbitControls
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update()

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild

export {scene, camera, renderer, orbit}