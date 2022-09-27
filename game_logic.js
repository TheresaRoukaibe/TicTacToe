const tiles = Array.from(document.querySelectorAll('.tile'));
const replay = document.getElementById("myButton");
const help_text = document.getElementById("user-help");
let current_player = 0;                                    //The player starts by default
let game_status = 1;
let board_state = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
let click_counter =0;
 const winning_states = [
 [0, 1, 2],
 [3, 4, 5],    
 [6, 7, 8],
 [0, 4, 8],
 [2, 4, 6],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8]
];

const startGame = () => {
tiles.forEach((tile,index) => {
	tile.addEventListener('click', () => changeTile(tile, index));
});

}

const changeTile = (tile, index) => {
	help_text.innerText = "Game has started!"; 
	const my_element = tile.id;
	const my_element_id = parseInt(my_element);
	board_state[my_element_id] = current_player;
for(let i=0; i< winning_states.length; i++){
		const options = winning_states[i];
		if(board_state[options[0]]!= -1 && board_state[options[0]]==board_state[options[1]] && board_state[options[1]] == board_state[options[2]]){
			if(current_player==0){
				help_text.innerText = "You won! We are impressed";
			}else{
				help_text.innerText = "How does it feel to lose to a bot?";
			}
		}
	}
	if(current_player == 0) {                             //computer is yellow user is red
	tile.style.backgroundImage="url(assets/red.png)";
	current_player=1;
	}else{
		tile.style.backgroundImage="url(assets/yellow.png)";
		current_player=0;
	}
	
	
}


const resetGame = (e) => {
	game_status=1;
	current_player=0;
	help_text.innerText = "Click on a space to begin playing against our bot!"; 
	tiles.forEach((tile,index) => {
	tile.style.backgroundImage="none";
});
 for(let i=0; i< board_state.length; i++){
            board_state[i] = -1;
        }
}

replay.addEventListener("click", resetGame);
startGame();

