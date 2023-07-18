class View {
    constructor(game, el) {
        this.game = game;
        this.el = el;
        this.setupBoard();
        this.handleClick(e);
    }
    
    setupBoard() {
        let ul = document.createElement('ul');

        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const li = document.createElement('li');
                li.dataset.row = row;
                li.dataset.col = col;
                ul.appendChild(li);
            }
        }

        this.el.appendChild(ul);
    }
    
    handleClick(e) {

    }

    makeMove(square) {
    }
    
    handleGameOver() {
    }
}

export default View;