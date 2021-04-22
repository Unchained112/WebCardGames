class FreeCellModel{
    constructor(guests=2, dishes=[]){
        this.observer = [];
        this.cards = cards;
        this.currentCard = null;
        // Four cells to store cards temporarily
        this.cell_1 = null;
        this.cell_2 = null;
        this.cell_3 = null;
        this.cell_4 = null;
        // Four foundation piles to store the complete suite of cards from Ace to King with the same suit
        this.Hearts = [];
        this.Clubs = []; 
        this.Diamonds = [];
        this.Spades = [];

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