let modal = document.getElementById('modal');
let btn = document.getElementById('goRoll');
let closeSpan = document.getElementById('close');
let closeButton = document.getElementById('closed');
let cube = document.getElementById('cube');
let diceSwitch = true;

function closeModalWindow() {
    modal.style.display = "none";
}

function CubeView(value) {
    let front = document.getElementById('front').style;
    let bottom = document.getElementById('bottom').style;
    let right = document.getElementById('right').style;
    let imagePosition = {
        first: "-12px",
        second: "-190px",
        third: "-363px",
        fourth: "-542px",
        fifth: "-715px",
        sixth: "-894px"
    };
    
    switch(value)
	{
		case 1:
            front.backgroundPositionX = imagePosition.first;
            bottom.backgroundPositionX = imagePosition.fifth;
            right.backgroundPositionX = imagePosition.third;
		    break;
		case 2:
            front.backgroundPositionX = imagePosition.second;
            bottom.backgroundPositionX = imagePosition.sixth;
            right.backgroundPositionX = imagePosition.fourth;
		    break;
		case 3:
            front.backgroundPositionX = imagePosition.third;
            bottom.backgroundPositionX = imagePosition.second;
            right.backgroundPositionX = imagePosition.first;
		    break;
		case 4:
            front.backgroundPositionX = imagePosition.fourth;
            bottom.backgroundPositionX = imagePosition.first;
            right.backgroundPositionX = imagePosition.second;
            break;
		case 5:
            front.backgroundPositionX = imagePosition.fifth;
            bottom.backgroundPositionX = imagePosition.first;
            right.backgroundPositionX = imagePosition.fourth;
            break;
		case 6:
            front.backgroundPositionX = imagePosition.sixth;
            bottom.backgroundPositionX = imagePosition.fourth;
            right.backgroundPositionX = imagePosition.second;
            break;
	}
}

btn.addEventListener('click', () => {
    modal.style.display = "block";
    cube.style.animation = "spincube 2s infinite linear";
    diceSwitch = true;
    closeButton.removeAttribute('disabled');
});

closeSpan.addEventListener('click', closeModalWindow());

window.addEventListener('click', (event) => {
    if(event.target == modal) {
        closeModalWindow(); 
    }   
});

closeButton.addEventListener('click', (event) => {
    
    if(diceSwitch) {

        cube.style.animation = "none";

        let rand = Math.floor(Math.random()*6)+1;

        setTimeout(closeModalWindow, 2000);

        document.getElementById('cubNumber').innerHTML = rand + " ходов";

        CubeView(rand);

        diceSwitch = false;
    }else {
        let target = event.target;
        target.disabled = "disabled";
    }
    
<<<<<<< HEAD
=======
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
>>>>>>> bc573f91f48b55b66de0856920241e41d2a42766
});