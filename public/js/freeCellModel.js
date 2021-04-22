class FreeCellModel{
    constructor(){
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
    }
    setCurrentCard(card){
        this.currentCard = card;
        this.notifyObservers();
    }
    startGame(cards){

    }
    checkWin(){
        if(this.Hearts.length === 13 && this.Clubs.length === 13 && this.Diamonds.length === 13 && this.Spades.length === 13){
            return true;
        }
        else{
            return false;
        }
    }
    setNumberOfGuests(x){ 
        var temp = this.numberOfGuests;
        this.numberOfGuests = x;
        if(x !== temp) this.notifyObservers();
    } 
    setDishes(dishes){ this.dishes= [...dishes]; this.notifyObservers();}
    addToMenu(dish){
        if(this.dishes.includes(dish) !== true) this.notifyObservers(); 
        this.dishes = [...this.dishes, dish];
    }
    removeFromMenu(dishData){
        var flag = false;
        this.dishes.forEach(e=>{if(e.id === dishData.id) flag = true;});
        if(flag === true) this.notifyObservers();
        this.dishes = this.dishes.filter(e=>e.id !== dishData.id);
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