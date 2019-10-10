'use strict';

//On require la classe Demineur
import Demineur, {
  Mine,
  Num
} from './Demineur.js';

const demineur = new Demineur();
const app = new Vue({
  el: '#demineur',
  data: {
    demineur: demineur,
    tyoto: 'sdf',
    gamePlayable: true,
    winOrLooseMessage: '',
  methods: {
    cliquerCase: function(x, y) {
      if (this.gamePlayable) {
        demineur.click(x, y)
        if (demineur.isGameOver && demineur.isWinned) {
          this.gamePlayable = false
          this.winOrLooseMessage = 'Gagné !!'
        } else if (demineur.isGameOver && !demineur.isWinned) {
          this.gamePlayable = false
          this.winOrLooseMessage = 'Perdu !!'
        }
      }
    },
    flaggerCase: function(x, y) {
      if (this.gamePlayable) {
        demineur.flag(x, y)
      }
    }
  }
});
