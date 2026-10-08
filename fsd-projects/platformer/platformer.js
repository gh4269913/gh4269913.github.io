$(function () {
   //initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(750, 0, 10, 200);
  createPlatform(600, 400, 400, 20, "pink");
    createPlatform(0, 300, 200, 30);
  createPlatform(600, 300, 100, 0, "gray");
  createPlatform(300,400 , 200, 10);
 createPlatform(300, 250, 100, 20, "black");
  createPlatform(1000,300 , 200, 0);
 createPlatform(1000, 300, 100, 0, "red");
  createPlatform(1200,650 , 200, 10);
 createPlatform(650, 300, 100, 0, "black");
createPlatform(400,1000 , 200, 10);
 createPlatform(1000, 520, 200, 20, "black");
createPlatform(200, 0, 10, 200);
  createPlatform(600, 100, 50, 10, "pink");
    // TODO 3 - Create Collectables
    createCollectable("steve", 350, 350);
createCollectable("diamond", 100, 170, 0.5, 0.7);

createCollectable("steve", 350, 100);
createCollectable("diamond", 200, 170, 0.5, 0.7);
createCollectable("steve", 1350, 50);
createCollectable("diamond", 600, 250, 0.5, 0.7);
    
    // TODO 4 - Create Cannons
createCannon("bottom", 500, 4000);
createCannon("right", 200, 1000);
createCannon("side", 300, 4000);
createCannon("right", 200, 3000);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
