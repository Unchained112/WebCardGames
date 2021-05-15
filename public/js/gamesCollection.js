// This class is for containing all game models
class GamesCollection{
    constructor(){
        this.userID = 0;
    }
    setBreakout(breakoutModel_){
        this.BreakoutModel = breakoutModel_;
        this.notifyObservers();
    }
    setGame24(game24Model_){
        this.game24Model = game24Model_; 
        this.notifyObservers();
    }
    setFreeCell(freeCellModel_){
        this.freeCellModel = freeCellModel_;
        this.notifyObservers();
    }
    setBlackjack(blackjackModel_){
        this.blackjackModel = blackjackModel_;
        this.notifyObservers();
    }
    setTexas(TexasModel_){
        this.TexasModel = TexasModel_;
        this.notifyObservers();
    }

    setModel(model){

    }


    addObserver(callback){this.observer = [...this.observer, callback];}
    removeObserver(callback){this.observer = this.observer.filter(e=>{e!==callback});}
    notifyObservers(){
        this.observer.forEach(e=>{
            setTimeout(function () {
                try {
                    e.call();
                } catch (er) {
                    console.error(er);
                }
              }, 1000)
        })
    }
}