const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var DBO, PO, GO;
var world;

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	DBO = new Dustbin(1200, 650);
	PO = new Paper(200, 450, 40);
	GO = new Ground(width / 2, 670, width, 20);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
			width: 1500,
			height: 700,
			wireframes: false
		}
	});

	Engine.run(engine);
	Render.run(render);

}
function draw() {
	rectMode(CENTER);
	background(0);

	DBO.display();
	PO.display();
	GO.display();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(PO.body, PO.body.position, { x: 85, y: -85 });
	}
}





