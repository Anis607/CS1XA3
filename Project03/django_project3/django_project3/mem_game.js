var array_mem = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var vals_mem = [];
var mem_tile_id = [];
var flip_tiles = 0;
var count = 0;
var GameScore;
var highscores = [0,0];
//Declaring variables. Array_mem is what the cards will be.

//This function basically shuffles the array
Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
//This function creates the new board, checks for clicks and outputs the cards.
function newBoard(){
	flip_tiles = 0;
	var output = '';
    array_mem.memory_tile_shuffle();
	for(var i = 0; i < array_mem.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+array_mem[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
//This function flips the tile 
function memoryFlipTile(tile,val){
	//This checks basically makes a new card with a white interface as the background (#FFF) and puts the letter in once you flip it.
	if(tile.innerHTML == "" && vals_mem.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		// checks to see if the length is 0
		if(vals_mem.length == 0){
			vals_mem.push(val);
			mem_tile_id.push(tile.id);
		} 
		//checks to see if the vals_mem is 1, and pushes the card value
		else if(vals_mem.length == 1){
			vals_mem.push(val);
			mem_tile_id.push(tile.id);
			//If the tiles are equal
			if(vals_mem[0] == vals_mem[1]){
				//Keeps count of how manu
				flip_tiles += 2;
				// Clear both arrays
				vals_mem = [];
            	mem_tile_id = [];
				// Check to see if the whole board is cleared
				if(flip_tiles == array_mem.length){
					alert("Yay! You've won! Press Ok to play again.");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			}

			else {
				count+=1;
				//This is used to check if the user has committed 5 incorrect matches and refreshes the board.
				if(count == 10){
					alert("You lose! Try again!");
					document.getElementById('memory_board').innerHTML = "";
					count=0;
					newBoard();

				} 
				//This function basically flips the cards back over if their was no match
				function flip2Back(){
					
				    // Flip the 2 tiles back over
				    var tile1 = document.getElementById(mem_tile_id[0]);
				    var tile2 = document.getElementById(mem_tile_id[1]);
				    //Puts back my custom phto
				    tile1.style.background = 'url(anis_photo.jpg) no-repeat';
            	    tile1.innerHTML = "";
				    tile2.style.background = 'url(anis_photo.jpg) no-repeat';
            	    tile2.innerHTML = "";
				    // Clear both arrays
				    vals_mem = [];
            	    mem_tile_id = [];
				}
				//Time delay
				setTimeout(flip2Back, 800);
			}

		}
	}
}
/*
ctx.textAlign = "right";
ctx.textBaseline = "middle";
ctx.fillStyle = "white"
ctx.font = TEXT_SIZE 
ctx.fillText(canv.width - , canv.height * 0.75);
*/
