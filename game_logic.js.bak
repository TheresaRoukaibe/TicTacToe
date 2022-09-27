const tiles = Array.from(document.querySelectorAll('.tile'));
let current_player = 0;                                    //The player starts by default

tiles.forEach((tile,index) => {
	tile.addEventListener('click', () => changeTile(tile, index));
});

const changeTile = (tile, index) => {
	if(current_player == 0) {                             //computer is yellow user is red
	tile.style.backgroundImage="url(assets/red.png)";
	current_player=1;
	}else{
		tile.style.backgroundImage="url(assets/yellow.png)";
		current_player=0;
	}
}

