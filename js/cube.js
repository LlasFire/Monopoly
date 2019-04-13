let modal = document.getElementById('modal');
let btn = document.getElementById('goRoll');
let closeSpan = document.getElementById('close');

btn.addEventListener('click', () => {
    modal.style.display = "block";
});

closeSpan.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if(event.target == modal) {
       modal.style.display = "none"; 
    }   
});

/* 
Дальнейшие переменные и код относятся к библиотеке THREE JS и 
предназначены для работы с 3D графикой
*/

let myWindow = document.getElementById('modalContent');
let canvas = document.getElementById('canvas');
let renderer;
let scene;
let camera;
let light;
let cubeGeometry;
let cubeMaterial;
let cube;
let cubeMotion = {
    positionX : 0,
    positionY : 0,
    positionZ : 0,
    rotationX : 0,
    rotationY : 0,
    rotationZ : 0
};


let gui = new dat.GUI({ autoPlace: false });

let customContainer = document.getElementById('gui_container');
customContainer.appendChild(gui.domElement);

    gui.add(cubeMotion, 'positionX').min(-8).max(8).step(0.1);
    gui.add(cubeMotion, 'positionY').min(-8).max(8).step(0.1);
    gui.add(cubeMotion, 'positionZ').min(-8).max(8).step(0.1);
    gui.add(cubeMotion, 'rotationX').min(-0.5).max(0.5).step(0.0001);
    gui.add(cubeMotion, 'rotationY').min(-0.5).max(0.5).step(0.0001);
    gui.add(cubeMotion, 'rotationZ').min(-0.5).max(0.5).step(0.0001);

let dontClick = 0;

btn.addEventListener('click', () => {
    dontClick++;
    let height = myWindow.offsetHeight;
    let width = myWindow.offsetWidth;

    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height);

    renderer = new THREE.WebGLRenderer( {canvas: canvas} );
    renderer.setClearColor(0x000000);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000);
    camera.position.set(0, 0, 1000);

    light = new THREE.AmbientLight(0xffffff);
    scene.add(light);

    cubeGeometry = new THREE.CubeGeometry(300, 300, 300, 12, 12, 12);
    cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: THREE.FaceColors });

    for (let i = 0; i < cubeGeometry.faces.length; i++) {
        cubeGeometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
        
    }
    
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;
    scene.add(cube);




    function loopScene(click){
       
        cube.position.x += cubeMotion.positionX;
        cube.position.y += cubeMotion.positionY;
        cube.position.z += cubeMotion.positionZ;
        cube.rotation.x += cubeMotion.rotationX;
        cube.rotation.y += cubeMotion.rotationY;
        cube.rotation.z += cubeMotion.rotationZ;
         
        
        if(click <= 1){
            requestAnimationFrame(function() { loopScene(click); });
            renderer.render(scene, camera); 
        } 
    }
    loopScene(dontClick);
});