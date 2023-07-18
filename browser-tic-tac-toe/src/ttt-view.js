class View {
    constructor(game, el) {
        this.game = game;
        this.el = el;
        this.handleClick = this.handleClick.bind(this);
        this.setupBoard();
        this.bindEvents();
    }
    
    setupBoard() {
        const ul = document.createElement("ul");

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const li = document.createElement("li");
                li.dataset.pos = JSON.stringify([row, col]);
                ul.append(li);
            }
        }

        this.el.append(ul);
    }
    
    bindEvents() {
        this.el.addEventListener("click", this.handleClick);
    }
    handleClick(e) {
        const target = e.target;

        if ("LI" === target.nodeName) {
            this.makeMove(target);
        }
    }

    makeMove(square) {
        const cell = JSON.parse(square.dataset.pos);
        const playerMark = this.game.currentPlayer;
        
        try {
            this.game.playMove(cell);
        } catch(e) {
            alert("Invalid move!");
            return;
        }

        square.classList.add(playerMark);
        
        if (this.game.isOver()){
            this.handleGameOver();
        } 
    }
    
    handleGameOver() {
        this.el.removeEventListener("click", this.handleClick);
        this.el.classList.add("game-over");

        const winner = this.game.winner(); 
        const caption = document.createElement("figcaption");
        
        if (winner) {
            this.el.classList.add(`winner-${winner}`);
            caption.append(`You win, ${winner.toUpperCase()}!`);
            this.el.append(caption);
        } else {
            caption.append("It's a draw.");
            this.el.append(caption);
        }
    }
}

export default View;