import { Vector3 } from 'three';
import * as THREE from 'three';
import { scene, camera, renderer } from './setup.js';


//Real-Data
const REAL = {
  earthRadius: 1,
  earthTilt: 1,
  moon: {radius: 0.273, distance: 60.3}, // 1 = Earth Radii
  sun:  { radius: 109.2, distance: 23481 },  // 1 = Earth radii
};

let SCALE = 1
const toScene = (realUnits) => realUnits * SCALE;


//Earth
const earthTexture = TextureLoader.load('img/earthTexture.png');
earthTexture.colorSpace = THREE.SRGBColorSpace;
const earthGeomerty = new THREE.SphereGeometry(EarthRadius);
const earthMaterial = new THREE.MeshStandardMaterial({color: 0xFFFFFF, map: earthTexture}); 
const Earth = new THREE.Mesh(earthGeomerty, earthMaterial);
scene.add(Earth);
Earth.rotation.set(0,0,0.4101524)
Earth.receiveShadow = true;
Earth.castShadow = true;

//Sun
const sunGeomerty = new THREE.SphereGeometry(EarthRadius*109)
const sunMaterial = new THREE.MeshBasicMaterial({color: 0xFCE570})
const sun = new THREE.Mesh(sunGeomerty, sunMaterial);
scene.add(sun)
sun.position.set(-EarthToSun, 0, 0)

//Moon
const moonGeomerty = new THREE.SphereGeometry(EarthRadius/3.7);
const moonMaterial = new THREE.MeshStandardMaterial({color: 0x8F8F8F});
const Moon = new THREE.Mesh(moonGeomerty, moonMaterial);
scene.add(Moon)
Moon.castShadow = true;
Moon.receiveShadow = true;


//Light
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);


//const Dlight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
//scene.add(Dlight);
//Dlight.position.set(100,0,0);
//Dlight.rotation.set(0,0,1/2);
//Dlight.castShadow = true;

const pointLight = new THREE.PointLight(0xFFFFFF, 1, 0, 0);
scene.add(pointLight);
pointLight.castShadow = true;
pointLight.position.set(-EarthToSun,0,0);

const spotLightHelper = new THREE.PointLightHelper(pointLight);
scene.add(spotLightHelper);

//const DLightHelper = new THREE.DirectionalLightHelper(Dlight, 5);
//scene.add(DLightHelper);


camera.position.z = 20;
camera.rotation.z = 0.4101524

function animate( time ) {
  timeAcc += time;

  if (timeAcc >= interval) {
    moonRad += step;
    timeAcc -= interval

    Moon.position.set((Math.trunc(Math.sin(moonRad) * 10000) / 10000) * EarthToMoon, 0, (Math.trunc(Math.cos(moonRad) * 10000) / 10000) * EarthToMoon);
  } 
  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

    
