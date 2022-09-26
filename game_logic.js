const tiles = Array.from(document.querySelectorAll('.tile'));

tiles.forEach((tile,index) => {
	tile.addEventListener('click', () => changeTile(tile, index));
});

const changeTile = (tile, index) => {
	tile.style.backgroundImage="url(assets/red.png)";
}