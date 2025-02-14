$(function () {
  // initialize canvas and context when able to
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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    //TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200, 700, 200, 10, "green");
    createPlatform(500, 600, 200, 10, "red");
    createPlatform(200, 500, 200, 10, "yellow");
    createPlatform(800, 500, 200, 10, "black");
    createPlatform(1100, 600, 200, 10);
    createPlatform(1100, 400, 200, 10);
    createPlatform(500, 400, 200, 10);
    createPlatform(100, 400, 100, 10);
    createPlatform(1000, 700, 100, 10);
    createPlatform(200, 300, 200, 10);
    createPlatform(500, 200, 200, 10);
    createPlatform(900, 300, 400, 10);
    createPlatform(1300, 200, 400, 10);
    createPlatform(100, 200, 100, 10);


    // TODO 3 - Create Collectables
    ccreateCollectable("steve", 1300, 200, 0.7);
    createCollectable("diamond", 200, 170, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
    createCannon("top", 200, 100, 2000);
    createCannon("top", 400, 100, 2000);
    createCannon("top", 600, 100, 2000);
    createCannon("top", 800, 100, 2000);
    createCannon("top", 1100, 100, 2000);
    createCannon("right", 300, 2000);
    createCannon("right", 600, 2000);
    createCannon("right", 400, 2000);
    createCannon("right", 100, 2000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
