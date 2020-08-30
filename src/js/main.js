// Global constants
const fov = 75;
const cameraZ = 10;
const nearPlane = 0.1;
const farPlane = 999.99;
const lightGray = "#E5E5E5";
const width = window.innerWidth;
const height = window.innerHeight;
const aspectRatio = width / height;

let scene;
let mouse;
let camera;
let renderer;
let geometry;
let material;
let raycaster;

function init() {
  // Initialize the scene
  scene = new THREE.Scene();

  // Initialize the camera
  camera = new THREE.PerspectiveCamera(fov, aspectRatio, nearPlane, farPlane);
  camera.position.z = cameraZ;

  // Setup the renderer - Using WebGL renderer here, there are others also!
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });

  // Set a clear colour (background colour) on the renderer
  renderer.setClearColor(lightGray);

  // Set renderer size
  renderer.setSize(width, height);

  // Append the renderer to the DOM
  document.body.appendChild(renderer.domElement);
}

function drawShape() {
  let cubeXLength = 1;
  let cubeYLength = 1;
  let cubeZLength = 1;
  let cubeColour = 0x145374;

  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();
  geometry = new THREE.BoxGeometry(cubeXLength, cubeYLength, cubeZLength);
  material = new THREE.MeshLambertMaterial({
    color: cubeColour,
  });

  // Randomly generate cubes on the screen
  let meshX = -10;
  const count = 15;
  for (let i = 0; i < count; ++i) {
    let mesh = new THREE.Mesh(geometry, material);

    mesh.position.x = (Math.random() - 0.5) * 10;
    mesh.position.y = (Math.random() - 0.5) * 10;
    mesh.position.z = (Math.random() - 0.5) * 10;

    scene.add(mesh);
    meshX++;
  }

  // Add a point light to the scene
  const white = 0xffffff;
  const intensity = 1;
  const distance = 1000;
  const x = 0;
  const y = 0;
  const z = 0;

  const light = new THREE.PointLight(white, intensity, distance);
  const lightFar = new THREE.PointLight(white, intensity, distance);

  light.position.set(x, y, z);
  lightFar.position.set(x, y, z + 40);

  scene.add(light);
  scene.add(lightFar);

  render();
}

function render() {
  requestAnimationFrame(render);

  // Render the scene
  renderer.render(scene, camera);
}

function onMouseHover(event) {
  event.preventDefault();
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  let intersections = raycaster.intersectObjects(scene.children, true);
  for (let i = 0; i < intersections.length; ++i) {
    this.tl = new TimelineMax();
    this.tl.to(intersections[i].object.scale, 1, {
      x: 2,
      ease: Expo.easeOut,
    });
    this.tl.to(intersections[i].object.scale, 0.5, {
      x: 0.5,
      ease: Expo.easeOut,
    });
    this.tl.to(intersections[i].object.position, 0.5, {
      x: 2,
      ease: Expo.easeOut,
    });
    this.tl.to(
      intersections[i].object.rotation,
      0.5,
      {
        y: Math.PI * 0.5,
        ease: Expo.easeOut,
      },
      "= -1.5"
    );
  }
}

init();
drawShape();

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Play animation upon clicking
window.addEventListener("mousemove", onMouseHover);
