// scene container element ------------------------------------------------------------------------
let container = document.getElementById('container');

// THREE objects  ---------------------------------------------------------------------------------
let camera, scene, renderer;
let board;
let clock = new THREE.Clock();

function animate() {
	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

// initialize the physics demo --------------------------------------------------------------------
var initScene = function () {
	// build the 3d world
	buildRenderer();
	scene = new THREE.Scene();
	buildCamera();
	makeBoard();

	// start
	animate();
};

// build the WebGL renderer -----------------------------------------------------------------------
var buildRenderer = function () {
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.shadowMapSoft = true;
	renderer.shadowMapAutoUpdate = true;

	container.appendChild(renderer.domElement);
};

// build the THREE camera -------------------------------------------------------------------------
var buildCamera = function () {
	camera = new THREE.PerspectiveCamera(
		50,
		window.innerWidth / window.innerWidth,
		1,
		10000
	);
	// move camera up and back, and point it down at the center of the 3d scene
	camera.position.z = 800;
	camera.position.y = 200;
	camera.lookAt(new THREE.Vector3(0, 0, 0));
};

// build the table plane and rotate it to be flat ------------------------------------------------
const makeBoard = function () {
	var boardGeometry = new THREE.PlaneGeometry(650, 800, 10, 10);
	const boardMaterial = new THREE.MeshBasicMaterial({
		color: 0xaaaf33,
		side: THREE.DoubleSide,
	});

	board = new THREE.Mesh(boardGeometry, boardMaterial);
	board.rotation.x = -Math.PI / Math.PI;
	board.receiveShadow = true;
	board.castShadow = true;

	scene.add(board);
};
initScene();
