// This class is for containing all game models
class GamesCollection{
    constructor(){
        this.observer = [];
        this.userID = 0;
        this.userEmail = 0;
        this.signText = "Sign In";
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
    showSignText(){
        if(this.userID !== 0){
            this.signText = "Sign Out";
        }
        return this.signText;
    }
    setModel(model){
        var loadModel = JSON.parse(model);
        this.freeCellModel.setModel(loadModel.freeCellModel);
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