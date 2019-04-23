var array_mem = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var vals_mem = [];
var mem_tile_id = [];
var flip_tiles = 0;
var count = 0;





Array.prototype.memory_tile_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function newBoard(){
	flip_tiles = 0;
	var output = '';
    array_mem.memory_tile_shuffle();
	for(var i = 0; i < array_mem.length; i++){
		output += '<div id="tile_'+i+'" onclick="memoryFlipTile(this,\''+array_mem[i]+'\')"></div>';
	}
	document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipTile(tile,val){
	
	if(tile.innerHTML == "" && vals_mem.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(vals_mem.length == 0){
			vals_mem.push(val);
			mem_tile_id.push(tile.id);
		} else if(vals_mem.length == 1){
			vals_mem.push(val);
			mem_tile_id.push(tile.id);
			if(vals_mem[0] == vals_mem[1]){
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
				if(count == 5){
					alert("You lose! Try again!");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
					count=0;
				} 

				function flip2Back(){
					
				    // Flip the 2 tiles back over
				    var tile1 = document.getElementById(mem_tile_id[0]);
				    var tile2 = document.getElementById(mem_tile_id[1]);
				    tile1.style.background = 'url(anis_photo.jpg) no-repeat';
            	    tile1.innerHTML = "";
				    tile2.style.background = 'url(anis_photo.jpg) no-repeat';
            	    tile2.innerHTML = "";
				    // Clear both arrays
				    vals_mem = [];
            	    mem_tile_id = [];
				}
				setTimeout(flip2Back, 800);

				
			}

		}
	}
}
