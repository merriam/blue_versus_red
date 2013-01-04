window.onload = function() {
	//start crafty
	Crafty.init(400, 320);
	Crafty.background("yellow");     
	// Crafty.canvas.init();
	
	var eRed = Crafty.e("2D, DOM, Color, Blueable")
				.color("red")
				.attr({w: 50, h: 50, x:170, y:200}),
		eBlue = Crafty.e("2D, DOM, Multiway, Color, Collision")
				.multiway(3, {UP_ARROW: -90, DOWN_ARROW: 90, RIGHT_ARROW: 0, LEFT_ARROW: 180})
				.color("blue")
				.attr({w: 60, h: 60, x:70, y:200})
				.onHit("Blueable", 
					function () { this.attr({x: 70, y:200}); }
				);
	
};
