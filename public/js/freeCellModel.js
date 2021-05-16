class FreeCellModel{
    constructor(){
        this.gameStart = false;
        this.observer = [];
        this.currentCard = {code:"", image:"./assets/back_3.png", value:"", suit:""};
        // Four cells to store cards temporarily
        this.cells = [{code:"", image:"./assets/back_3.png", value:"", suit:""}, 
                {code:"", image:"./assets/back_3.png", value:"", suit:""}, 
                {code:"", image:"./assets/back_3.png", value:"", suit:""}, 
                {code:"", image:"./assets/back_3.png", value:"", suit:""}];
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
        this.previousLocation = -1;
    }
    setCurrentCard(card){
        if(card.code !== this.currentCard.code){
            this.notifyObservers();
        }
        this.currentCard = card;
    }
    emptyCurrentCard(){
        this.currentCard = {code:"", image:"./assets/back_3.png", value:"", suit:""};
        this.notifyObservers();
    }
    startGame(cards){
        if(this.gameStart === true){
            return;
        }
        this.notifyObservers();
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
        this.notifyObservers();
        this.gameStart = false;
        this.currentCard = {code:"", image:"./assets/back_3.png", value:"", suit:""};
        // Four cells to store cards temporarily
        this.cells = [{code:"", image:"./assets/back_3.png", value:"", suit:""}, 
                {code:"", image:"./assets/back_3.png", value:"", suit:""}, 
                {code:"", image:"./assets/back_3.png", value:"", suit:""}, 
                {code:"", image:"./assets/back_3.png", value:"", suit:""}];
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
        this.previousLocation = -1;
        this.startGame(this.allCards);
    }
    addCardtoPile(index){
        this.notifyObservers();
        if(index === 10){
            if(this.pile_1.length === 1){
                if(this.pile_1[0].code === ""){
                    this.pile_1[0] = this.currentCard;
                    return;
                }
            }
            this.pile_1.push(this.currentCard);
        }
        if(index === 11){ 
            if(this.pile_2.length === 1){
                if(this.pile_2[0].code === ""){
                    this.pile_2[0] = this.currentCard;
                    return;
                }
            }
            this.pile_2.push(this.currentCard);
        }
        if(index === 12){
            if(this.pile_3.length === 1){
                if(this.pile_3[0].code === ""){
                    this.pile_3[0] = this.currentCard;
                    return;
                }
            }
            this.pile_3.push(this.currentCard);
        }
        if(index === 13){
            if(this.pile_4.length === 1){
                if(this.pile_4[0].code === ""){
                    this.pile_4[0] = this.currentCard;
                    return;
                }
            }
            this.pile_4.push(this.currentCard);
        }
        if(index === 14){
            if(this.pile_5.length === 1){
                if(this.pile_5[0].code === ""){
                    this.pile_5[0] = this.currentCard;
                    return;
                }
            }
            this.pile_5.push(this.currentCard);
        }
        if(index === 15){
            if(this.pile_6.length === 1){
                if(this.pile_6[0].code === ""){
                    this.pile_6[0] = this.currentCard;
                    return;
                }
            }
            this.pile_6.push(this.currentCard);
        }
        if(index === 16){
            if(this.pile_7.length === 1){
                if(this.pile_7[0].code === ""){
                    this.pile_7[0] = this.currentCard;
                    return;
                }
            }
            this.pile_7.push(this.currentCard);
        }
        if(index === 17){
            if(this.pile_8.length === 1){
                if(this.pile_8[0].code === ""){
                    this.pile_8[0] = this.currentCard;
                    return;
                }
            }
            this.pile_8.push(this.currentCard);
        }
    }
    pileLegalCheck(index, card){
        var pile;
        switch(index){
            case 10:
                pile = this.pile_1;
                break;
            case 11:
                pile = this.pile_2;
                break;
            case 12:
                pile = this.pile_3;
                break;
            case 13:
                pile = this.pile_4;
                break;
            case 14:
                pile = this.pile_5;
                break;
            case 15:
                pile = this.pile_6;
                break;
            case 16:
                pile = this.pile_7;
                break;
            case 17:
                pile = this.pile_8;
                break;
        }
        if(pile.length === 0){
            return true;
        }
        var top = pile[pile.length-1];
        if(top.code === ""){
            return true;
        }
        var top_v = this.strToValue(top.value);
        var card_v = this.strToValue(card.value);
        var top_c = this.strToColor(top.suit);
        var card_c = this.strToColor(card.suit);
        if(top_c !== card_c && top_v === card_v + 1){
            return true;
        }
        else{
            return false;
        }
    }
    removeCardtoPile(index){
        this.notifyObservers();
        if(index === 10){
            if(this.pile_1.length === 1){
                var card = this.pile_1.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_1.push(temp);
                this.pile_1.push(card);
            }
            return this.pile_1.pop();
        }
        if(index === 11){
            if(this.pile_2.length === 1){
                var card = this.pile_2.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_2.push(temp);
                this.pile_2.push(card);
            }
            return this.pile_2.pop();
        }
        if(index === 12){
            if(this.pile_3.length === 1){
                var card = this.pile_3.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_3.push(temp);
                this.pile_3.push(card);
            }
            return this.pile_3.pop();
        }
        if(index === 13){
            if(this.pile_4.length === 1){
                var card = this.pile_4.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_4.push(temp);
                this.pile_4.push(card);
            }
            return this.pile_4.pop();
        }
        if(index === 14){
            if(this.pile_5.length === 1){
                var card = this.pile_5.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_5.push(temp);
                this.pile_5.push(card);
            }
            return this.pile_5.pop();
        }
        if(index === 15){
            if(this.pile_6.length === 1){
                var card = this.pile_6.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_6.push(temp);
                this.pile_6.push(card);
            }
            return this.pile_6.pop();
        }
        if(index === 16){
            if(this.pile_7.length === 1){
                var card = this.pile_7.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_7.push(temp);
                this.pile_7.push(card);
            }
            return this.pile_7.pop();
        }
        if(index === 17){
            if(this.pile_8.length === 1){
                var card = this.pile_8.pop();
                var temp = {code:"", image:"./assets/back_3.png", value:"", suit:""};
                this.pile_8.push(temp);
                this.pile_8.push(card);
            }
            return this.pile_8.pop();
        }
    }   
    addCardtoFoundation(index){
        this.notifyObservers();
        if(index === 4){
            this.Hearts.push(this.currentCard);
        }
        if(index === 5){
            this.Clubs.push(this.currentCard);
        }
        if(index === 6){
            this.Diamonds.push(this.currentCard);
        }
        if(index === 7){
            this.Spades.push(this.currentCard);
        }
    }
    addCardtoCell(index){
        this.notifyObservers();
        this.cells[index] = this.currentCard;
        //var card = this.currentCard
        //this.cells.splice(index, 1, "may");
    }
    removeCardtoCell(index){
        this.notifyObservers();
        var card = this.cells[index];
        this.cells[index] = {code:"", image:"./assets/back_3.png", value:"", suit:""};
        return card;
    }
    setPreviousLocation(location){
        this.previousLocation = location;
    }
    checkWin(){
        if(this.Hearts.length === 13 && this.Clubs.length === 13 && this.Diamonds.length === 13 && this.Spades.length === 13){
            alert("You Win!");
            var newPromise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_2, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_2)]);
            const p = newPromise;
            newPromise
            .then(dt=>{
                if(newPromise===p){
                    this.allCards = dt[0].cards;
                    console.log(this.allCards);
                    this.notifyObservers();
                }
            })
            .catch(err=>{
                if(newPromise===p){
                    console.log(err);
                    newPromise = Promise.all([CardSource.drawCards(DECK_ID_BREAKOUT_2, 52), CardSource.reShuffle(DECK_ID_BREAKOUT_2)]);
                }
            });
            return true;
        }
        else{
            return false;
        }
    }
    strToValue(value){
        switch (value) {
            case "ACE":
              return 1;
            case "2":
              return 2;
            case "3":
              return 3;
            case "4":
              return 4;
            case "5":
              return 5;
            case "6":
              return 6;
            case "7":
              return 7;
            case "8":
              return 8;
            case "9":
              return 9;
            case "10":
              return 10;
            case "JACK":
              return 11;
            case "QUEEN":
              return 12;
            case "KING":
              return 13;
            case "":
              return 0;
            default:
              console.log("Error");
          }
    }
    strToColor(str){
        switch(str){
            case "DIAMONDS":
              return 0; //red
            case "CLUBS":
              return 1; //black
            case "SPADES":
              return 1; //black
            case "HEARTS":
              return 0; //red
            case "":
              return -1;
            default:
              console.log("Error");
        }
    }
    setModel(model){
        this.Clubs = model.Clubs;
        this.Diamonds = model.Diamonds;
        this.Hearts = model.Hearts;
        this.Spades = model.Spades;
        this.allCards = model.allCards;
        this.cells = model.cells;
        this.currentCard = model.currentCard;
        this.gameStart = model.gameStart;
        this.pile_1 = model.pile_1;
        this.pile_2 = model.pile_2;
        this.pile_3 = model.pile_3;
        this.pile_4 = model.pile_4;
        this.pile_5 = model.pile_5;
        this.pile_6 = model.pile_6;
        this.pile_7 = model.pile_7;
        this.pile_8 = model.pile_8;
        this.previousLocation = model.previousLocation;
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