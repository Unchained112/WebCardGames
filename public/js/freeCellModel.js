class FreeCellModel{
    constructor(){
        this.gameStart = false;
        this.observer = [];
        this.currentCard = {code:"", image:"", value:"", suit:""};
        // Four cells to store cards temporarily
        this.cells = [0, 0, 0, 0]
        // Four foundation piles to store the complete suite of cards from Ace to King with the same suit
        this.Hearts = [];
        this.Clubs = []; 
        this.Diamonds = [];
        this.Spades = [];
        // 8 tableau piles
        this.pile_1 = [];
        this.pile_2 = [];
        this.pile_3 = [];
        this.pile_4 = [];
        this.pile_5 = [];
        this.pile_6 = [];
        this.pile_7 = [];
        this.pile_8 = [];
        this.previousLocation = "None";
    }
    setCurrentCard(card){
        if(card.code !== this.currentCard.code){
            this.notifyObservers();
        }
        this.currentCard = card;
    }
    emptyCurrentCard(){
        this.currentCard = {code:"", image:"", value:"", suit:""};
    }
    startGame(cards){
        if(this.gameStart === true){
            return;
        }
        this.gameStart = true;
        console.log("start");
        this.allCards = cards;
        for(var i = 0; i < 7; i++){
            this.pile_1.push(this.allCards[i]);
        }
        for(var i = 7; i < 14; i++){
            this.pile_2.push(this.allCards[i]);
        }
        for(var i = 14; i < 21; i++){
            this.pile_3.push(this.allCards[i]);
        }
        for(var i = 21; i < 28; i++){
            this.pile_4.push(this.allCards[i]);
        }
        for(var i = 28; i < 34; i++){
            this.pile_5.push(this.allCards[i]);
        }
        for(var i = 34; i < 40; i++){
            this.pile_6.push(this.allCards[i]);
        }
        for(var i = 40; i < 46; i++){
            this.pile_7.push(this.allCards[i]);
        }
        for(var i = 46; i < 52; i++){
            this.pile_8.push(this.allCards[i]);
        }
    }
    restartGame(){
        if(this.gameStart === false){
            return;
        }
        this.gameStart = false;
        this.observer = [];
        this.currentCard = {code:"", image:"", value:"", suit:""};
        // Four cells to store cards temporarily
        this.cells = [0, 0, 0, 0]
        // Four foundation piles to store the complete suite of cards from Ace to King with the same suit
        this.Hearts = [];
        this.Clubs = []; 
        this.Diamonds = [];
        this.Spades = [];
        // 8 tableau piles
        this.pile_1 = [];
        this.pile_2 = [];
        this.pile_3 = [];
        this.pile_4 = [];
        this.pile_5 = [];
        this.pile_6 = [];
        this.pile_7 = [];
        this.pile_8 = [];
        this.gameStart(this.allCards);
    }
    addCardtoPile(pile){

    }
    
    addCardtoFoundation(foundation){

    }
    removeCardtoPile(pile){

    }
    addCardtoCell(index){
        if(this.cells[index] === 0 && this.currentCard.code !== ""){
            this.cells[index] = this.currentCard;
        }
    }
    removeCardtoCell(index){
        
    }
    removeCardtoFoundation(foundation, card){

    }
    setPreviousLocation(location){
        this.previousLocation = location;
    }
    checkWin(){
        if(this.Hearts.length === 13 && this.Clubs.length === 13 && this.Diamonds.length === 13 && this.Spades.length === 13){
            return true;
        }
        else{
            return false;
        }
    }




    setCurrentDish(id){ 
        if(this.currentDish){
            if(this.currentDish.id === id) return;
        }
        this.currentDish = {id:id};
        this.currentDishDetails = this.currentDishError = null;
        this.notifyObservers();
        if(this.currentDish){
           DishSource.getDishDetails(this.currentDish.id)
            .then(r=>{
                this.currentDishDetails = r;
                    console.log(this.currentDishDetails);
                    this.notifyObservers();
                if(this.currentDish.id === id){
                    
            }})
            .catch(er=>{
                if(this.currentDish.id === id){
                    this.currentDishError = er;
                    this.notifyObservers();
            }})
        }
        //console.log("the current dish is " + this.currentDish.title);
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
};