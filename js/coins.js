// JavaScript Document

/**
 * The Coin Class sets up each coin to have its 
 * own position on the screen
 */
function Coin(){
	//properties to let each coin store its own x/y position
	this.x = Math.floor(Math.random()*800);
	this.y = Math.floor(Math.random()*600);
	
	//propertythat keeps track of the item on the screen
	this.item_on_page;
	
	/**
	 *The create method puts a visual on the coin on the screen
	 */
	 this.create = function(){
		 this.item_on_page = document.createElement("img");
		 this.item_on_page.src="img/coin.png";
		 this.item_on_page.style.top = this.y + "px";
		 this.item_on_page.style.left = this.x + "px";
		 this.item_on_page.style.position="absolute";
		 
		 //put the img on the pages as a child of the body
		 document.body.appendChild(this.item_on_page);
		 
	 }//end function create()
	 
	 /**
	 *The destroy method puts a visual on the coin on the screen
	 */
	 this.destroy = function(){
		 
		 
	 }//end function destroy()
}