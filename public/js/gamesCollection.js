// This class is for containing all game models
class GamesCollection{
    constructor(){
        this.observer = [];
        this.userID = 0;
        this.userEmail = 0;
        this.signText = "Sign In";
        this.loadingFromFirebase = false;
    }
    setBreakout(breakoutModel_){
        this.BreakoutModel = breakoutModel_;
    }
    setGame24(game24Model_){
        this.game24Model = game24Model_; 
    }
    setFreeCell(freeCellModel_){
        this.freeCellModel = freeCellModel_;
    }
    setBlackjack(blackjackModel_){
        this.blackjackModel = blackjackModel_;
    }
    setTexas(TexasModel_){
        this.TexasModel = TexasModel_;
    }
    showSignText(){
        if(this.userID !== 0){
            this.signText = "Sign Out";
        }
        else{
            this.signText = "Sign In";
        }
        return this.signText;
    }
    // addObserver(callback){this.observer = [...this.observer, callback];}
    // removeObserver(callback){this.observer = this.observer.filter(e=>{e!==callback});}
    // notifyObservers(){
    //     this.observer.forEach(e=>{
    //         setTimeout(function () {
    //             try {
    //                 e.call();
    //             } catch (er) {
    //                 console.error(er);
    //             }
    //           }, 1000)
    //     })
    // }
}