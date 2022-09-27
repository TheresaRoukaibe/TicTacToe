const tiles = Array.from(document.querySelectorAll('.tile'));
const replay = document.getElementById("myButton");
let current_player = 0;                                    //The player starts by default
let game_status = 1;
let board_state = new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1);
let winning_states = [];


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

const resetGame = (e) => {
	current_player=0;
	tiles.forEach((tile,index) => {
	tile.style.backgroundImage="none";
});
}

replay.addEventListener("click", resetGame);




