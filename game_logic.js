const tiles = Array.from(document.querySelectorAll('.tile'));          
const replay = document.getElementById("myButton");
const help_text = document.getElementById("user-help");
const user_scores = document.getElementById("user-score");
const bot_scores = document.getElementById("bot-score");
const tie_nums = document.getElementById("ties");
let current_player = 0;                                                           //The player starts by default, human is 0
let game_status = 1;
let board_state = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1);
let click_counter =0;
let score_bot =0;
let score_user =0; 
let ties =0;
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
	tile.addEventListener('click', () => makeMove(tile, index));
});

}

const makeMove = (tile, index) => {
	help_text.innerText = "Game has started!"; 
	if(current_player==0){                                                    
	const my_element = tile.id;
	const my_element_id = parseInt(my_element);
	if(board_state[my_element_id] != -1){
		help_text.innerText = "Choose an empty space";
	}else{
	board_state[my_element_id] = current_player;
	tile.style.backgroundImage="url(assets/red.png)";
	current_player=1;
	click_counter = click_counter+1;
	}
	}else{
		let ai_move = Math.floor(Math.random() * 8);
		while(board_state[ai_move] != -1){
		ai_move = Math.floor(Math.random() * 8);
		}
		board_state[ai_move] = current_player;
		const el = document.getElementById(ai_move);
		el.style.backgroundImage="url(assets/yellow.png)";              //bot is yellow, user is red 
		current_player=0;
		click_counter = click_counter+1;
		}
	
	
	if(game_status==1){
	for(let i=0; i< winning_states.length; i++){
		const options = winning_states[i];
		if(board_state[options[0]]!= -1 && board_state[options[0]]==board_state[options[1]] && board_state[options[1]] == board_state[options[2]]){
			if(current_player==1){
				help_text.innerText = "You won! We are impressed";
				score_user++;
				user_scores.innerText = "You:" + score_user;
			}else{
				help_text.innerText = "How does it feel to lose to a bot?";
				score_bot++;
				bot_scores.innerText = "Computer:" + score_bot;
			}
			game_status=0;
		}
	}
	
	
	if(click_counter > 8){
		help_text.innerText = "It's a tie!";
		ties++;
		tie_nums.innerText = "Tie:" + ties;
		game_status=0;
	}
	}
	

	
}


const resetGame = (e) => {
	game_status=1;
	click_counter=0;
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