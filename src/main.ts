import  {Game} from './core/game';

const app = document.getElementById("app") as HTMLElement;

const game = new Game(app);
await game.start();
gameLoop();

function gameLoop(){
    game.render();
    requestAnimationFrame(() => gameLoop());
}